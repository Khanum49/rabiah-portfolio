// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Development config - no base path
export default defineConfig({
  site: 'https://khanum49.github.io',
  base: '/',
  integrations: [tailwind(), mdx()],
});
