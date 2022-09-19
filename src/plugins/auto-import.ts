import { Plugin } from 'vite';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default function autoImport(plugins: Plugin[]) {
  plugins.push(
    AutoImport({
      imports: ['vue'],
      dts: 'types/auto-import.d.ts'
    }),
    Components({
      dirs: ['src/components'],
      directoryAsNamespace: true,
      dts: 'types/components.d.ts'
    })
  )
}