# MockJS

## 安装

```
pnpm i mockjs
```

```
import Mock from "mockjs"
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
```

## 使用http请求

```
Mock.mock('/data/list', 'get', { 'list|1-10': [] })
```

```
axios.get("/data/list").then(res => {
    console.log(res);
})
```

## 数据模板定义规范

```
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value
```

- 'name|min-max': value
- 'name|count': value
- 'name|min-max.dmin-dmax': value
- 'name|min-max.dcount': value
- 'name|count.dmin-dmax': value
- 'name|count.dcount': value
- 'name|+step': value`

### 函数没有规则

可以使用函数获取变量

```
'type|1': Object.keys(useType),
sub_type: function () {
    const n = Math.floor(useType[this.type].length * Math.random())
    return useType[this.type][n]
}
```

## setup

```
Mock.setup({
    timeout: '200-600'
})
```

## 划重点

```
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      "string": Random.string(5), // "jPXEu"
      "string2": '@string(5)', // "jPXEu"
      // 生成随机邮箱地址 可以指定域名，例如 163.com
      "email": Random.email('163.com'), // "l.fvilfpz@163.com"
      "email2": '@email()', // "l.fvilfpz@163.com"
      // 返回一个随机的布尔值。
      "boolean": Random.boolean(), // true
      "boolean2": '@boolean()', // true
      // 生成 60-100 随机整数
      "point": Random.integer(60, 100), // 69
      "point2": '@integer(60, 100)', // 98
      // // 生成一个浮点数，整数部分大于等于 1、小于等于 100，小数部分保留 3 到 5 位。
      "floatNumber": Random.float(1, 100, 3, 5), // 60.695
      "floatNumber2": '@float(1, 100, 3, 5)', // 19.29368
      // 随机日期
      "date": Random.datetime('yyyy-MM-dd'), // "2017-05-01"
      "date2": "@datetime()", // "1973-06-12 13:05:18"
      // 随机时间
      "time": Random.time(), // "21:33:01"
      "time2": "@time()", // "21:33:01"
      // 当前日期
      "now": Random.now('year'), // "2023-01-01 00:00:00"
      "now2": "@now('year')", // "2023-01-01 00:00:00"
      // 随机生成图片 Random.image( size, background, foreground, format, text )
      "img": Random.image('200x100', '#16d46b', '#fff', 'png', 'Hello'), // "http://dummyimage.com/200x100/16d46b/fff.png&text=Hello"
      // 随机生成颜色,格式为 '#RRGGBB'。
      "color": Random.color(), // "#94f279"
      "color2": '@color()', // "#94f279"
      // 随机生成颜色,格式为 'rgb(r, g, b, a)'。
      "rgbaColor": Random.rgba(), // "rgba(242, 121, 183, 0.22)"
      // 随机生成一段文本 文本中句子的个数为 2 到 5。默认值为 3 到 7
      "paragraph": Random.paragraph(2, 5), // "Ymkp nvyryy vieq hlqdb pplbbikbd mtqiq uue jdufhkxy wpybjqi djico jxqkwvw kbmsscpfw owtgsqwn."
      "paragraph2": '@paragraph(2, 5)',  // "Ymkp nvyryy vieq hlqdb pplbbikbd mtqiq uue jdufhkxy wpybjqi djico jxqkwvw kbmsscpfw owtgsqwn."
      // 随机生成一段中文文本 参数同 Random.paragraph( min?, max? )
      "cparagraph": Random.cparagraph(), // "重工边政应信江半实金改北反调程五八。张资圆向规成新家天交对传许。军较军七养多认维市般况验式华行证。"
      "cparagraph2": '@cparagraph(2, 5)', // "重工边政应信江半实金改北反调程五八。张资圆向规成新家天交对传许。军较军七养多认维市般况验式华行证。"
      // 随机生成一个句子，第一个单词的首字母大写。 句子中单词的个数为 2 到 5 。默认值为 12 到 18
      "sentence": Random.sentence(2, 5), // "Yyfvs genrdeiyf."
      "sentence2": '@sentence(2, 5)', // "Yyfvs genrdeiyf."
      // 随机生成一段中文文本，参数同 Random.sentence( min?, max? )
      "csentence": Random.csentence(2, 5), // "积现。"
      "csentence2": '@csentence(2, 5)', // "积现。"
      // 随机生成一个单词，单词中字符的个数为 2 到 5 个。默认值为 3 到 10
      "word": Random.word(2, 5), // "nlgcl"
      "word2": '@word(2, 5)', // "nlgcl"
      // 随机生成一个汉字，汉字中字符串的长度为 2 到 5 个。默认值为 1
      "cword": Random.cword(2, 5), // "系即感"
      "cword2": '@cword(2, 5)', // "系即感"
      // 随机生成一句标题，其中每个单词的首字母大写。单词中字符的个数为 2 到 5。默认值为 3 到 7
      "title": Random.title(2, 5), // "Vmpx Rizds Smguoqki"
      "title2": '@title(2, 5)', // "Vmpx Rizds Smguoqki"
      // 随机生成一句中文标题，参数同 Random.title( min?, max? )
      "ctitle": Random.ctitle(2, 5), // "其感期"
      "ctitle2": '@ctitle(2, 5)', // "其感期"
      // 随机生成一个常见的英文名
      "firstName": Random.first(), // "Michelle"
      "firstName2": '@first()', // "Jose"
      // 随机生成一个常见的英文姓。
      "lastName": Random.last(), // "Taylor"
      "lastName2": '@last()', // "Clark"
      // 随机生成一个常见的英文姓名。括号里的布尔值，指示是否生成中间名（可选）。
      "name": Random.name(true), // "Donald Eric Jackson"
      "name2": '@name(true)', // "Donald Eric Jackson"
      // 随机生成一个常见的中文姓
      "cfirstName": Random.cfirst(), // "任"
      "cfirstName2": '@cfirst()', // "郭"
      // 随机生成一个常见的中文名。
      "clastName": Random.clast(), // "芳"
      "clastName2": '@clast()', // "芳"
      // 随机生成一个常见的中文姓名。
      "cname": Random.cname(), // "程强"
      "cname2": '@cname()', // "程强"
      // 随机生成一个URL。可以指定url协议，域名和端口号。例如'http' nuysoft.com。
      'url': Random.url('http', 'nuysoft.com'), // "http://nuysoft.com/ysq"
      'url2': '@url()', // "http://nuysoft.com/ysq"
      // 随机生成一个 IP 地址
      'IP': Random.ip(), // "112.127.151.37"
      'IP2': '@ip()', // "233.144.17.219"
      // 随机生成一个（中国）大区。
      "region": Random.region(), // "华北"
      "region2": '@region()', // "华北"
      // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
      "province": Random.province(), // "澳门特别行政区"
      "province2": '@province()', // "澳门特别行政区"
      // 随机生成一个（中国）市。括号里的布尔值，指是否生成所属的省（可选）
      "city": Random.city(true), // "广东省 肇庆市"
      "city2": '@city()', // "广东省 肇庆市"
      // 随机生成一个（中国）县。括号里的布尔值，指是否生成所属的省、市（可选）
      "county": Random.county(true), // "江苏省 常州市 其它区"
      "county2": '@county()', // "江苏省 常州市 其它区"
      // 随机生成一个邮政编码（六位数字）。
      "zip": Random.zip(), // "806124"
      "zip2": '@zip()', // "806124"
      // 把字符串的第一个字母转换为大写。
      "capitalize": Random.capitalize('hello'), // "Hello"
      "capitalize2": '@capitalize("hello")', // "Hello"
      // 把字符串转换为大写。
      "upper": Random.upper('hello'), // "HELLO"
      "upper2": '@upper("hello")',  // "HELLO"
      // 把字符串转换为小写。
      "lower": Random.lower('HELLO'), // "hello"
      "lower2": '@lower("HELLO")', // "hello"
      // 从数组中随机选取一个元素并返回。
      "pick": Random.pick(['a', 'e', 'i', 'o', 'u']), // "e"
      "pick2": '@pick(["a", "e", "i", "o", "u"])', // "e"
      // 打乱数组中元素的顺序，并返回。
      "shuffle": Random.shuffle(['a', 'e', 'i', 'o', 'u']), // ['o', 'a', 'i', 'e', 'u']
      "shuffle2": '@shuffle(["a", "e", "i", "o", "u"])', // ['o', 'a', 'i', 'e', 'u']
      // 随机生成一个 18 位身份证。
      "id": Random.id(), // 112.127.151.37
      id : @id()  //身份证
    }]
})
```
