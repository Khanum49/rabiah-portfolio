// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://khanum49.github.io',
  // Use base path only in production (GitHub Pages)
  // Locally (dev), this will be '/' so paths work without prefix
  base: process.env.NODE_ENV === 'production' ? '/rabiah-portfolio' : '/',
  integrations: [tailwind(), mdx()],
});