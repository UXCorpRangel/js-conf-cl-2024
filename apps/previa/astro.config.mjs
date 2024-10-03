// @ts-check
// eslint-disable-next-line prettier/prettier
import icon from 'astro-icon';
// eslint-disable-next-line prettier/prettier
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://laprevia.jsconf.cl',
  trailingSlash: 'never',
  server: { port: 4322 },
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
