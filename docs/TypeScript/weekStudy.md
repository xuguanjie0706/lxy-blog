# 一周学习计划

## 1. 打好基础

- [首先深入学习TypeScript的基本类型系统](./types.md)
- [理解interface和type的区别和使用场景](./理解interface和type的区别和使用场景.md)
- 掌握泛型(Generics)的基本概念

## 2.实践项目

## 3.每日练习建议

- 早上：学习一个新的TS概念
- 下午：做一些在线练习题
- 晚上：尝试重构一些已有的JS代码

## 4. 推荐学习资源

- TypeScript官方文档（中文版）
- TypeScript练习网站：TypeScript Playground
- GitHub上的开源项目学习

## 5. 进阶学习路线

- 学习高级类型（Mapped Types, Conditional Types）
- 理解装饰器（Decorators）
- 掌握类型推断和类型守卫

6. 实用技巧

```ts
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;
```

7. 常见错误学习

- 理解any的危害，尽量避免使用
- 学会处理null和undefined

- 掌握正确的类型收窄方法

8. 建立学习计划

- 每周设定具体的学习目标
- 保持编码练习的持续性
- 参与TypeScript社区讨论

## 挑战类型

```ts
// 实现字符串字面量类型的首字母大写
type Capitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : '';

// 实现对象类型的可选键
type OptionalKeys<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];
// 3. 实现数组类型的最后一个元素
type Last<T extends unknown[]> = T extends [...infer _, infer L] ? L : never;

// 测试
type CapitalizedText = Capitalize<'hello'>; // type CapitalizedText = "Hello"
interface TestObj {
  a: string;
  b?: number;
  c: boolean | undefined;
}
type OptionalKeysResult = OptionalKeys<TestObj>; // type OptionalKeysResult = "b" | "c"
type LastElement = Last<[1, 2, 3]>; // type LastElement = 3
```
