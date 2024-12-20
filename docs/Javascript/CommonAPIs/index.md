# 常用函数

## 获取URL的搜索参数

```
const getQueryByName = (name)=>{
    const query = new URLSearchParams(location.search)
    return decodeURIComponent(query.get(name))
}
```

## 平滑滚动至页面顶部

```javascript
const scrollTop = (speed = 10) => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(() => scrollTop(speed));
    window.scrollTo(0, c - c / speed);
  }
};

scrollTop();
```

## 设置千分符

```javascript
const formatMoney = (money) => {
  return money.toLocaleString();
};
```

## createDocumentFragment

createDocumentFragment() 方法用于创建一个空的DocumentFragment对象。DocumentFragment是一个“轻量级”或“最小化”的Document对象，它可以包含诸如元素节点和文本节点等，但它本身不会被渲染到页面上。请注意fragment无法innerHTML

```javascript
var body = document.querySelector('body');
var fragment = document.createDocumentFragment();
for (var i = 0; i < 20; i++) {
  var li = document.createElement('li');
  li.innerHTML = 'index: ' + i;
  fragment.appendChild(li); // 只在DocumentFragment中操作，不触发DOM渲染
}
body.appendChild(fragment);
```
