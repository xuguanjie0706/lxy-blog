# 深入浅出Vite：如何开发一个Vite插件

## 事例

在插件命名方式上，如果插件是一个 npm 包，在package.json中的包命名也推荐以vite-plugin开头。一般情况下因为要考虑到外部传参，我们不会直接写一个对象，而是实现一个返回插件对象的工厂函数，如下代码所示：

```
export function myVitePlugin(options) {
  console.log(options)
  return {
    name: 'vite-plugin-xxx',
    load(id) {
      // 在钩子逻辑中可以通过闭包访问外部的 options 传参
    }
  }
}



// 使用方式
// vite.config.ts
import { myVitePlugin } from './myVitePlugin';
export default {
  plugins: [myVitePlugin({ /* 给插件传参 */ })]
}


```

## Vite 插件生命周期的执行顺序

![alt text](image.png)

- 服务启动阶段： config、configResolved、options、configureServer、buildStart
- 请求响应阶段：如果是 html 文件，仅执行transformIndexHtml钩子；对于非 HTML 文件，则依次执行resolveId、load和transform钩子。相信大家学过 Rollup 的插件机制，已经对这三个钩子比较熟悉了。
- 热更新阶段：执行handleHotUpdate钩子。
- 服务关闭阶段：依次执行buildEnd和closeBundle钩子。

## Vite 插件的执行顺序

默认为`normal`，可取值还有`pre`和`post` ![alt text](image-1.png)

```
export default function testHookPlugin(){
    return {
        name:"test-hooks-plugin",
        // 'serve' 表示仅用于开发环境，'build'表示仅用于生产环境
        apply: 'serve',
        config(config){
            // console.log('config',config);
            console.log('config');
        },
        configResolved(resolvedCofnig) {
            console.log('configResolved');
          },
          // 通用钩子
        options(opts) {
            console.log('options');
            return opts;
      },
      // Vite 独有钩子
     configureServer(server) {
        console.log('configureServer');
        // setTimeout(() => {
        //   // 手动退出进程
        //   process.kill(process.pid, 'SIGTERM');
        // }, 3000)
      },
      handleHotUpdate(){
        console.log('handleHotUpdate');
      },
      // 通用钩子
    buildStart() {
        console.log('buildStart');
      },
      // 通用钩子
      buildEnd() {
        console.log('buildEnd');
      },
      // 通用钩子
      closeBundle() {
        console.log('closeBundle');
      }
    }
}
```

## 案例一 虚拟模块

```
import { Plugin,ResolvedConfig } from 'vite';

// types/shim.d.ts

// 虚拟模块名称
const virtualFibModuleId = 'virtual:fib';

// Vite 中约定对于虚拟模块，解析后的路径需要加上`\0`前缀
const resolvedFibVirtualModuleId = '\0' + virtualFibModuleId;

const virtualEnvModuleId = 'virtual:env';

const resolvedEnvVirtualModuleId = '\0' + virtualEnvModuleId;

export default function virtualFibModulePlugin():Plugin{
    let config: ResolvedConfig | null = null;
    return  {
        name:"vite-plugin-virtual-module",
        configResolved(c:ResolvedConfig){
            config = c
        },
        resolveId(id){
            if(id===virtualFibModuleId){
                return resolvedFibVirtualModuleId
            }
            if(id===virtualEnvModuleId){
                return resolvedEnvVirtualModuleId
            }
        },
        load(id){
            // 加载虚拟模块
            if (id === resolvedFibVirtualModuleId) {
                return 'export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }';
            }
            if (id === resolvedEnvVirtualModuleId) {
                return `export default ${JSON.stringify(config?.env)}`;
            }
        }
    }
}
```

## 案例二 vite 打包进度条

```
pnpm i picocolors progress rd @types/progress
```

