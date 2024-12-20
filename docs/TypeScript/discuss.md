# 理解interface和type的区别和使用场景

让我详细解释一下 interface 和 type 的区别和各自的使用场景：

1. 主要区别扩展语法不同

```
// Interface 扩展
interface Animal {
    name: string;
}

interface Dog extends Animal {
    bark(): void;
}

// Type 扩展
type Animal = {
    name: string;
}

type Dog = Animal & {
    bark(): void;
}

```

2. 合并声明（Declaration Merging）

```
// Interface 可以重复声明，会自动合并
interface User {
    name: string;
}
interface User {
    age: number;
}
// 最终 User 将同时拥有 name 和 age 属性

// Type 不能重复声明
type User = {
    name: string;
}
// Error: 重复的标识符 'User'
type User = {
    age: number;
}
```

3. Type 独有特性

可以使用联合类型

```
type Status = "pending" | "success" | "error";

type StringOrNumber = string | number;

// 用于函数参数
function printID(id: StringOrNumber) {
    console.log(id);
}
```

可以使用原始值

```
type Name = "张三";
type Age = 18;
type Enabled = true;
```

可以使用元组类型

```typescript
type Point = [number, number];
type StringNumberPair = [string, number];

const point: Point = [100, 200];
```

3. 常见使用场景

4. 最佳实践建议

5. 优先使用 Interface

- 当你在定义对象结构时
- 当你需要声明类的实现时
- 当你需要利用声明合并特性时

2. 使用 Type 的情况

- 需要使用联合类型或交叉类型时
- 需要使用元组或其他特定类型时
- 需要使用类型运算和映射类型时

### 记住：

- interface 更适合定义对象的结构
- type 更适合定义类型的别名和复杂类型运算
- 两者可以混合使用，选择最适合当前场景的方式
- 在团队开发中保持一致的使用规范
