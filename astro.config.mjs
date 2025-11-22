// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlostorralba12.github.io',
  base: '/mariafer/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    icon()
  ],
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
