# Road Trip Europe — Agent Guidelines

This project follows the conventions in [global-agents-patterns.md](../global-agents-patterns.md).
Read that file before making any changes to this codebase.

## Stack

- **Next.js 16.3.4** — static export (`output: "export"`) for GitHub Pages
- **React 19** + **TypeScript 5**
- **Tailwind CSS v4** (`@tailwindcss/postcss`) with `@theme inline` tokens in `app/globals.css`
- **TanStack React Query v5** — wrapped in `app/providers.tsx`
- **Zustand** — global UI state in `hooks/useTripStore.ts`
- **Leaflet + react-leaflet** — map section, always loaded with `dynamic(..., { ssr: false })`
- **clsx** — always named import (`import { clsx } from "clsx"`)

## Package manager

`npm` — not pnpm. Use `npm install` and `npm run build`.

## Key conventions (enforced here)

- Descriptive variable names — never `e`, `d`, `i`, single letters
- Named `interface ComponentNameProps` above every component function
- `&&` for conditional JSX, never ternary-with-null
- `clsx` object form for conditional classNames
- Mandatory braces on every `if`/`for`/`while`
- Non-trivial logic in `utils/`, not inline in components
- Comments in English, rare, only non-obvious WHY

## Deployment

- GitHub Pages project site: `basePath = "/road-trip-europe"` (only in CI via `GITHUB_ACTIONS=true`)
- Build: `npm run build` → output in `./out`
- GitHub Actions: `.github/workflows/deploy.yml`
- Never run `npm run dev` — only `npm run build` to verify compilation

## Data

All trip data lives in `lib/data/`. The itinerary covers 14 days, 8 destinations, 5 countries.
Photos use Unsplash IDs — all marked `status: "mock"` until verified.

## Map

`TripMap` uses CartoDB dark tiles and requires `ssr: false`. Import via `dynamic()` in `MapSection`.
