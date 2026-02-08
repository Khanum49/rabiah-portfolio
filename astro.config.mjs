import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: "https://khanum49.github.io",
  base: "/rabiah-portfolio",
  output: "static",
  integrations: [
    tailwind(),
    mdx()
  ],
});
