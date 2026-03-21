@AGENTS.md

# za11y-web

A Next.js 16 web application. Currently a fresh scaffold — no custom features yet.

## Tech Stack

- **Next.js 16.2.1** — App Router, Server Components by default
- **React 19.2.4**
- **TypeScript 5** — strict mode enabled
- **Tailwind CSS v4** — configured via PostCSS (`@tailwindcss/postcss`), no `tailwind.config.*` file
- **pnpm** — package manager

## Commands

```bash
pnpm dev      # start dev server
pnpm build    # production build
pnpm start    # start production server
pnpm lint     # run ESLint
```

## Project Structure

```
app/
  layout.tsx    # root layout (Geist fonts, Tailwind, metadata)
  page.tsx      # home page
  globals.css   # global styles + Tailwind import
public/         # static assets
```

## Key Conventions

- **App Router only** — all routes live under `app/`
- **Path alias**: `@/*` maps to project root
- **Tailwind v4**: configured in `globals.css` via `@import "tailwindcss"` and `@theme inline {}` blocks — not in a config file
- **CSS variables**: `--background`, `--foreground`, `--color-background`, `--color-foreground`, `--font-sans`, `--font-mono`
- **Fonts**: Geist Sans (`--font-geist-sans`) and Geist Mono (`--font-geist-mono`) via `next/font/google`
- **ESLint**: v9 flat config using `eslint-config-next` core-web-vitals + typescript presets

## Next.js Docs

In-repo docs available at `node_modules/next/dist/docs/`. Key sections:
- `01-app/01-getting-started/` — App Router fundamentals
- `01-app/02-guides/` — authentication, caching, testing, deployment, etc.
- `01-app/03-api-reference/` — components, functions, config options
