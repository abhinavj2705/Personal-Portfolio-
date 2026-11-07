# AGENTS.md

Personal portfolio SPA: React 19 + TypeScript + Vite 8 + Tailwind CSS v3. Single app, no monorepo, no backend. Visual language is a minimal, premium dark-editorial system in amber gold with a full light theme.

## Commands

- `npm run dev` — Vite dev server.
- `npm run build` — `tsc -b && vite build`. This is the only typecheck; there is no `typecheck` or `test` script.
- `npx tsc -b` — typecheck only (fast, use before committing).
- `npm run lint` — Oxlint. Currently 2 warnings, 0 errors; do not add new warnings.
- `npm run preview` — serve the built `dist/`.

No tests, formatter, CI workflows, or deploy config exist in this repo. `dist/` is gitignored and untracked — never commit it.

## Architecture

- Entry chain: `index.html` → `src/main.tsx` → `src/App.tsx`. `App.tsx` wraps everything in `ThemeProvider` + `Layout`, renders `Header`, the sections, `Footer`, and `CommandPalette`.
- Sections live in `src/sections/` and are composed in this order with these ids: `home`, `about`, `why-me`, `projects`, `experience`, `skills`, `achievements`, `communities`, `contact`. Header, footer, command palette, and anchor links depend on these ids — change them in `src/data/nav.ts` only.
- `src/data/` is the source of truth: `profile.ts` (identity, links, `portrait: '/Abhi.png'`), `nav.ts`, `projects.ts`, `experience.ts`, `communities.ts`, `skills.ts`, `achievements.ts`, `whyMe.ts`, aggregated by `index.ts`.
- Shared UI primitives live in `src/components/ui/` (`SectionHeader`, `ArrowLink`, `Surface`, `Tag`, `Portrait`, `ProjectCard`). Layout lives in `src/layout/` (`Layout`, `GridBackground`, `Header`, `Footer`). Shell components `Logo` and `SocialIcons` remain in `src/components/`.
- `src/theme/ThemeContext.tsx` owns theme state; `src/hooks/useLenisScroll.ts` owns smooth scrolling.
- Portrait assets are `public/Abhi.png` (used by `Portrait.tsx`), `public/A.png`, and `public/A-white.png` (logo). Only these plus `public/favicon.svg` remain in `public/`.
- Contact form POSTs to a Formspree endpoint in `src/sections/Contact.tsx`; there is no server in this repo.

## Design system

- Semantic Tailwind tokens are defined in `tailwind.config.cjs` and backed by CSS variables in `src/index.css`: `background`, `surface`, `surface-muted`, `raised`, `ink`, `muted`, `faint`, `line`, `line-strong`, `accent`, `accent-hover`, `accent-contrast`, `accent-soft`, `nav`, `backdrop`. Use semantic tokens, not raw palette classes, for themed UI.
- Typography: `font-display` = Space Grotesk (headings), `font-sans` = Inter (body), `font-mono` = monospace (eyebrows/labels). Google Fonts are loaded in `index.html`.
- Utility classes in `src/index.css`: `container-editorial`, `section-block`, `eyebrow`, `grid-overlay`, `portrait-shade`. The fixed square grid background is rendered by `src/layout/GridBackground.tsx`.

## Gotchas

- Tailwind/PostCSS configs are `.cjs` because `package.json` has `"type": "module"`; keep them CommonJS.
- Do NOT use Tailwind slash-opacity modifiers on CSS-variable colors (e.g. `bg-accent/10`); they do not work with the variable-backed theme. Use the `*-soft` tokens or `line`/`raised` instead. Slash opacity on built-in colors (e.g. `red-500/10`) is fine.
- Dark mode is class-based (`darkMode: 'class'`). Toggling adds/removes `dark` on `<html>` and persists `portfolio_theme` in `localStorage`; the inline script in `index.html` applies it before render to avoid a flash. Keep all three in sync.
- Lenis smooth scroll is global (`window.__lenis`) and driven by `requestAnimationFrame` (GSAP is no longer a dependency). In-page navigation uses `window.__lenis.scrollTo(target, { offset: -72 })` with a `scrollIntoView` fallback; it is disabled for `prefers-reduced-motion`. Add `data-lenis-prevent` to nested scroll containers.
- `tsc -b` enables `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, and `erasableSyntaxOnly`. Unused imports/vars fail the build; type-only imports must use `import type`. Imports are relative (no path aliases).
- Shell is Windows PowerShell 5.1: never chain with `&&` or `||`; run commands separately or use `if ($?)`.
- Keep design changes consistent across both themes; verify contrast in light mode before committing.

## Repo conventions and existing instruction files

- Commits: `type(scope): description`, one task per commit, no empty commits (`PROJECT_RULES.md`).
- `PROJECT_RULES.md` (canonical), `GSD-STYLE.md`, `.gemini/`, `.agents/`, `.agent/`, `adapters/`, and `scripts/validate-*.ps1` are a vendored, model-agnostic GSD methodology framework, not app code. `.gsd/` contains only `templates/` and `examples/` — no `SPEC.md`/`ROADMAP.md`/`STATE.md` — so its SPEC-finalized gating is not active here. Do not run its validators or restructure the app to satisfy it unless explicitly asked.
