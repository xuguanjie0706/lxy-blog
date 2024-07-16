import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Lxy Blog',
  description: 'Personal blog',
  vite: {
    plugins: [],
  },
  lang: 'zh-CN',
  base: '/lxy-blog/',
  themeConfig: {
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    search: {
      provider: 'local',
    },
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuguanjie0706/lxy-blog' },
    ],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '日常', link: '/daily/index' },
      // { text: '组件', link: '/examples/button/' },
      { text: 'JS', link: '/Javascript/' },
      {
        text: 'UI',
        link: '/css/',
        items: [
          {
            text: 'Css',
            link: '/css/',
          },
          { text: '动画', link: '/animate/index' },
        ],
      },
      { text: '打包工具', link: '/PackagingTools/' },
      { text: '工程', link: '/Engineering/' },
    ],
    sidebar: {
      '/daily/': [
        {
          text: '每日记录',
          link: '/daily/index',
          items: [
            {
              text: 'git',
              link: '/daily/git/index.md',
              collapsed: true,
              items: [
                {
                  text: '提交记录删除',
                  link: '/daily/git/reset.md',
                },
                {
                  text: '代码合并',
                  link: '/daily/git/rebase.md',
                },
                {
                  text: 'git Actions',
                  link: '/daily/git/actions.md',
                },
              ],
            },
            {
              text: '运算',
              link: '/daily/operation/index.md',
            },
            {
              text: '数据',
              // link: '/daily/data/mockjs',
              items: [
                {
                  text: 'mockjs',
                  link: '/daily/data/mockjs/',
                },
              ],
            },
            {
              text: '工具',
              link: '/daily/tool/index.md',
            },
            {
              text: 'vscode',
              link: '/daily/vscode/',
            },
          ],
        },
      ],
      LowCode: [
        {
          text: '低代码',
        },
      ],
      TestGuarantee: [
        // {
        //   text: '测试保障',
        //   link: '/TestGuarantee/index.md',
        //   items:[

        //   ]
        // },
        {
          text: 'Jest',
          link: '/TestGuarantee/Jest/index.md',
          items: [
            {
              text: 'Jest in React',
              link: '/TestGuarantee/Jest/react.md',
            },
          ],
        },
        {
          text: 'vitest',
          link: '/TestGuarantee/Vitest/index.md',
        },
      ],
      Javascript: [
        {
          text: '特殊apis',
          items: [
            {
              text: 'IntersectionObserver',
              link: '/Javascript/CommonAPIs/IntersectionObserver',
            },
            {
              text: 'MutationObserver',
              link: '/Javascript/CommonAPIs/MutationObserver',
            },
            {
              text: 'getComputedStyle',
              link: '/Javascript/CommonAPIs/getComputedStyle',
            },
          ],
        },
        {
          text: 'Vue3',
          link: '/Javascript/Vue3/index.md',
          items: [
            {
              text: 'setup',
              link: '/Javascript/Vue3/setup.md',
            },
          ],
        },
        {
          text: 'React',
          link: '/Javascript/React/index.md',
          items: [
            {
              text: '基础',
              link: '/Javascript/React/base.md',
            },
          ],
        },
        {
          text: '正则',
          link: '/Javascript/Regexp/index.md',
        },
      ],
      PackagingTools: [
        {
          text: '打包工具',
          link: '/PackagingTools/',
          items: [
            {
              text: 'vite',
              link: '/PackagingTools/vite/index',
              items: [
                {
                  text: '插件汇总',
                  link: '/PackagingTools/vite/usePlugin',
                },
                {
                  text: '开发插件',
                  link: '/PackagingTools/vite/plugin',
                },
              ],
            },
            {
              text: 'vitepress',
              link: '/PackagingTools/vitepress/index',
            },
            {
              text: 'gulp',
              link: '/PackagingTools/gulp/index',
            },
          ],
        },
      ],
      '/css/': [
        {
          text: '奇技淫巧',
          link: '/css/skills/index',
        },
        {
          text: '墨守成规',
          link: '/css/base',
        },
        {
          text: '布局',
          items: [
            {
              text: 'flex',
              link: '/css/flex/index',
            },
          ],
        },
        {
          text: 'Sass',
          items: [
            {
              text: '基础篇',
              link: '/css/sass/index',
            },
            {
              text: '进阶篇',
              link: '/css/sass/advanced',
            },
            {
              text: '案例篇',
              link: '/css/sass/index.md',
            },
          ],
        },
        {
          text: 'WindiCss',
          link: '/css/windicss/index.md',
        },
        {
          text: '案例',
          link: '/css/case/index.md',
        },
      ],
      '/Interview/': [
        {
          text: '手写代码',
          items: [
            { text: 'call', link: '/Interview/handwriting/call' },
            { text: 'apply', link: '/Interview/handwriting/apply' },
            { text: 'bind', link: '/Interview/handwriting/bind' },
            { text: 'curry', link: '/Interview/handwriting/curry' },
            { text: '发布订阅', link: '/Interview/handwriting/eventEmitter' },
            { text: '观察者', link: '/Interview/handwriting/observer' },
            { text: '双向绑定', link: '/Interview/handwriting/defineProperty' },
            { text: '排序算法', link: '/Interview/handwriting/insertsort' },
          ],
        },
      ],
      '/Engineering/': [
        {
          text: '工程',
          items: [
            { text: '工程化', link: '/Engineering/index' },
            { text: '代码规范', link: '/Engineering/husky/index' },
            { text: 'pnpm', link: '/Engineering/pnpm/index' },
          ],
        },
      ],
      '/scaffold/': [
        {
          text: '脚手架',
          items: [{ text: '翻译', link: '/Engineering/scaffold/fy' }],
        },
      ],
      '/animate/': [
        {
          text: '动画',
          items: [
            {
              text: 'Animate.css',
              link: '/animate/animate.css.md',
            },
          ],
        },
      ],
    },
  },
});
