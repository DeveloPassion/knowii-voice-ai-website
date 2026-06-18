import { watch } from 'node:fs'
import { build, SRC } from './build'
import { serveDist } from './serve'

// Development server: build once, serve dist, then rebuild on every change.
const port = Number(process.env['PORT'] ?? 5173)

await build(false)
serveDist(port)
console.log(`Dev server running at http://localhost:${port}`)

watch(SRC, { recursive: true }, async () => {
    try {
        await build(false)
        console.log('Rebuilt')
    } catch (error) {
        console.error(error)
    }
})
