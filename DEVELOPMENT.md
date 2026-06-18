# Development Guide

## Getting Started

### Prerequisites

- [Bun](https://bun.com/) 1.3 or later (used for installing, building, running and testing)

### Installation

```bash
bun install
bun run setup   # wires up the Git config-based hooks (one time per clone)
```

### Development Server

```bash
bun run dev
```

The site will be available at `http://localhost:5173`. Bun bundles the app and
rebuilds automatically when files under `src/` change. Set `PORT` to use a
different port.

## Development Workflow

### 1. Type Checking

Always run type checking before committing:

```bash
bun run tsc
```

For continuous type checking during development:

```bash
bun run tsc:watch
```

### 2. Linting

Check code quality:

```bash
bun run lint
```

### 3. Formatting

Format all code:

```bash
bun run format
```

Note: Prettier will also run automatically on commit via the pre-commit hook.

### 4. Testing

Run the test suite (powered by `bun test`):

```bash
bun test
```

### 5. Validating

Run type checking, tests and linting together:

```bash
bun run validate
```

### 6. Building

Build for production:

```bash
bun run build
```

The build output will be in the `dist/` directory. The build runs `tsc` first,
then `bun scripts/build.ts --prod`, which bundles the JS with Bun, compiles the
CSS with the Tailwind CLI, copies `public/` and emits a production `index.html`.

### 7. Preview

Preview the production build locally:

```bash
bun run preview
```

## Project Structure

```
knowii-voice-ai-website/
├── .github/
│   └── workflows/
│       ├── ci.yml              # Type check, lint, test, format, build
│       ├── deploy.yml          # GitHub Actions deployment
│       └── release.yml         # GitHub release creation
├── public/
│   └── assets/
│       ├── images/            # Logo, icons, photos
│       └── screenshots/       # Product screenshots
├── scripts/
│   ├── build.ts               # Bun build orchestration
│   ├── build.spec.ts          # Build script tests
│   ├── dev.ts                 # Dev server (build + watch + serve)
│   ├── serve.ts               # Static preview server
│   └── git-hooks/
│       └── format-staged.sh   # Pre-commit Prettier formatting
├── src/
│   ├── components/
│   │   ├── layout/            # Layout components (Header, Footer, AppLayout)
│   │   └── ui/                # Reusable UI components
│   ├── lib/
│   │   ├── utils.ts           # Utility functions (cn for classnames)
│   │   └── utils.spec.ts      # Utility tests
│   ├── pages/                 # Page components
│   │   ├── home.tsx
│   │   ├── privacy-policy.tsx
│   │   └── terms-of-use.tsx
│   ├── styles/
│   │   └── index.css          # Global styles & Tailwind imports
│   ├── index.html             # HTML entry point
│   └── main.tsx               # React entry point
├── documentation/             # Documentation and sales copy
├── .editorconfig
├── .gitconfig                 # Git config-based hooks (Git 2.54+)
├── .gitignore
├── .prettierignore
├── AGENTS.md                  # Agent instructions
├── DEVELOPMENT.md             # This file
├── bunfig.toml                # Bun configuration
├── commitlint.config.ts       # Commit message linting
├── eslint.config.ts           # ESLint configuration
├── package.json
├── prettier.config.cjs        # Prettier configuration
└── tsconfig.json              # TypeScript configuration
```

## Git Workflow

### Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test changes
- `chore`: Build process or auxiliary tool changes
- `ci`: CI/CD changes

**Scopes:**

- `landing`: Landing page
- `privacy`: Privacy policy
- `terms`: Terms of use
- `layout`: Layout components
- `footer`: Footer component
- `header`: Header component
- `ui`: UI components
- `build`: Build system
- `deploy`: Deployment
- `deps`: Dependencies
- `docs`: Documentation

**Examples:**

```bash
feat(landing): add testimonials section
fix(footer): correct link to privacy policy
docs(readme): update installation instructions
style(ui): format button components
chore(deps): update react to v19
```

### Using Commitizen

For interactive commit message creation:

```bash
bun run commit
```

### Git Hooks

This project uses Git 2.54+ config-based hooks (defined in `.gitconfig`), enabled
once per clone with `bun run setup`. They replace the previous husky setup.

The pre-commit hook automatically:

- Formats staged files with Prettier (`scripts/git-hooks/format-staged.sh`)
- Re-stages the formatted files

The commit-msg hook validates commit messages against Conventional Commits format.

## Deployment

### Automatic Deployment

Every push to `main` automatically deploys to GitHub Pages via GitHub Actions.

### Manual Deployment

Trigger deployment manually from the GitHub Actions tab if needed.

## Releases

None

## Troubleshooting

### Build Fails

1. Check TypeScript errors: `bun run tsc`
2. Check ESLint errors: `bun run lint`
3. Clear node_modules and reinstall: `rm -rf node_modules && bun install`

### Styles Not Applying

1. Check Tailwind configuration in `src/styles/index.css`
2. The CSS is compiled by the Tailwind CLI in `scripts/build.ts`
3. Restart the dev server

### Images Not Loading

1. Verify images are in `public/assets/`
2. Check paths start with `/assets/` (not `./assets/` or `../assets/`)
3. Ensure images are referenced correctly in components

## Resources

- [Bun Documentation](https://bun.com/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
