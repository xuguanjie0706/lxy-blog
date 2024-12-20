# VsCode 技巧

## Snippets

用户代码片段

## Snippet 语法

```
"console": {
    "scope": "javascript,typescript",
    "prefix": "log",
    "body": [
        "console.log('$1');",
        "$2"
    ],
    "description": "console"
}
```

- console 对应代码片段名称（触发代码片段的时候会展示匹配到的代码片段名称）。
- prefix 对应触发代码片段的字符。
- scope 代表文件类型
- body 对应代码片段内容，可以是字符串，也可以为数组，若为数组每个元素都做为单独的一行插入。
- description 对应代码片段描述。

## 占位符 $

- {$1},{$2} 代表多个变量,变量可以多写几个，会同时替换，使用`tab`切换到下一个变量
- {$0} 用于设置最终光标的位置，设置了 $0 之后，再往后设置其他占位符则不会生效， $0 终止了 TAB键 的光标跳转操作。
- {$1|Boolean,Number}占位内容的可选项
- 占位内容支持嵌套，比如 ${1:another ${2:placeholder}}。

## 文档变量

| 变量              | 含义                                                 |
| :---------------- | ---------------------------------------------------- |
| TM_SELECTED_TEXT  | 当前选择的文本或空字符串                             |
| TM_CURRENT_LINE   | 当前行的内容                                         |
| TM_CURRENT_WORD   | 光标下单词的内容或空字符串                           |
| TM_LINE_INDEX     | 基于零索引的行号                                     |
| TM_LINE_NUMBER    | 基于一个索引的行号                                   |
| TM_FILENAME       | 当前文档的文件名                                     |
| TM_FILENAME_BASE  | 不带扩展名的当前文档的文件名                         |
| TM_DIRECTORY      | 当前文档的目录                                       |
| TM_FILEPATH       | 当前文档的完整文件路径                               |
| RELATIVE_FILEPATH | 当前文档的相对（相对于打开的工作区或文件夹）文件路径 |
| CLIPBOARD         | 剪贴板的内容                                         |
| WORKSPACE_NAME    | 打开的工作区或文件夹的名称                           |
| WORKSPACE_FOLDER  | 打开的工作区或文件夹的路径                           |
| CURSOR_INDEX      | 基于零索引的光标编号                                 |
| CURSOR_NUMBER     | 基于一个索引的光标编号                               |

## 时间变量

| 变量                     | 含义                                            |
| :----------------------- | ----------------------------------------------- |
| CURRENT_YEAR             | 当前年份                                        |
| CURRENT_YEAR_SHORT       | 当前年份的最后两位数                            |
| CURRENT_MONTH            | 月份为两位数（例如'02'）                        |
| CURRENT_MONTH_NAME       | 月份的全名（例如'June'）（中文语言对应六月）    |
| CURRENT_MONTH_NAME_SHORT | 月份的简称（例如'Jun'）（中文语言对应是6月）    |
| CURRENT_DATE             | 这个月的哪一天                                  |
| CURRENT_DAY_NAME         | 当天是星期几（例如'星期一'）                    |
| CURRENT_DAY_NAME_SHORT   | 当天是星期几的简称（例如'Mon'）（中文对应周一） |
| CURRENT_HOUR             | 24小时时钟格式的当前小时                        |
| CURRENT_MINUTE           | 当前分CURRENT_SECOND当前秒                      |

## 要插入行或块注释

根据当前语言生成 |变量| 含义 |  
|:--|--| |BLOCK*COMMENT_START |vue格式/*| |BLOCK*COMMENT_END |vue格式 */| |LINE_COMMENT |vue格式 //|
