import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://luistijera.es',
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
});
