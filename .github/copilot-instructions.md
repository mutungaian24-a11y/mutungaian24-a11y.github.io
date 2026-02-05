# Copilot instructions for this repository

Purpose
- Fast, practical guidance so AI coding agents become productive in this monorepo.

Overview
- Monorepo with two primary apps:
  - Frontend: Vite + React (root). Entry: [src/main.tsx](src/main.tsx#L1) -> [src/App.tsx](src/App.tsx#L1).
  - Backend: Next.js (app router) in `backend/`. Pages/layouts under `backend/app` (see [backend/app/page.tsx](backend/app/page.tsx#L1)).
- The backend contains Next API routes (see `backend/app/api/`), so treat frontend and backend as separate services that can still communicate via those routes.

Quick dev workflows
- Frontend dev: `npm run dev` (from repo root).
- Frontend build: `npm run build` (runs `tsc -b && vite build`).
- Backend dev: `cd backend && npm run dev` or from root: `npm --prefix backend run dev`.
- Backend build/start: `cd backend && npm run build && npm run start`.
- Linting: root `npm run lint`; backend `npm --prefix backend run lint`.

Key code patterns & locations
- UI components: `src/components/` grouped as `atoms/`, `molecules/`, `organisms/`, `templates/` (follow existing hierarchy when adding components).
- Feature services: `src/features/*/services` (e.g., `src/features/projects/services/projectService.ts`) — use these for client-side data access.
- Backend API: `backend/app/api/*/route.ts` (example: projects route). Match request/response shapes with `shared/types` when present.
- Shared types: `shared/types/` (e.g., `shared/types/project.types.ts`) — use these for cross-app contracts.
- Network helpers: `src/utils/api.ts` contains the frontend HTTP wrapper/adapter.
- Seed data & scripts: `scripts/seed-data.ts` — used for populating local/dev data.

Project-specific constraints
- TypeScript project references are enabled (root `tsconfig.json` references `tsconfig.app.json` and `tsconfig.node.json`). Many scripts run `tsc -b` as part of build.
- Vite is pinned/overridden in `package.json` (plugin name shown in config). Avoid changing Vite or the plugin list without testing HMR.
- Next.js version is pinned in `backend/package.json`; backend uses Tailwind/PostCSS (`postcss.config.mjs`, `backend/app/globals.css`).

Practical examples
- Add a new page: create `src/pages/<Name>` with `<Name>.tsx` and module CSS consistent with existing pages.
- Add a backend route: create `backend/app/api/<resource>/route.ts` and mirror its DTOs in `shared/types` if the frontend must consume it.
- Update component style: follow the `*.module.css` pattern under the same component folder (see `src/components/atoms/Button/Button.module.css`).

Checks & gotchas
- Builds use `tsc -b` — fix TypeScript config issues before builds.
- There are both frontend and backend dev servers; use the correct npm script and port when debugging.
- If changing Vite or Next versions, run both dev servers locally to validate HMR and routes.

Files to check when troubleshooting
- Frontend config: `vite.config.ts`, `tsconfig.app.json`, `src/main.tsx`.
- Backend: `backend/next.config.ts`, `backend/package.json`, `backend/app/layout.tsx`, `backend/app/api`.
- Shared contracts: `shared/types/` and `src/features/*/services`.

If anything is unclear or you want deeper guidance (CI, deployment, or adding tests), tell me which area to expand.
