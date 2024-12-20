# tsup

[文档](https://tsup.egoist.dev/#what-about-type-checking)

tsup 是一个轻小且无需配置的，由 esbuild 支持的构建工具；

```bash
pnpm i tsup -D
```

## Generate sourcemap file

```
tsup index.ts --sourcemap
```

## Bundle formats

```
tsup src/index.ts --format esm,cjs,iife

```

## Generate declaration file

```
tsup index.ts --dts

```

## Watch mode

```
tsup src/index.ts --watch
```

## Minify output

```
tsup src/index.ts --minify
```

package.josn

```json
{
  "dev": "pnpm run build --watch --ignore-watch examples",
  "build": "tsup src/index.ts --dts --format cjs,esm",
  "example:react": "cd examples/vite-react && pnpm run build",
  "example:vue2": "cd examples/vite-vue2 && pnpm run build",
  "example:vue3": "cd examples/vite-vue3 && pnpm run build"
}
```
