# 你不知道的css技巧

遇到问题只会绞尽脑汁，问题却很慢解决。为了加强对sass的使用，所有css均使用scss

## css实现字母大小写转换

```
.capitalize{
    text-transform: capitalize;
}
.uppercase{
    text-transform: uppercase;
}
.lowercase{
    text-transform: lowercase;
}
```

## 空元素设置默认值

有时候你设置完css以后想要清空他的值

```
.bgcolor-red{
    background-color: red;
}
.unset{
    background-color: unset;
}
```

## 空元素设置默认值

:empty选择器+伪类

```
@mixin empty($sign){
    position: relative;
    &::before{
        position: absolute;
        content: $sign;
    }
}
.box:empty {
    @include empty("-")
}
```

![alt text](image.png)

## flex 实现表格使每行都可以自适应高度
```
.box{
    width: 25%;
    word-wrap: break-word;
    border-left: 2px solid #ccc;
    border-top: 2px solid #ccc;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    flex-basis: 25%;
    padding: 5px;
}
.box-room{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
```
