import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

// Static SPA build for GitHub Pages.
// Run with: vite build --config vite.gh.config.ts
export default defineConfig({
  base: "/",
  plugins: [
    tsconfigPaths(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    {
      name: "spa-404-fallback",
      closeBundle() {
        const dist = resolve(process.cwd(), "dist");
        try {
          copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
        } catch (e) {
          console.warn("[spa-404-fallback] could not copy index.html -> 404.html", e);
        }
      },
    },
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
