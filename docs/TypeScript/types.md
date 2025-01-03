# TypeScript类型

## 基本类型

- boolean(布尔)，仅有2个值false和true

```
const isDone:boolean = false
```

- number(数字) 和javascript一样typescript里面的所有数字类型都是浮点类型。

```
const decLiteral: number = 6          //10进制
const hexLiteral: number = 0xf00d     //16进制
const banaryLiteral: number = 0b1010  //2进制
const ortalLiteral: number = 0o744    //8进制
```

- string(字符串) 使用string 表示文本数据类型

```
let name:string= 'bob'
name = "smith"
```

- array(数组) 有2种方式可以定义数组

```
const list1:number[] = [1,2,3]      // 使用[]
const list2:Array<number> = [1,2,3] // 使用泛型
```

- object(对象) 可以直接使用object声明，也可以分子段声明

```ts
const good1: object = {
  name: 'fish',
  price: 1,
};
const good2: { name: string; price: number } = {
  name: 'fish2',
  price: 2,
};
```

- null(空) 对应的类型也是null

```
const foo:null = null
```

- undefined(未定义) 对应的类型也是未定义

```
const foo:undefined = undefined
```

- symbol(标志) ES6新引入的类型，表示独一无二的值

除此之外TypeScritpt 为了完善类型系统，来定义了以下基础类型。

- never(用不存在)

```
// 返回never函数必须存在无法到达的终点,抛出错误
function error(message:string):never{
  throw new Error(message)
}
// 死循环
function infiniteLoop():never{
  while(true){

  }
}
//一个类型不可能即使数字又是布尔值
type Never = number & boolean
```

- any(任意类型)

```
let notSure:any = 4
notSuture = "maybe a is instead"
notSuture = false
```

- void(没有任何类型) undefined 被赋值给类型为void的变量。当一个函数没有返回值时，其返回类型会被自动推断为void。

```
function foo():void{
  console.log("hello world")
}
const foo1:void = undefined
```

- enum(枚举) 具有名字的常量集合,防止开发人员提供无效的值。枚举分数字枚举和字符串枚举实现原理:反向映射。

::: code-group

```ts [ts代码]
enum Month {
  Jan,
}
```

```js [js代码]
var Month;
(function (Month) {
  Month[(Month['Jan'] = 0)] = 'Jan';
})(Month || (Month = {}));
```

:::

- tuple(元组) 属于数组类型的一个变种，用来表示一个已知类型的数量和类型，元素的类型可以不同

```
let foo :[number,string]
foo = [1,'hello world'] // 正确
foo = ['hello world',1] // 错误
```

- T(泛型) 泛型支持未来的数据类型及做一些数据推断。泛型在实际应用中及其广泛。例如泛型函数，泛型类型等。你以及将它理解成类型变量

泛型函数：一个返回自身的函数，如果不用泛型必须指定出参和入参，灵活性差

::: code-group

```ts [bad Case]
//一个返回自身类型的函数
function identity(arg: number): number {
  return arg;
}
```

```ts [Good Case]
//使用泛型返回自身类型的函数
function identity<T>(arg: T): T {
  return arg;
}
```

:::

泛型类型

```ts
type Person<T> = {
  name: string;
  skill: T;
};
```

## 高级类型

TypeScript 除了拥有基础类型，还有很多复杂的高级类型。高级类型是通过组合这些基础类型的到的，可以帮助开发人员解决工程中很多棘手的问题

### Index Types (索引类型)

对象类型的高级变种

```ts
interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: 'jack',
  age: 35,
};
// keyof T,检索类型查询符，keyof T 的结果为属性名的联合
type Keys = keyof Person; // 'name' | 'age' , 结果根据Person动态生成
// T[K] ,索引反问操作符,返回对应类型的属性名类型
type Name = Person['name']; // string 结果根据Person的name类型动态生成
// 综合索引类型查询符和索引访问操作符，pick函数会根据不同的入参，动态调整类型

function Pick<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}
const name: string = pick(person, 'name'); //正确
const age: string = pick(person, 'age'); //错误  person中age类型为number
const foo: any = pick(person, 'foo'); //错误  person中没有foo
```

### Intersection Types(交叉类型)

将多个类型合并成一个类型，用`&`来分隔每个类型。

```ts
type Person = {
  name: string;
  age: number;
};
type Swim = {
  swim: () => void;
};

// type Swimer = Person & Swim
type Swimer = {
  name: string;
  age: number;
  swim: void;
};
```

### Union Types(联合类型)

表示一个值可以是几种类型之一，用`|`来分隔每个类型。

```ts
type Hunter = {
  name: string;
  hunter: () => void;
};

type Spinners = {
  name: string;
  spin: void;
};

//假设有两种工人：猎人、纺织者
type Workers = Hunter | Spinners;

const getWorker: () => Workers = () => ({ name: 'bob', spin: () => {} });
const worker: Workers = getWorker();
worker.name; // 正确
worker.spin; // 错误，workder可能是猎人没有spin能力
```

### Mappod Types(映射类型)

通过转换旧类型中的每一个属性来创建新类型的方式

```ts
//将所有属性变成只读
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

//将所有属性变成可选
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = Readonly<Person>;
type PartialPerson = Partial<Person>;
```

除了以上这些高级类型，开源社区还有一个名为utility-types的TypeScript类型操作工作集

## 常用类型

示例

```ts
interface Person {
  name: string;
  age: number;
  address: string;
}
```

### Omit<T,K>

Omit`<T, K>` 用于从类型 T 中剔除一个或多个属性 K，从而生成一个新的类型。

```ts
type PersonWithoutAddress = Omit<Person, 'address'>;
// 相当于：
// type PersonWithoutAddress = {
//     name: string;
//     age: number;
// }
```

### Pick<T, K>

与 Omit 相反，Pick`<T, K>` 用于从类型 T 中选择出一个或多个属性 K，从而形成一个新的类型。

```ts
type PersonDetails = Pick<Person, 'name' | 'address'>;
// 相当于：
// type PersonDetails = {
//     name: string;
//     address: string;
// }
```
