# Development Guide

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm 9 or later

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (default Vite port).

## Development Workflow

### 1. Type Checking

Always run type checking before committing:

```bash
npm run tsc
```

For continuous type checking during development:

```bash
npm run tsc:watch
```

### 2. Linting

Check code quality:

```bash
npm run lint
```

### 3. Formatting

Format all code:

```bash
npm run format
```

Note: Prettier will also run automatically on commit via the pre-commit hook.

### 4. Building

Build for production:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### 5. Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
knowii-voice-ai-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── assets/
│   │   ├── images/            # Logo, icons, photos
│   │   └── screenshots/       # Product screenshots
│   ├── components/
│   │   ├── layout/            # Layout components (Header, Footer, AppLayout)
│   │   └── ui/                # Reusable UI components
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn for classnames)
│   ├── pages/                 # Page components
│   │   ├── home.tsx
│   │   ├── privacy-policy.tsx
│   │   └── terms-of-use.tsx
│   ├── styles/
│   │   └── index.css          # Global styles & Tailwind imports
│   ├── index.html             # HTML entry point
│   ├── main.tsx               # React entry point
│   └── vite-env.d.ts          # Vite TypeScript definitions
├── documentation/             # Documentation and sales copy
├── .editorconfig
├── .gitignore
├── .prettierignore
├── .release-it.js            # Release configuration
├── CLAUDE.MD                  # Project documentation for Claude
├── AGENTS.md                  # Agent instructions
├── DEVELOPMENT.md             # This file
├── commitlint.config.cjs     # Commit message linting
├── eslint.config.js          # ESLint configuration
├── package.json
├── prettier.config.js        # Prettier configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # TypeScript config for build tools
└── vite.config.ts            # Vite configuration
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
npm run commit
```

### Pre-commit Hooks

The pre-commit hook automatically:

- Formats code with Prettier
- Stages formatted files

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

1. Check TypeScript errors: `npm run tsc`
2. Check ESLint errors: `npm run lint`
3. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
4. Clear Vite cache: `rm -rf node_modules/.vite`

### Styles Not Applying

1. Check Tailwind configuration in `src/styles/index.css`
2. Ensure `@tailwindcss/vite` plugin is loaded in `vite.config.ts`
3. Restart the dev server

### Images Not Loading

1. Verify images are in `src/assets/`
2. Check paths start with `/assets/` (not `./assets/` or `../assets/`)
3. Ensure images are referenced correctly in components

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
