import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        viteImagemin({
            mozjpeg: { quality: 25 },
            pngquant: false,
            optipng: false,
            webp: { quality: 25 },
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        proxy: {
            '/api/cwall': {
                target: 'https://c4.cwall.xyz',
                changeOrigin: true,
                cookieDomainRewrite: '',
                rewrite: (path) => path.replace(/^\/api\/cwall/, ''),
            },
            '/api/yunmo': {
                target: 'https://yunmo.aimeegroup.top',
                changeOrigin: true,
                cookieDomainRewrite: '',
                rewrite: (path) => path.replace(/^\/api\/yunmo/, ''),
            },
        },
    },
})
