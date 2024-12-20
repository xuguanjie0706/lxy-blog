# git提交记录删除

## 使用 git revert 撤销提交

revert 回复(回到原来状态)

### 作用

git revert 是 Git 中用于撤销一个或多个提交的命令，但是会保留历史记录。它创建一个新的提交，该提交是对原提交的相反操作，以撤销原提交的更改。通过 git revert 撤销提交，可以保持历史记录的完整性，不会修改已经共享的提交历史。

### 语法

::: code-group

```[撤销单个提交]
git revert <commit-hash>

```

```[撤销多个提交]
git revert <commit-hash1> <commit-hash2> ...

```

```[撤销最近的提交]
git revert HEAD

```

```[撤销某个范围内的提交]
git revert <commit-hash1>^..<commit-hash2>

```

:::

## 使用 git reset 撤销提交

### 作用

git reset 用于移动 HEAD 指针并可选地更改暂存区和工作目录的状态。它是一个非常强大的工具，常用于撤销提交、取消暂存文件、修改提交内容等操作。

::: code-group撤销提交，保留修改

```shell
git reset --soft HEAD～1

```

撤销提交，取消暂存的文件

```shell
git reset HEAD～1
```

撤销提交，丢弃修改

```shell
git reset --hard HEAD~1
```

将 HEAD 指针移动到指定的提交

```shell
git reset --hard <commit-hash>
```

:::

## git push --force

强制提交
