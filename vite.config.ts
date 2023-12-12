import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from '@vant/auto-import-resolver';
import viteCompression from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // minify: "terser",
        sourcemap: false,
        // // 消除打包大小超过警告
        // chunkSizeWarningLimit: 5000,
        //remote console.log in prod
        terserOptions: {
            //detail to look https://terser.org/docs/api-reference#compress-options
            compress: {
                drop_console: false,
                pure_funcs: ["console.log", "console.info"],
                drop_debugger: true,
            },
        },
        //build assets Separate
        assetsDir: "static/assets",
        rollupOptions: {
            output: {
                chunkFileNames: "static/js/[name]-[hash].js",
                entryFileNames: "static/js/[name]-[hash].js",
                assetFileNames: "static/[ext]/[name]-[hash].[ext]",
            },
        },
    },
    server: {
        open: true,
        port: 2222,
        host: "localhost",
        // https: true,
        // proxy: {
        //   "/sac": {
        //     target: "http://192.168.100.21:9002",
        //     changeOrigin: true,
        //   },
        // },
    },
    plugins: [
        vue(),
        Components({
            // 指定组件位置，默认是src/components
            dirs: ['src/components', 'src/commonComponents'],
            // ui库解析器
            extensions: ['vue'],
            // 配置文件生成位置
            dts: './components.d.ts',
            resolvers: [VantResolver()],
        }),
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        })

    ],
    resolve: {
        alias: {
            '@': '/src'
        }
    }
})
