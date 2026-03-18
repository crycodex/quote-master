# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Scope IT** — A React + Vite landing page for a B2B quoting SaaS. Pure frontend (no backend), deployed to Vercel.

## Commands

```bash
npm run dev          # Dev server on port 8080
npm run build        # Production build (dist/)
npm run lint         # ESLint
npm run test         # Run tests once (Vitest)
npm run test:watch   # Run tests in watch mode
npm run preview      # Preview production build locally
```

Run a single test file:
```bash
npx vitest run src/test/example.test.ts
```

## Architecture

**Routing** — React Router v6 (`BrowserRouter`). Routes defined in `src/App.tsx`:
- `/` → `pages/Index.tsx` (landing page)
- `/privacy` → `pages/Privacy.tsx`
- `/policy` → `pages/Policy.tsx`
- `*` → `pages/NotFound.tsx`

**Providers** (all in `App.tsx`): `QueryClientProvider` → `TooltipProvider` → `Toaster`/`Sonner` → `BrowserRouter`.

**Component structure:**
- `src/components/landing/` — Seven page sections composed into `Index.tsx`: `Navbar`, `HeroSection`, `FeaturesSection`, `HowItWorksSection`, `PricingSection`, `CTASection`, `Footer`
- `src/components/ui/` — shadcn/ui primitives (do not edit directly; use `npx shadcn@latest add <component>` to add new ones)
- `src/pages/` — Route-level components

**Styling** — Tailwind CSS with a neobrutalism design system. Custom utilities (`neo-border`, `neo-card`, `neo-shadow`, `neo-hover`) are defined in `tailwind.config.ts`. Dark mode uses class strategy. Font: Space Grotesk (heading and body). Theme colors use CSS variables (`--primary`, `--background`, etc.).

**Path alias** — `@/` maps to `src/`. Use it for all imports.

**`cn()` utility** — Always use `cn()` from `@/lib/utils` for combining Tailwind classes (clsx + tailwind-merge).

**TypeScript** — Strict mode is disabled (`strict: false`, `noImplicitAny: false`, `strictNullChecks: false`). Avoid tightening these settings.

**Tests** — Vitest + Testing Library. Config in `vitest.config.ts`. Setup file at `src/test/setup.ts`. E2E tests use Playwright (`playwright.config.ts`).

**React Query** — `@tanstack/react-query` is set up but the app currently has no API calls. It's available for future data fetching.

## shadcn/ui

Config in `components.json`. To add a component:
```bash
npx shadcn@latest add <component-name>
```
