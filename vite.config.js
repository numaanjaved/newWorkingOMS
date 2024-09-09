import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/yaa.js',
                'resources/js/yaa_rtl.js',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
