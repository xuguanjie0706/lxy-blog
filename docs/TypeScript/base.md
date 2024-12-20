# TypeScript 基础篇

## 准备工作

### 安装

```
pnpm i -g typescript
```

### 创建文件及编译

通过以下方式编译,如果类型检测失败，那么编译器会在控制台抛出错误

```
tsc index.ts
```

::: code-group

```ts [TypeScript]
type Goods = {
  name: string;
  price: number;
};

const buy = (goods: Goods): void => {
  console.log(`spend ${goods.price} to buy ${goods.name}`);
};

const water: Goods = {
  name: 'water',
  price: 1,
};


buy(water);
```

```js [JavaScript]
var buy = function (goods) {
  console.log('spend '.concat(goods.price, ' to buy ').concat(goods.name));
};
var water = {
  name: 'water',
  price: 1,
};
buy(water);
```

:::

## 快速生成配置文件

```
tsc --init
```

## 自定义配置

在项目根目录下叉棍见tsconfig.json，当tsc运行时，TypeScript会在当前目录或父级目录中寻找tsconfig.json文件。

### compilerOptions字段详解

![alt text](image.png) ![alt text](image-1.png)

## 文件匹配

```
{
    "files":["path/to/file.ts"],// 指定编译
    "include":["src/**/*.ts"],  // 过滤编译
    "exclude":["node_modules"], // 排除编译
    "extends":"../tsconfig.json"// 集成配置
}
```
