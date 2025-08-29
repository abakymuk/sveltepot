# SveltePot Project Setup

## Overview

SveltePot is a modern SvelteKit application with TypeScript, ESLint, Prettier, Husky, and comprehensive CI/CD setup.

## Technologies

- **Framework**: SvelteKit 2.x
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Flowbite-Svelte
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Authentication**: Stack Auth
- **Package Manager**: pnpm
- **CI/CD**: GitHub Actions
- **Testing**: Vitest + Playwright
- **Storybook**: Component development

## Quick Start

1. **Clone and install dependencies**:

   ```bash
   git clone <repository-url>
   cd sveltepot
   pnpm install
   ```

2. **Set up environment variables**:

   ```bash
   cp .env.example .env
   # Fill in your environment variables
   ```

3. **Start development server**:

   ```bash
   pnpm dev
   ```

4. **Open the application**:
   - Main app: http://localhost:5173
   - UI Playground: http://localhost:5173/playground/ui

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript checks
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run tests
- `pnpm storybook` - Start Storybook

## UI Stack (Tailwind + Flowbite-Svelte)

### Setup

1. **Install packages**:

   ```bash
   pnpm add -D tailwindcss postcss autoprefixer
   pnpm add flowbite-svelte flowbite
   npx tailwindcss init -p
   ```

2. **Verify configuration**:
   - `tailwind.config.js` → content paths include flowbite-svelte and flowbite
   - `postcss.config.js` → includes tailwindcss and autoprefixer
   - `src/app.css` → contains @tailwind directives

3. **Import styles**:
   - Ensure `app.css` is imported in `src/routes/+layout.svelte`

4. **Test components**:
   - Open `/playground/ui` and verify components are visible
   - Test dark/light mode toggle
   - Verify responsive design

### Features

- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach
- **Component Library**: Flowbite-Svelte components
- **Custom Styling**: Tailwind utility classes

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration:

### Workflow Jobs

1. **Setup**: Installs dependencies and caches them
2. **Lint**: Runs ESLint on all TypeScript and Svelte files
3. **Typecheck**: Runs Svelte type checking
4. **Build**: Builds the application for production

### Branch Protection

Configure branch protection rules in GitHub:

- Settings → Branches → Branch protection rules → main
- ✅ Require a pull request before merging
- ✅ Require status checks: Lint, Typecheck, Build

## Project Structure

```
src/
├── lib/
│   ├── server/
│   │   ├── auth.ts
│   │   └── db/
│   │       ├── index.ts
│   │       └── schema.ts
│   └── assets/
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   └── playground/
│       └── ui/
│           └── +page.svelte
└── stories/
    ├── Button.svelte
    ├── Header.svelte
    └── Page.svelte
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run local checks: `pnpm lint && pnpm typecheck && pnpm build`
4. Create a pull request
5. Ensure all CI checks pass

## Environment Variables

Required environment variables:

- `DATABASE_URL` - Neon PostgreSQL connection string
- `VITE_STACK_PROJECT_ID` - Stack Auth project ID
- `VITE_STACK_PUBLISHABLE_CLIENT_KEY` - Stack Auth client key
- `STACK_SECRET_SERVER_KEY` - Stack Auth server key

## Troubleshooting

### Common Issues

1. **pnpm not found in CI**: Ensure `pnpm/action-setup@v2` is used before `actions/setup-node@v4`
2. **TypeScript errors**: Run `pnpm typecheck` to identify issues
3. **Build failures**: Check environment variables and database connection
4. **Styling issues**: Verify Tailwind configuration and Flowbite setup

### Getting Help

- Check the [SvelteKit documentation](https://kit.svelte.dev/)
- Review [Tailwind CSS docs](https://tailwindcss.com/)
- Explore [Flowbite-Svelte components](https://flowbite-svelte.com/)
