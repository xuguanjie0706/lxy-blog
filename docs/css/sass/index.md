# Sass 基础篇

为了踏入写好css的队列

## 变量 $

变量嵌套在字符串中，则需要写在 #{} 符号里面，

```less [变量声明]
$color:#333;  // 全局变量
$color:#222 !default; // 全局默认变量 优先级最低
a{
    $color:#444; //局部变量，优先级最高
    color:$color
}
$px:10px 20px; // 数组变量类似于set
$px1: 5px 10px, 20px 30px;
div {
    margin:nth($px, 1) 0 0  nth($px, 2);    /* margin:10px 0 0 20px; */
    margin:nth($px1, 1) nth($px1, 2);    /* margin:5px 10px 20px 30px; */
}
$headers:{h1:1em,h2:2em} //对象变量
@each $header, $size in $headings {
  #{$header} {
    font-size: $size;
  }
}
```

## 嵌套

子元素在父元素样式的一对大括号{}内 如：ul { li { } },`&`代表当前选择器

```
div {
    color: #333;
    a {
       font-size:14px;
       &:hover {
          text-decoration:underline;
       }
       &-red{
        color:red;
       }
    }
}
```

## 继承

sass 中，选择器继承可以让选择器继承另一个选择器的所有样式

```
h1 {
    font-size:20px;
}
/* 占位符可以让你觉得像是变量结合,并不会生出css */
%h1 {
    font-weight:400;
}
div {
    @extend h1;
    @extend %h1;
    color:red;
}
```

## 混合

mixin相当于已经定义好了一类样式，可以在任何地方重复的使用它，就跟js中的函数一样。 @content向混合样式中导入内容。一定要先声明,后混合

::: code-group

```less [包含参数]
// 定义一个mixin
@mixin name ($width,$heigth) {
	color:red;
}
// 使用
div{
    @include name(200px,200px);
    font-size:10px
}
// 经典场景
@mixin b($block) {
    $B: $namespace + '-' + $block !global;
    .#{$B} {
        @content;
    }
}
```

```less [不含参数]
// 定义一个mixin
@mixin name {
  color: red;
}

// 使用
a {
  @include name;
  font-size: 10px;
}
```

:::

## 导入

```
 @import “文件名”
```

## 运算

SassScript 支持数字的加减乘除、取整等运算 (+, -, \*, /, %)，如果必要会在不同单位间转换值。
