// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: 'https://kennethong02.github.io',

  vite: {
    plugins: [tailwindcss(), yaml()]
  }
});