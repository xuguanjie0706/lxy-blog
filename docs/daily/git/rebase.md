# git代码合并

## 使用git merge

是将两个分支的历史记录合并为一个新的合并提交。它会保留分支的分叉结构，并创建一个新的合并提交，将两个分支的更改整合在一起。

推荐使用第一种方式 --no-ff 参数可以禁用这种 fast-forward 合并方式。可以保留历史分支。::: code-group 合并代码

```shell
git merge <branch-name> --no-ff
```

合并代码 fast-forward

```shell
git merge <branch-name>
```

:::

### 中止merge

```
git merge --abort
```

## 使用git rebase

git rebase 是重新设置分支的基点，并将当前分支的提交逐个应用到目标分支上。它会创建更整洁、更线性的提交历史。

::: code-group合并多个提交

```shell
git rebase -i HEAD~1
```

:::

### 合并多个提交，不合并提交记录会比较丑陋

```
执行  git rebase -i HEAD~1
```

如图所示

![alt text](image.png)

- pick：保留该commit（缩写:p）
- reword：保留该commit，但我需要修改该commit的注释（缩写:r）
- edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）
- squash：将该commit和前一个commit合并（缩写:s）
- fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）
- exec：执行shell命令（缩写:x）
- drop：我要丢弃该commit（缩写:d

### 中止rebase

```shell
git rebase --abort
```
