// @ts-check
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          customMedia: true
        }
      }
    },
    build: {
      cssMinify: 'lightningcss'
    }
  },

  integrations: [icon()]
});
