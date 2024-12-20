# Sass进阶篇

[sass学习地址](https://www.w3school.com.cn/sass/sass_functions_string.asp)

## if语句

Sass可以根据条件判断给出特定的样式

```
.box {
	@if 1+1 == 2 {
		color: red;
	} @else if 1+1 == 3 {
		color: blud;
	} @else {
		color: pink;
	}
}
```

## for循环

Sass也支持for循环，有两种语法。

::: code-group

```less
@for $index from 开始值 through 结束值 [包含结束值]
@for $i from 1 through 5 {
	.col-#{$i} {
		width: 50px * $i;
	}
}
```

```less
//@for $index from 开始值 to 结束值 [不包含结束值]
@for $i from 1 to 5 {
	.col-#{$i} {
		width: 50px * $i;
	}
}
```

:::

## each循环

遍历一个列表，然后从列表中取出对应值。

```
$icons: success fail warning;
@each $i in $icons {
	.icon-#{$i} {
		background-image: url(../images/icons/#{$i}.png);
	}
}
```

## while循环

```
$index: 6;
@while $index> 0 {
    .box-#{$index} {
        width: 5px * $index;
    }

    $index: $index - 2;
}
```

## 用户自定义函数

```
$index: 6;
@function get-color($key) {
	@if $key > 5 {
		@return #000;
	} @else {
		@return #fff;
	}
}
```

## @at-root

@ at-root指令是一个嵌套规则的集合，它能够在文档的根节点创建样式块

## 字符串函数

| 函数 | 描述 | 例子 |
| :-- | --- | --- |
| str-slice | 从字符串中提取字符；从 start 开始到 end 结束，并返回切片。 | str-slice("Hello world!", 2, 5) result:ello |
| str-length(string) | 返回字符串的长度（以字符计）。 | str-length("Hello world!") result:12 |
| str-index | 返回子字符串在字符串中第一次出现的索引。 | str-index("Hello world!", "H") result 1 |
| quote | 将引号添加到字符串，并返回结果。 | quote(Hello world!) result "Hello world!" |
| str-insert(string, insert, index) | 返回在指定索引位置插入 insert 的字符串。 | str-insert("Hello world!", " wonderful", 6) result:"Hello wonderful world!" |
| to-lower-case(string) | 返回转换为小写的字符串副本。 | to-lower-case("Hello World!") result:"hello world!" |
| to-upper-case(string) | 返回转换为大写的字符串副本。 | to-upper-case("Hello World!") result:"HELLO WORLD!" |
| unique-id() | 返回唯一的随机生成的不带引号的字符串。 | unique-id() result:'tyghefnsv' |
| unquote() | 删除字符串周围的引号（如果有），并返回结果。 | unquote("Hello world!") result:Hello world! |

## 数字函数

| 函数 | 描述 | 例子 |
| :-- | --- | --- |
| abs | 返回绝对值 | abs(-15 result:15) |
| ceil | 数字向上舍入 | ceil(15.20 result:15) |
| comparable | 返回2个数值能否可比较 | comparable(1px,10px) result:true |
| floor | 将数字向下舍入到最接近的整数。 | floor(15.80) result:15 |
| max | 返回几个数字的最大值。 | max(5, 7, 9, 0, -3, -7) result:9 |
| min | 返回几个数字的最大值。 | max(5, 7, 9, 0, -3, -7) result: -7 |
| percentage | 将数字转换为百分比 | percentage(1.2) result:120 |
| random | 返回 0 到 1 之间的随机数 | random() result:0.45673 |
| random(number) | 返回 1 到 number 之间的随机数 | random(6) result:4 |
| round(number) | 将数字四舍五入到最接近的整数 | round(15.20) result:16 |

## 列表函数

| 函数               | 描述                     | 例子                      |
| :----------------- | ------------------------ | ------------------------- |
| index(list, value) | 返回列表中值的索引位置。 | index(a b c, b) result: 2 |

## 省函数方法

| 函数            | 描述                   | 例子                  |
| :-------------- | ---------------------- | --------------------- |
| inspect($value) | 返回由Sass表示的$value | inspect(12) Result:12 |
