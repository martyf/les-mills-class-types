import laravel from 'laravel-vite-plugin';
import statamic from '@statamic/cms/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        statamic(),
        laravel({
            input: ['resources/js/cp.js', 'resources/css/les-mills-class-types.css'],
            publicDirectory: 'resources/dist',
            refresh: true
        }),
    ],
});