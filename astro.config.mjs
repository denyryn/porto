// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // SSR by default (Vercel serverless); the two existing pages opt back into
  // prerendering so the portfolio stays static. Any new route is server-rendered
  // unless it also exports `prerender = true`.
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
