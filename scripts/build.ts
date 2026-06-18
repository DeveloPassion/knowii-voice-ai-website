import { cp, mkdir, rm } from 'node:fs/promises'
import { watch } from 'node:fs'
import { basename, join } from 'node:path'
import { parseArgs } from 'node:util'
import { $ } from 'bun'

// Build orchestration for the Knowii Voice AI marketing site.
// Replaces Vite: Bun bundles the JS/TSX, the Tailwind CLI compiles the CSS,
// public assets are copied verbatim and a production index.html is emitted.

export const SRC = 'src'
export const DIST = 'dist'
export const ASSETS_DIR = join(DIST, 'assets')
export const PUBLIC_DIR = 'public'
export const HTML_ENTRY = join(SRC, 'index.html')
export const JS_ENTRY = join(SRC, 'main.tsx')
export const CSS_ENTRY = join(SRC, 'styles', 'index.css')

// Short content hash used for cache-busting production asset filenames.
export function contentHash(bytes: Uint8Array): string {
    return Bun.hash(bytes).toString(36).slice(0, 8)
}

async function buildJs(prod: boolean): Promise<string> {
    const result = await Bun.build({
        entrypoints: [JS_ENTRY],
        outdir: ASSETS_DIR,
        target: 'browser',
        format: 'esm',
        minify: prod,
        sourcemap: prod ? 'none' : 'linked',
        naming: prod ? '[name]-[hash].[ext]' : '[name].[ext]',
        define: {
            'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development')
        }
    })

    if (!result.success) {
        for (const message of result.logs) {
            console.error(message)
        }
        throw new Error('JS build failed')
    }

    const entry = result.outputs.find((output) => output.kind === 'entry-point')
    if (!entry) {
        throw new Error('JS build produced no entry-point output')
    }

    return basename(entry.path)
}

async function buildCss(prod: boolean): Promise<string> {
    const tmpPath = join(ASSETS_DIR, 'index.css')
    const flags = prod ? ['--minify'] : []
    await $`bunx @tailwindcss/cli -i ${CSS_ENTRY} -o ${tmpPath} ${flags}`.quiet()

    if (!prod) {
        return 'index.css'
    }

    const bytes = await Bun.file(tmpPath).bytes()
    const hashed = `index-${contentHash(bytes)}.css`
    await Bun.write(join(ASSETS_DIR, hashed), bytes)
    await rm(tmpPath)
    return hashed
}

async function emitHtml(jsName: string, cssName: string): Promise<void> {
    let html = await Bun.file(HTML_ENTRY).text()
    html = html.replace(
        '<script type="module" src="/main.tsx"></script>',
        `<script type="module" src="/assets/${jsName}"></script>`
    )
    html = html.replace(
        '</head>',
        `        <link rel="stylesheet" href="/assets/${cssName}" />\n    </head>`
    )
    await Bun.write(join(DIST, 'index.html'), html)
}

export async function build(prod: boolean): Promise<void> {
    const started = performance.now()
    await rm(DIST, { recursive: true, force: true })
    await mkdir(ASSETS_DIR, { recursive: true })
    await cp(PUBLIC_DIR, DIST, { recursive: true })

    const [jsName, cssName] = await Promise.all([buildJs(prod), buildCss(prod)])
    await emitHtml(jsName, cssName)

    const elapsed = Math.round(performance.now() - started)
    console.log(`Built ${prod ? 'production' : 'development'} bundle in ${elapsed}ms`)
}

if (import.meta.main) {
    const { values } = parseArgs({
        args: Bun.argv,
        options: {
            prod: { type: 'boolean', default: false },
            watch: { type: 'boolean', default: false }
        },
        strict: true,
        allowPositionals: true
    })

    await build(Boolean(values.prod))

    if (values.watch) {
        console.log(`Watching ${SRC} for changes...`)
        watch(SRC, { recursive: true }, async () => {
            try {
                await build(Boolean(values.prod))
            } catch (error) {
                console.error(error)
            }
        })
    }
}
