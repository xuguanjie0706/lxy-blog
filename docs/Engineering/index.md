# 多仓库管理

## 准备工作

```
pnpm init
```

### 目录结构

```
├── package.json
├── pnpm-workspace.yaml
├── packages // 存放子项目
```

### `pnpm-workspace.yaml` 新增内容

pnpm-workspace.yaml

```yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```

### 脚本设置

当您在项目中使用 pnpm 时，您不希望被其他人意外运行 npm install 或 yarn。 为了防止开发人员使用其他的包管理器，您可以将下面的这个 preinstall 脚本添加到您的 package.json：package.json

```json
{
    ...
    "preinstall": "npx -y only-allow pnpm"
}
```

## 安装 `changeset`

```
pnpm i @changesets/cli -Dw
```
