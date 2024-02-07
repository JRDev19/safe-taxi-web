import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path"

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    build: {
        lib: {
          entry: resolve(__dirname, "node_modules/dist/types/index.d.ts"),
          name: "Momentum Modal",
          fileName: `momentum-modal`,
        },
        rollupOptions: {
          external: ["vue", "@inertiajs/vue3", "axios"],
        },
      },
});

