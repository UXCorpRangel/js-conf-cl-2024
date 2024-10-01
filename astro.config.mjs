// @ts-check
// eslint-disable-next-line prettier/prettier
import icon from 'astro-icon';
// eslint-disable-next-line prettier/prettier
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://jsconf.cl',
  trailingSlash: 'never',
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

  integrations: [icon(), react()]
});