```ts [index.ts]
import type { PluginOption } from 'vite';
import colors from 'picocolors';
import progress from 'progress';
import rd from 'rd';
import { isExists, getCacheData, setCacheData } from './cache';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

type PluginOptions = Merge<
  ProgressBar.ProgressBarOptions,
  {
    /**
     * total number of ticks to complete
     * @default 100
     */
    total?: number;

    /**
     * The format of the progress bar
     */
    format?: string;
  }
>;

export default function viteProgressBar(options?: PluginOptions): PluginOption {
  const { cacheTransformCount, cacheChunkCount } = getCacheData();

  let bar: progress;
  const stream = options?.stream || process.stderr;
  let outDir: string;
  let transformCount = 0;
  let chunkCount = 0;
  let transformed = 0;
  let fileCount = 0;
  let lastPercent = 0;
  let percent = 0;

  return {
    name: 'vite-plugin-progress',

    enforce: 'pre',

    apply: 'build',

    config(config, { command }) {
      if (command === 'build') {
        config.logLevel = 'silent';
        outDir = config.build?.outDir || 'dist';

        options = {
          width: 40,
          complete: '\u2588',
          incomplete: '\u2591',
          ...options,
        };
        options.total = options?.total || 100;

        const transforming = isExists
          ? `${colors.magenta('Transforms:')} :transformCur/:transformTotal | `
          : '';
        const chunks = isExists
          ? `${colors.magenta('Chunks:')} :chunkCur/:chunkTotal | `
          : '';
        const barText = `${colors.cyan(`[:bar]`)}`;

        const barFormat =
          options.format ||
          `${colors.green('Bouilding')} ${barText} :percent | ${transforming}${chunks}Time: :elapseds`;

        delete options.format;
        bar = new progress(
          barFormat,
          options as ProgressBar.ProgressBarOptions,
        );

        // not cache: Loop files in src directory
        if (!isExists) {
          const readDir = rd.readSync('src');
          const reg = /\.(vue|ts|js|jsx|tsx|css|scss||sass|styl|less)$/gi;
          readDir.forEach((item) => reg.test(item) && fileCount++);
        }
      }
    },

    transform(code, id) {
      transformCount++;

      // not cache
      if (!isExists) {
        const reg = /node_modules/gi;

        if (!reg.test(id) && percent < 0.25) {
          transformed++;
          percent = +(transformed / (fileCount * 2)).toFixed(2);
          percent < 0.8 && (lastPercent = percent);
        }

        if (percent >= 0.25 && lastPercent <= 0.65) {
          lastPercent = +(lastPercent + 0.001).toFixed(4);
        }
      }

      // go cache
      if (isExists) runCachedData();

      bar.update(lastPercent, {
        transformTotal: cacheTransformCount,
        transformCur: transformCount,
        chunkTotal: cacheChunkCount,
        chunkCur: 0,
      });

      return {
        code,
        map: null,
      };
    },

    renderChunk() {
      chunkCount++;

      if (lastPercent <= 0.95)
        isExists
          ? runCachedData()
          : (lastPercent = +(lastPercent + 0.005).toFixed(4));

      bar.update(lastPercent, {
        transformTotal: cacheTransformCount,
        transformCur: transformCount,
        chunkTotal: cacheChunkCount,
        chunkCur: chunkCount,
      });

      return null;
    },

    closeBundle() {
      // close progress
      bar.update(1);
      bar.terminate();

      // set cache data
      setCacheData({
        cacheTransformCount: transformCount,
        cacheChunkCount: chunkCount,
      });

      // out successful message
      stream.write(
        `${colors.cyan(colors.bold(`Build successful. Please see ${outDir} directory`))}`,
      );
      stream.write('\n');
      stream.write('\n');
    },
  };

  /**
   * run cache data of progress
   */
  function runCachedData() {
    if (transformCount === 1) {
      stream.write('\n');

      bar.tick({
        transformTotal: cacheTransformCount,
        transformCur: transformCount,
        chunkTotal: cacheChunkCount,
        chunkCur: 0,
      });
    }

    transformed++;
    percent = lastPercent = +(
      transformed /
      (cacheTransformCount + cacheChunkCount)
    ).toFixed(2);
  }
}
```

```ts [cache.ts]
import fs from 'fs';
import path from 'path';

const dirPath = path.join(process.cwd(), 'node_modules', '.progress');
const filePath = path.join(dirPath, 'index.json');

export interface ICacheData {
  /**
   * Transform all count
   */
  cacheTransformCount: number;

  /**
   * chunk all count
   */
  cacheChunkCount: number;
}

/**
 * It has been cached
 * @return boolean
 */
export const isExists = fs.existsSync(filePath) || false;

/**
 * Get cached data
 * @returns ICacheData
 */
export const getCacheData = (): ICacheData => {
  if (!isExists)
    return {
      cacheTransformCount: 0,
      cacheChunkCount: 0,
    };

  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

/**
 * Set the data to be cached
 * @returns
 */
export const setCacheData = (data: ICacheData) => {
  !isExists && fs.mkdirSync(dirPath);
  fs.writeFileSync(filePath, JSON.stringify(data));
};
```
