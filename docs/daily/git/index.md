# git

## 学习git提交的点点滴滴

### git init

初始化项目

### git branch

::: code-group查看分支

```
git branch
```

创建分支

```shell
git branch <branch>
```

删除分支

```shell
 git branch -d <branch>
 git branch -D <branch>
```

查看分支的最后一次提交

```shell
 git branch -v
```

查看合并或者未合并的分支

```
 git branch --merged
 git branch --no-merged
```

:::

### git checkout

::: code-group切换分支

```
git checkout <branch>
```

根据某个分支新建分支

```
git checkout -b <branch> <remote>/<branch>
```

:::

### git commit

::: code-group输入备注

```shell
git commit -m <message>
```

撤销操作

```shell
// 最终你只会有一个提交——第二次提交将代替第一次提交的结果。
git commit --amend
git commit --amend --no-edit
```

:::

### git push

::: code-group拉取代码

```shell
git push
```

:::

### git pull

::: code-group删除远程分支

```shell
git push origin --delete <branch>
```

拉取代码

```shell
git pull
```

:::

### git log

::: code-group查看提交记录

```shell
git log --graph --pretty=oneline --abbrev-commit
```

查看提交图

```shell
git log --graph --pretty=oneline --abbrev-commit
```

:::

## Git Hook

### pre-commit

在提交commit message 之前运行。

### commit-msg

接受存有当前提交信息的临时文件的路径并将其作为参数

### post-commit

在整个提交过程完成后运行

### pre-push

在git push 运行时更新远程引用但尚未传送对象时被调用。
