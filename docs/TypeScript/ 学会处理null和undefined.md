# 学会处理null和undefined

## 1. 基本概念

```ts
// null 和 undefined 是所有类型的子类型 也是不同类型
let u: undefined = undefined;
let n: null = null;

// 在严格模式下，undefined 和 null 不能赋值给其他类型
// 需要明确声明联合类型
```

## 2. 可选参数和属性

```ts
function greet(name?: string) {
  console.log(name ? `Hello, ${name}!` : 'Hello ,Jam!');
}
// 可选属性
interface User {
  name: string;
  email?: string; // email 可能是 undefined
  phone: string | null; // phone 可能是 null
}
```

## 3. 空值检查

```ts
// 使用类型守卫
function processUser(user: User | null) {
  if (user === null) {
    return;
  }
  console.log(user.name);
}

// 可选链操作符
function getEmailLength(user?: User) {
  // 如果 user 或 email 是 undefined，返回 undefined
  return user?.email?.length;
}
// 空值合并操作符
function getDisplayName(user?: User) {
  // 如果 user.name 是 null 或 undefined，使用默认值
  return user?.name ?? 'Anonymous';
}
```

## 4. 断言非空操作符

```ts
function processElement(id: string) {
  // 使用 ! 断言元素一定存在
  const element = document.getElementById(id)!;

  // 不推荐这样使用，最好进行显式检查
  element.innerHTML = 'Hello';
}

// 更好的方式
function processElementSafe(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with id ${id} not found`);
  }

  element.innerHTML = 'Hello';
}
```

## 5. 类型收窄

```ts
function printLength(text: string | null | undefined) {
  // 类型收窄
  if (text) {
    // 这里 text 的类型被收窄为 string
    console.log(text.length);
  }
}

// 使用 typeof 进行类型收窄
function process(value: string | null | undefined) {
  if (typeof value === 'string') {
    // 这里 value 的类型是 string
    return value.toUpperCase();
  }
  return 'default';
}
```

## 5. 实际应用实例

```ts
interface ApiResponse {
    data:T|null
    message?:string
    code:number
}

aysnc function fetchData(id:string):Promise<ApiResponse<T>>{
     try {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();

        return {
            data: data as User
        };
    } catch (error) {
        return {
            data: null,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}
```

## 记住：

- 优先使用类型守卫而不是类型断言
- 谨慎使用非空断言操作符（!）
- 合理使用可选链（?.）和空值合并（??）操作符
- 在严格模式下编写代码，明确处理 null 和 undefined
- 为可能为空的值提供默认值或错误处理
- 使用类型系统来帮助捕获潜在的空值错误
