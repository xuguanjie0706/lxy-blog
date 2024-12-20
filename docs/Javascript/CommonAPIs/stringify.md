# 真的了解 JSON.stringify()吗

`JSON.stringify()`可以把 json 或 object 类型的数据转为 json string，但还有一些其他的使用场景。

## 转换

常见的操作将json或object转换成string,在转换过程中有个规则：若值为 undefined, Symbol, Function 等类型，该字段则不会被转换；

```javascript
const person = {
  name: 'bob',
  age: 24,
  getAlias: () => {
    return 'xiaoli';
  },
};
JSON.stringify(person);
```

## 第二个参数是数组或者函数

1. 若是数组，则只转换数组中的 key，若是空数组，则不转换任何的 key；
2. 若是函数，则每一项都会执行该回调函数：callback(key, value) => newValue 。

### 类型是数组

数组中的 key 只对对象类型的数据生效，若转换的格式是数组，则不起作用；

```javascript
const person = {
  name: 'bob',
  age: 24,
  getAlias: () => {
    return 'xiaoli';
  },
};
JSON.stringify(person, ['name']);
JSON.stringify(person, []);
JSON.stringify([1, 2, 3], [1]);
```

### 类型是函数

每一项数据都会执行该回调。结合上面不会转换 undefined 的规则，若不想要某个 key，则可以返回 undefined。若其中某项的值为对象，则递归调用。

```javascript
const person = {
  name: 'bob',
  age: 24,
  getAlias: () => {
    return 'xiaoli';
  },
};
JSON.stringify(person, (key, value) => {
  console.log(key, 222, value, 222, value);
  return value;
});
JSON.stringify(person, []);
JSON.stringify([1, 2, 3], [1]);
```

## 第三个参数

第 3 个参数用来控制字符串里面的间距，可以格式化展示所有的字段。参数既可以是数字，也可以是字符串。

• 是数字时，则表示每一级比上一级缩进几个空格（最多 10 个空格）；

• 是字符串时，则以该字符串作为缩进字符（最多使用该字符串的前 10 个字符）；

```javascript
const obj = {
  name: 'bob',
  age: 24,
  children: [{ name: 'jack' }],
  getAlias: () => {
    return 'xiaoli';
  },
};

console.log(JSON.stringify(obj, null, 2));
console.log(JSON.stringify(obj, null, '---'));
```

## 顺序

数字在序列化以后会放在前面

```javascript
const obj1 = { a: 1, b: 2, 1: 'x' };
const obj2 = { b: 2, a: 1, 1: 'x' };
JSON.stringify(obj1); // '{"1":"x","a":1,"b":2}'
JSON.stringify(obj2); // '{"1":"x","b":2,"a":1}'
```
