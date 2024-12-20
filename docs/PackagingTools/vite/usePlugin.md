# vite plugin 使用汇总

plugin项目优化汇总

## unplugin-auto-import

```
// 使用前
import { ref }from 'vue'
const lxy = ref('lxy')
// 使用后
const lxy = ref('lxy')
```

### 安装

```
npm i unplugin-auto-import -D
mkdir types
```

```ts [vite.config.ts]
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true, // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
      },
    }),
  ],
});
```

```javascript [eslintrc.js]
{
  ...
  "extends": [
    ...
    "./.eslintrc-auto-import.json"
  ]
}
```

```json [tsconfig.json]
{
  ...
  "include": ["./auto-imports.d.ts"]
}
```
