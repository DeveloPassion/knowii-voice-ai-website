import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintReact from '@eslint-react/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import type { Linter } from 'eslint'

const config: Linter.Config[] = [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        ignores: ['**/dist/**']
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                Bun: 'readonly'
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        ...eslintReact.configs.recommended
    } as Linter.Config,
    eslintConfigPrettier as Linter.Config,
    // Allow CommonJS require in .cjs and .release-it.js files
    {
        files: ['**/*.cjs', '.release-it.js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off'
        }
    }
]

export default config
