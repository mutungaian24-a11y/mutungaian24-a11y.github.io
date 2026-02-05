

Repository file structure (sample-style tree for this repo)

sites/
├── src/                          # Vite + React frontend
│   ├── assets/
│   │   └── react.svg
│   ├── main.tsx                   # React entry
│   ├── App.tsx                    # Main app
│   ├── App.css
│   └── index.css
├── public/                       # Frontend static assets
│   └── vite.svg

├── backend/                      # Next.js app (App Router)
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── public/
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   ├── globe.svg
│   │   ├── file.svg
│   │   └── window.svg
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.ts
│   ├── postcss.config.mjs
│   ├── eslint.config.mjs
   
├── .github/
│   └── copilot-instructions.md   # AI agent guidance (generated)

├── Docs/
│   └── structure.md              # THIS FILE

├── .gitignore
├── LICENSE
├── index.html
├── README.md
├── package.json                  # root scripts: dev/build/preview/lint
├── package-lock.json
├── tsconfig.json                 # project references -> tsconfig.app.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js

├── .vs/                          # Visual Studio workspace files (local/ignored)
│   ├── ProjectSettings.json
│   ├── VSWorkspaceState.json
│   └── CopilotIndices/18.0.988.22099/
│      ├── SemanticSymbols.db
│      ├── SemanticSymbols.db-wal
│      ├── SemanticSymbols.db-shm
│      ├── CodeChunks.db
│      ├── CodeChunks.db-wal
│      └── CodeChunks.db-shm

Notes:
- The repository is a monorepo with two independent apps: the root Vite React frontend and `backend/` Next.js app.
- Frontend scripts: `npm run dev` (Vite), `npm run build`, `npm run preview`.
- Backend scripts (inside `backend/`): `npm run dev`, `npm run build`, `npm run start`.



