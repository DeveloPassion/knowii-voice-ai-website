# Knowii Voice AI - Marketing Website

## Project overview

This is the marketing website for Knowii Voice AI, a voice-to-text application that runs entirely on your computer.

- **Target**: Static marketing website deployed to GitHub Pages
- **Domain**: https://voice-ai.knowii.net
- **Entry point**: `src/main.tsx`
- **Build output**: `dist/` (copied to `public/` for GitHub Pages deployment)

## Related Repositories

This website is part of the Knowii Voice AI ecosystem:

### Main Application

- **Repository**: Private (https://github.com/DeveloPassion/knowii-voice-ai)
- **Local path**: `../knowii-voice-ai`
- **Purpose**: The main desktop application (Tauri-based)

### Documentation Website

- **Repository**: https://github.com/DeveloPassion/knowii-voice-ai-docs
- **Local path**: `../knowii-voice-ai-docs`
- **Domain**: https://docs.voice-ai.knowii.net
- **Purpose**: User documentation, roadmap, tutorials, FAQ

**Note**: This marketing website is public. When updating product features or pricing in the main application, consider whether the marketing copy needs updates here.

## Documentation

### Sales Copy

The `documentation/Sales Copy.md` file contains the complete sales copy that drives the content of the landing page. When updating the marketing message or product positioning:

1. Update `documentation/Sales Copy.md` first
2. Then update the corresponding sections in `src/pages/home.tsx`
3. Ensure consistency across all pages

## Environment & tooling

### Type Checking

This project uses a **strict TypeScript configuration**. Always ensure your code compiles without errors.

#### Watch Mode (Recommended for Development)

**ALWAYS run TypeScript in watch mode in the background when working on this project:**

```bash
npm run tsc:watch
```

This runs `tsc --noEmit --watch` which:

- Continuously monitors TypeScript files for changes
- Automatically type checks on every save
- Provides immediate feedback on compilation errors
- Does NOT generate output files
- Keeps running in the background

**Benefits:**

- Catch type errors immediately as you code
- No need to manually run type checks after each change
- Faster feedback loop

#### Quick Type Check

Use this to verify code compiles correctly without building:

```bash
npm run tsc
```

This runs `tsc --noEmit` which:

- Type checks all TypeScript files
- Reports compilation errors
- Does NOT generate output files
- Exits immediately with success/failure status

**When to use:**

- Before committing code
- To quickly verify changes compile
- **This is the recommended command for agents to verify compilation**

#### Build Validation

**ALWAYS** run when making changes to pages or components:

```bash
npm run build
```

**When to use:**

- After making changes to React components, pages, or UI code
- Before committing any changes
- To verify the production build pipeline works

### Code Formatting

This project enforces consistent code formatting.

#### Automatic Formatting (Pre-commit Hook)

A pre-commit hook automatically formats code before each commit using Prettier via `lint-staged`.

#### Manual Formatting

**ALWAYS** run after making changes to ensure consistent formatting:

```bash
npm run format
```

### Linting

This project enforces code quality and conventions through ESLint.

#### Quick Lint Check

**ALWAYS** run after making TypeScript changes:

```bash
npm run lint
```

**Must exit with zero errors before committing**

## File & folder conventions

- **Organize code into multiple files**: Split functionality across separate modules rather than putting everything in one file
- Source lives in `src/`
- Pages live in `src/pages/`
- Layout components in `src/components/layout/`
- Reusable UI components in `src/components/ui/`
- Assets (images, screenshots) in `src/assets/`

## Deployment

The website is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions.

### Deployment Process

1. Push to `main` branch
2. GitHub Actions workflow builds the site (`npm run build`)
3. Workflow copies `dist/` to `public/`
4. Workflow deploys `public/` to GitHub Pages
5. Site is available at https://voice-ai.knowii.net

### Manual Deployment

If needed, you can trigger deployment manually from the GitHub Actions tab.

## Versioning & releases

See the main application's versioning documentation. This website follows a simpler versioning scheme and doesn't require formal releases for every change.

## UI, UX & copy guidelines

- Always use Tailwind CSS
- **Full Responsiveness**: All UI must be fully responsive using Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px)
    - Mobile (<768px): Single column layouts, larger touch targets
    - Tablet (768px-1024px): Optimized layouts for medium screens
    - Desktop (≥1024px): Full multi-column layouts
    - Content must never be cut off or require horizontal scrolling
- **Color Scheme**:
    - Primary: #FFFFFF (white text)
    - Secondary: #E5007D (pink for CTAs and accents)
    - Background: #37404C (dark gray background)
- **Typography**: Noto Sans font family from Google Fonts
- **CTAs**: Use the secondary pink color, make them prominent and clear
- **Images**: All images stored in `src/assets/images/` and `src/assets/screenshots/`

## Coding conventions

### TypeScript Configuration

This project uses **super strict TypeScript configuration**. All code MUST respect the strict settings defined in `tsconfig.json`.

**Always:**

- Check for null/undefined before accessing properties
- Verify array/object access returns non-undefined before use
- Specify explicit return types for all functions
- Remove unused variables or prefix with `_` if intentionally unused
- Use `const` by default, `let` only when reassignment is needed, never `var`

### General Conventions

- **Split large files**: If any file exceeds ~200-300 lines, consider breaking it into smaller, focused modules
- **Use clear module boundaries**: Each file should have a single, well-defined responsibility
- Prefer `async/await` over promise chains; handle errors gracefully

## Code Style Guidelines

**TypeScript/React (Frontend):**

- Functional components with TypeScript interfaces
- React.FC for explicit component typing
- PascalCase for components, camelCase for variables/functions
- kebab-case for file names

**Imports:**

- Group imports: external libs, internal modules, relative imports
- Use type imports for TypeScript: `import type { Something }`
- Named imports preferred over default exports

**Component Patterns:**

- Container component pattern for layout
- Composition over inheritance
- Prop drilling minimized with context where appropriate
- Use the `cn()` utility from `@/lib/utils` for conditional className merging

## Agent do/don't

**Do**

- Keep the marketing copy consistent with the product's actual features
- Ensure all links work (especially Gumroad purchase links)
- Test responsive layouts on multiple breakpoints
- Optimize images for web performance
- Keep the Privacy Policy and Terms of Use up to date with product changes

**Don't**

- Make claims about the product that aren't true or aren't in the main application
- Break the color scheme or typography guidelines
- Add features or complexity that slow down the page load
- Forget to update the sales copy documentation when changing page content
