import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoImport from './src/plugins/auto-import'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [vue()]
  autoImport(plugins)
  return {
    base: 'https://graciameng.github.io/m3u8-play-online/',
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
  }
})
