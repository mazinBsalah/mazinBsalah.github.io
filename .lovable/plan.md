## Goal
Deploy your portfolio to GitHub Pages while keeping the exact same look and behavior.

## The catch
Your project is built with TanStack Start, which is a full‑stack SSR framework that expects a server runtime (currently Cloudflare Workers in this template). GitHub Pages only serves **static files** — no Node, no SSR, no server functions, no API routes. So we can't deploy "as is"; we need a static build.

The good news: your site has no backend logic, no auth, no database calls, no server functions, no `/api/*` routes. Every page is a plain React component. Visually and functionally, a static version will look identical.

## Two viable approaches

### Option A — Static SPA build (recommended, simplest)
Convert the project to a plain Vite + React SPA using the same routes/components, drop the TanStack Start/Cloudflare server pieces. File structure stays familiar; pages render client‑side. GitHub Pages serves `index.html` and the bundled JS/CSS.

Trade‑offs:
- No SSR, so initial HTML is empty until JS loads (fine for a portfolio; SEO impact minor since GitHub bots execute JS, but social link previews lose server‑rendered meta tags unless we prerender).
- Simplest path. Smallest diff to your code. Confident "looks identical."

### Option B — Static prerender of TanStack Start
Keep TanStack Start and add a prerender step that emits static HTML for each route at build time. Outputs HTML per page (better meta tags / first paint), still no server runtime needed.

Trade‑offs:
- Heavier config; the current `@lovable.dev/vite-tanstack-config` is wired for Cloudflare and may fight a static target.
- More moving parts, more chance of subtle build issues.

I recommend **Option A**. Your routes are pure presentational components — nothing is lost.

## Plan (Option A)

1. **Swap the framework wiring to a plain Vite SPA**
   - Replace `vite.config.ts` with a standard Vite + React + Tailwind v4 config (no Cloudflare plugin, no TanStack Start plugin).
   - Add `@tanstack/react-router` file-based routing via `@tanstack/router-plugin/vite` (already installed) so we keep the same `src/routes/*.tsx` files and the same `<Link>` API — no rewrites of page code.
   - Add a tiny `src/main.tsx` + `index.html` entry that mounts the existing `RouterProvider`.
   - Move `<head>` metadata from `__root.tsx`/route `head()` into `react-helmet-async` (or keep the same shape — TanStack Router's `head()` works in SPA mode too).
   - Remove `@tanstack/react-start`, `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`, `wrangler.jsonc`.

2. **Routing on GitHub Pages**
   - GitHub Pages doesn't rewrite unknown URLs to `index.html`, so refreshing `/games` would 404. Standard fix: add `public/404.html` that is a copy of `index.html`. The router then takes over client‑side. Look stays identical.
   - If deploying to `https://<user>.github.io/<repo>/` (project page), set Vite `base: '/<repo>/'` and pass the same basepath to the router. If you use a custom domain or `<user>.github.io` (user page), `base` stays `/`.

3. **Preserve assets and games**
   - Everything under `public/` (including `public/games/*.html`) is copied verbatim — your itch‑style game pages keep working.

4. **GitHub Actions workflow**
   - Add `.github/workflows/deploy.yml` that runs `bun install && bun run build` and publishes the `dist/` folder via the official `actions/deploy-pages` action. Source set to "GitHub Actions" in repo Settings → Pages.
   - Free public repos satisfy GitHub Pages' "must be public on free plans" requirement; build/bandwidth limits (1 GB site, 100 GB/month soft) are far above what this portfolio uses.

5. **Verify**
   - Local: `bun run build && bun run preview` and click through every route, hard‑refresh each one.
   - After first deploy: check `/`, `/about`, `/experience`, `/games`, `/projects`, plus `/games/Mercy_or_Iron.html` and `/games/Puzzle_Artist.html`.

## What stays exactly the same
- All files under `src/routes/`, `src/components/`, `src/styles.css`.
- All copy, layout, fonts, colors, spacing, hover states.
- All links to itch.io and embedded game HTML files.

## What changes
- Build/runtime plumbing only: `vite.config.ts`, `src/router.tsx` (small tweak), new `src/main.tsx` + `index.html`, removal of Cloudflare/Start config, new GH Actions workflow.

## One question before I build it
What will the GitHub repo URL look like?
- **A)** `https://<username>.github.io/<repo-name>/` — a project page (most common). I'll set `base` accordingly.
- **B)** `https://<username>.github.io/` — a user page (repo named `<username>.github.io`). `base` stays `/`.
- **C)** Custom domain (e.g. `mazinsalah.com`). `base` stays `/` and I'll add a `public/CNAME` file.

Tell me which one and I'll implement it.
