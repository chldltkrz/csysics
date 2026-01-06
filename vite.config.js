import { defineConfig } from 'vite';

export default defineConfig({
    base: '/', // Custom domain uses root
    build: {
        outDir: 'dist',
    }
});
