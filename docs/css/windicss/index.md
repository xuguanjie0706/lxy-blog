# windicss

## 安装

```bash
pnpm i -D vite-plugin-windicss windicss
```

```ts [vite.config.ts]
import WindiCSS from 'vite-plugin-windicss';

export default {
  plugins: [WindiCSS()],
};
```

就是这样！开始在你的应用程序中使用类实用程序或CSS指令，享受速度！

## 配置文件

- windi.config.ts
- windi.config.js
- tailwind.config.ts
- tailwind.config.js

```ts [windi.config.ts]
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  /* configurations... */
});
```

```js [windi.config.js]
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  /* configurations... */
});
```

::: details 事例

```js [windi.config.js]
import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import plugin from 'windicss/plugin';

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      };
      addComponents(buttons);
    }),
    plugin(({ addDynamic, variants }) => {
      addDynamic(
        'skew',
        ({ Utility, Style }) => {
          return Utility.handler
            .handleStatic(Style('skew'))
            .handleNumber(0, 360, 'int', (number) => `skewY(-${number}deg)`)
            .createProperty('transform');
        },
        variants('skew'),
      );
    }),
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
});
```

:::

## 扫描

如果您想启用/禁用其他文件类型或位置的扫描，您可以使用include和exclude选项进行配置

```ts
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    // accepts globs and file paths relative to project root
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules/**/*', '.git/**/*'],
  },
});
```

## 值自动判断

```tsx [index.vue]
<div class="p-5px mt-[0.3px]"></div>
<button class="bg-hex-b2a8bb"></button>
<button class="bg-[#b2a8bb]"></button>
<button class="bg-[hsl(211.7,81.9%,69.6%)]"></button>
<div  class="grid-cols-[auto,1fr,30px]"></div>
```

### 数字

```
p-{float} -> padding: {float/4}rem;
```

### 尺寸

```
p-{size} -> padding: {size};
```

### 分数

```
w-{fraction} -> width: {fraction -> percent};
```

### 颜色

```
text-{color} -> color: rgba(...);
border-hex-{hex} -> border-color: rgba(...);
```

### 变量

```
bg-${variableName}
```

### 网格模板

```
grid-cols-[auto,1fr,30px]
```

## 变体组

通过使用括号对同一变体的实用程序进行分组来应用它们。

```
<div class="hover:(bg-gray-400 font-medium) bg-white font-light"/>
```

## 快捷方式

```js [windi.config.js]
export default {
  ...
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
```

```tsx [index.vue]
<div class="btn btn-green">12</div>
```

## 响应式设计

|  | 默认 | <带前缀的 | @带前缀的 |
| :-- | --- | --- | --- |
| SM | （最小宽度：640px） | （最大宽度：639.9px） | （最小宽度：640px）和（最大宽度：767.9px​​） |
| MD | （最小宽度：768px） | （最大宽度：767.9px​​） | （最小宽度：768px）和（最大宽度：1023.9px） |
| lg | （最小宽度：1024px） | （最大宽度：1023.9px） | （最小宽度：1024px）和（最大宽度：1279.9px） |
| XL | （最小宽度：1280px） | （最大宽度：1279.9px） | （最小宽度：1280px）和（最大宽度：1535.9px） |
| 2xl | （最小宽度：1536px） | （最大宽度：1535.9px） | （最小宽度：1536px） |

```
p-1 lg:(p-2 m-2 text-red-400)
```

### 定制化

```js [windi.config.js]
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
});
```

## 深色模式

Windi CSS 具有开箱即用的深色模式支持。

### 类模式

它检测父元素的class="dark"，通常您可以将其应用到html元素上以使其在全局范围内工作。

```
export default {
  darkMode: 'class',
  // ...
}
```

### 媒体查询模式

```
export default {
  darkMode: 'media',
  // ...
}
```

## 重要前缀

您可以为任何实用程序类添加前缀，将!它们设置为!important

```
!text-green-300
```

## 指令

### @apply

用于@apply将任何现有实用程序类内联到样式块中。

```
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}
```

### @variants

您可以通过将定义包装在指令中来生成您自己的实用程序的屏幕变体、状态变体、主题变体@variants

```
@variants focus, hover {
  .rotate-0 {
    transform: rotate(0deg);
  }
  .rotate-90 {
    transform: rotate(90deg);
  }
}
@variants dark {
  .bg-color {
    background-color: #1c1c1e;
  }
}
```

### @screen

```
@screen sm {
  .custom {
    @apply text-lg;
  }
}
```

### @layer

```
@layer components {
  .components {
    @apply bg-red-500;
  }
}
@layer utilities {
  .utilities {
    max-width: 768px;
  }
}
@layer base {
  base {
    margin-left: auto;
  }
}
```

### theme()

```
.btn-blue {
  background-color: theme("colors.blue.500");
}
```

## 开启属性

```ts [windi.config.ts]
attributify: true,
```

```tsx [index.vue]
<div :w="10px"></div>
```

### 语法（Syntax）

```
(variant[:-]{1})*key? = "((variant:)*value)*"
```

### 增加前缀

```ts [windi.config.ts]
attributify: {
    prefix:"x"
},
```

```tsx [index.vue]
<div
  x:bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  x:w="10px"
  x:text="sm white"
  x:font="mono light"
  x:border="2 rounded blue-200"
  x:p="y-2 x-4"
></div>
```

## 分析仪

```bash
pnpm i windicss-analysis
```

```json [package.json]
{
  "scripts": {
    "analysis": "windicss-analysis"
  }
}
```
