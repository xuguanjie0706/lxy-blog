# Sass案例篇

为了让样式写的更好看 **(element用到的sass函数)**

BEM 是 Block（块） Element（元素） Modifier（修饰器）的简称。使用BEM规范来命名CSS，组织HTML中选择器的结构，利于CSS代码的维护，使得代码结构更清晰。

## b 块

快速声明 `namespace+block`className

```
@mixin b($block) {
  $B: $namespace + '-' + $block !global;
  .#{$B} {
    @content;
  }
}
```

## m 元素

他应该包裹在`b`里面，快速声明 `namespace+block+modifier-separator+unit` className

```
@mixin m($modifier) {
  $selector: &;  //这行似乎没有用
  $currentSelector: '';
  @each $unit in $modifier {
    $currentSelector: #{$currentSelector +
      & +
      $modifier-separator +
      $unit +
      ','};
  }

  @at-root {
    #{$currentSelector} {
      @content;
    }
  }
}
```

## selectorToString

获取字符串第二个到倒数第二个之间，注意是从1或-1开始数，长度不够返回空

```
@function selectorToString($selector) {
  $selector: inspect($selector); // 获取选择字符串
  $selector: str-slice($selector, 2, -2);
  @return $selector;
}
```

## containWhenFlag

判断标记`$state-prefix`是否存在

```
@function containWhenFlag($selector) {
  $selector: selectorToString($selector);

  @if str-index($selector, '.' + $state-prefix) {
    @return true;
  } @else {
    @return false;
  }
}
```

## containsModifier

判断标记`$modifier-separator`是否存在

```
@function containsModifier($selector) {
  $selector: selectorToString($selector);

  @if str-index($selector, $modifier-separator) {
    @return true;
  } @else {
    @return false;
  }
}
```

## containPseudoClass

判断是否有伪类

```
@function containPseudoClass($selector) {
  $selector: selectorToString($selector);

  @if str-index($selector, ':') {
    @return true;
  } @else {
    @return false;
  }
}
```

## hitAllSpecialNestRule

命中所有特殊嵌套规则除了`$element-separator`

```
@function hitAllSpecialNestRule($selector) {
  @return containsModifier($selector) or containWhenFlag($selector) or
    containPseudoClass($selector);
}

```

## e 元素

学习完上面的函数，才能理解。

大概意思如果命中特殊规则，在根目录下创建，没有则在父元素下创建

```less
@mixin e($element) {
  $E: $element !global;    // 注册一个全局变量
  $selector: &;
  $currentSelector: '';
  @each $unit in $element {
    $currentSelector: #{$currentSelector +
      '.' +
      $B +
      $element-separator +
      $unit +
      ','};
  }

  @if hitAllSpecialNestRule($selector) {
    @at-root {
      #{$selector} {
        #{$currentSelector} {
          @content;
        }
      }
    }
  } @else {
    @at-root {
      #{$currentSelector} {
        @content;
      }
    }
  }
}
```

```less
.a {
  span {
    @include b(alert) {
      color: red;
      @include m(content) {
        display: table-cell;
        padding: 0 8px;
        @include e(info) {
          padding: 0 10px;
        }
      }
    }
  }
}
//生成
.a span .lxy-alert--content .lxy-alert__info {
  color: blue;
  padding: 0 10px;
}
```

## when

快速声明`is-state`className

```
@mixin when($state) {
  @at-root {
    &.#{$state-prefix + $state} {
      @content;
    }
  }
}
```

## share-rule

还没做到

```
@mixin share-rule($name) {
  $rule-name: '%shared-' + $name;

  @at-root #{$rule-name} {
    @content;
  }
}
```

## meb

还没做到

```
@mixin meb($modifier: false, $element: $E, $block: $B) {
  $selector: &;
  $modifierCombo: '';

  @if $modifier {
    $modifierCombo: $modifier-separator + $modifier;
  }

  @at-root {
    #{$selector} {
      .#{$block + $element-separator + $element + $modifierCombo} {
        @content;
      }
    }
  }
}
```

## pseudo

```
@mixin pseudo($pseudo) {
  @at-root #{&}#{':#{$pseudo}'} {
    @content;
  }
}
```

## extend-rule

还没做到

```
@mixin extend-rule($name) {
  @extend #{'%shared-' + $name};
}

```

## configurable-m

还没做到

```
@mixin configurable-m($modifier, $E-flag: false) {
  $selector: &;
  $interpolation: '';

  @if $E-flag {
    $interpolation: $element-separator + $E-flag;
  }

  @at-root {
    #{$selector} {
      .#{$B + $interpolation + $modifier-separator + $modifier} {
        @content;
      }
    }
  }
}
```

## spec-selector

未使用到

```
@mixin spec-selector(
  $specSelector: '',
  $element: $E,
  $modifier: false,
  $block: $B
) {
  $modifierCombo: '';

  @if $modifier {
    $modifierCombo: $modifier-separator + $modifier;
  }

  @at-root {
    #{&}#{$specSelector}.#{$block
      + $element-separator
      + $element
      + $modifierCombo} {
      @content;
    }
  }
}

```

## utils-user-select

未使用

```
@mixin utils-user-select($value) {
  -moz-user-select: $value;
  -webkit-user-select: $value;
  -ms-user-select: $value;
}
```

## utils-clearfix

```
@mixin utils-clearfix {
  $selector: &;

  @at-root {
    #{$selector}::before,
    #{$selector}::after {
      display: table;
      content: '';
    }
    #{$selector}::after {
      clear: both;
    }
  }
}
```

## utils-vertical-center

```
@mixin utils-vertical-center {
  $selector: &;
  @at-root {
    #{$selector}::after {
      display: inline-block;
      content: '';
      height: 100%;
      vertical-align: middle;
    }
  }
}
```

##

```
@mixin utils-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
