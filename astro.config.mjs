import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Pure static output. No Cloudflare adapter — see docs/adr and PROJECT_STATE.
export default defineConfig({
  output: 'static',
  // Canonical origin — enables absolute canonical/Open Graph URLs.
  site: 'https://alancota.net',
  // Responsive images by default: every <Image> and processed Markdown image
  // gets an auto-generated srcset/sizes and scales down to its container.
  // Field Note media components rely on this (see src/components/media/).
  image: {
    layout: 'constrained',
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
