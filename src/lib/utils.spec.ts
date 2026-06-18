import { describe, expect, test } from 'bun:test'
import { cn } from './utils'

describe('cn', () => {
    test('joins class names', () => {
        expect(cn('a', 'b')).toBe('a b')
    })

    test('drops falsy values', () => {
        expect(cn('a', false, undefined, null, 'c')).toBe('a c')
    })

    test('resolves conflicting Tailwind utilities, last wins', () => {
        expect(cn('p-2', 'p-4')).toBe('p-4')
    })
})
