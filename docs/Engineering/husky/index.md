# 代码规范

## eslint

创建eslint.config.js

```
pnpm i eslint@8
pnpm eslint --init
```

## prettier

```
pnpm i prettier prettier-plugin-organize-imports prettier-plugin-packagejson
```

::: details 展开查看 `.prettierrc.js`完整配置模版

```
module.exports = {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
  ],
};

```

:::

## husky

快速得到一个.husky文件

```
pnpm i lint-staged husky@8 -Dw
npx husky-init //初始化
```

### pre-commit

pre-commit

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged
```

### 你还需要让eslint和prettier不冲突

```
pnpm i eslint-plugin-prettier eslint-config-prettier
```

eslint.config.js

```shell
extends: [
  ...
  'plugin:prettier/recommended',
]
```

### package.json

```
"lint-staged": {
    "package.json": [
      "pnpm format"
    ],
    "src/**/*.{ts,.tsx}": [
      "pnpm lint"
    ]
}
```

## 代码提交规范

使用 commitizen + [cz-git](https://cz-git.qbb.sh/zh/config/)

```
pnpm  i  commitizen cz-git -D
```

::: details 展开查看 ` .commitlintrc.js`完整配置模版 .commitlintrc.js

```javascript
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?',
    },
    types: [
      {
        value: 'feat',
        name: 'feat:     新增功能 | A new feature',
        emoji: ':sparkles:',
      },
      { value: 'fix', name: 'fix:      修复缺陷 | A bug fix', emoji: ':bug:' },
      {
        value: 'docs',
        name: 'docs:     文档更新 | Documentation only changes',
        emoji: ':memo:',
      },
      {
        value: 'style',
        name: 'style:    代码格式 | Changes that do not affect the meaning of the code',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: 'refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature',
        emoji: ':recycle:',
      },
      {
        value: 'perf',
        name: 'perf:     性能提升 | A code change that improves performance',
        emoji: ':zap:',
      },
      {
        value: 'test',
        name: 'test:     测试相关 | Adding missing tests or correcting existing tests',
        emoji: ':white_check_mark:',
      },
      {
        value: 'build',
        name: 'build:    构建相关 | Changes that affect the build system or external dependencies',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: 'ci:       持续集成 | Changes to our CI configuration files and scripts',
        emoji: ':ferris_wheel:',
      },
      {
        value: 'revert',
        name: 'revert:   回退代码 | Revert to a commit',
        emoji: ':hammer:',
      },
      {
        value: 'chore',
        name: 'chore:    其他修改 | Other changes that do not modify src or test files',
        emoji: ':rewind:',
      },
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: 'link', name: 'link:     链接 ISSUES 进行中' },
      { value: 'closed', name: 'closed:   标记 ISSUES 已完成' },
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
};
```

::: package.json

```json
 "script":{
  ...
  "commit": "git-cz",
 },
 "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  },
```

### 到此其实还是不够的，你没有办法强制别人都使用`pnpm commit` 来提交

```
pnpm i @commitlint/config-conventional  @commitlint/cli -D
```

.commitlintrc.js

```javascript
extends: ['@commitlint/config-conventional'],
```

.husky/commit-msg

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

red=$(tput setaf 1)
green=$(tput setaf 2)
reset=$(tput sgr0)

printf "\n%s开始检测commit描述是否符合规范...%s\n" "${green}" "${reset}"

if ! npx --no -- commitlint --edit $1 ; then
    echo "《《《${red}commit描述检测到异常，请按规范填写commit描述！${reset}"
    exit 1;
fi
printf "%s恭喜你，非常规范！%s\n" "${green}" "${reset}"
exit

```

如果你没有权限，请执行`chmod 777 .husky/*`

## 发版

使用 `standard-version`发布版本并生成tag

```
pnpm i standard-version -D
```

package.json

```json
 "script":{
  ...
  "release": "standard-version",
 },
```
