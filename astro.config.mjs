import { defineConfig } from 'astro';
import sharp from '@astrojs/sharp';

export default defineConfig({
  integrations: [sharp()],
});
