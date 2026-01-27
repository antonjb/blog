// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://antonball.dev',
    image: {
        layout: 'fixed',
        responsiveStyles: true,
    },
});
