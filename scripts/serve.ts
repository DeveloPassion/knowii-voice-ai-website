import { join, normalize } from 'node:path'
import { DIST } from './build'

// Minimal static file server for the built site. The app uses a HashRouter,
// so any unknown path falls back to index.html (single-page app behaviour).
export function serveDist(port: number) {
    return Bun.serve({
        port,
        async fetch(request) {
            const url = new URL(request.url)
            let pathname = decodeURIComponent(url.pathname)
            if (pathname.endsWith('/')) {
                pathname += 'index.html'
            }

            // Prevent path traversal outside of the dist directory.
            const filePath = normalize(join(DIST, pathname))
            if (!filePath.startsWith(normalize(DIST))) {
                return new Response('Forbidden', { status: 403 })
            }

            const file = Bun.file(filePath)
            if (await file.exists()) {
                return new Response(file)
            }

            return new Response(Bun.file(join(DIST, 'index.html')), {
                headers: { 'Content-Type': 'text/html' }
            })
        }
    })
}

if (import.meta.main) {
    const port = Number(process.env['PORT'] ?? 4173)
    serveDist(port)
    console.log(`Preview server running at http://localhost:${port}`)
}
