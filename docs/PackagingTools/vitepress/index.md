# vitePress

为了加深一遍，vitepress 1.1.4界面真的好看了很多

## 创建工程

```
pnpm vitepress init

```

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```

```
pnpm run docs:dev
```

## 开启搜索

```js [config.js]
themeConfig{
    ...
    search: {
        provider: 'local',
        options: {
            locales: {
                zh: {
                    translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                        selectText: '选择',
                        navigateText: '切换'
                        }
                    }
                    }
                }
            }
        }
    }
}

```
