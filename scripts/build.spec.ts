import { describe, expect, test } from 'bun:test'
import {
    ASSETS_DIR,
    CSS_ENTRY,
    DIST,
    HTML_ENTRY,
    JS_ENTRY,
    PUBLIC_DIR,
    SRC,
    contentHash
} from './build'

describe('build constants', () => {
    test('SRC is src', () => {
        expect(SRC).toBe('src')
    })

    test('DIST is dist', () => {
        expect(DIST).toBe('dist')
    })

    test('ASSETS_DIR lives under dist', () => {
        expect(ASSETS_DIR).toBe('dist/assets')
    })

    test('PUBLIC_DIR is public', () => {
        expect(PUBLIC_DIR).toBe('public')
    })

    test('entrypoints point at src', () => {
        expect(HTML_ENTRY).toBe('src/index.html')
        expect(JS_ENTRY).toBe('src/main.tsx')
        expect(CSS_ENTRY).toBe('src/styles/index.css')
    })
})

describe('contentHash', () => {
    test('is deterministic for the same bytes', () => {
        const bytes = new TextEncoder().encode('hello world')
        expect(contentHash(bytes)).toBe(contentHash(bytes))
    })

    test('differs for different bytes', () => {
        const a = contentHash(new TextEncoder().encode('a'))
        const b = contentHash(new TextEncoder().encode('b'))
        expect(a).not.toBe(b)
    })

    test('produces a short alphanumeric hash', () => {
        const hash = contentHash(new TextEncoder().encode('knowii'))
        expect(hash).toMatch(/^[0-9a-z]{1,8}$/)
    })
})
