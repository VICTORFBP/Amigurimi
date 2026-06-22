// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://amigurumi-pets.pages.dev',
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});