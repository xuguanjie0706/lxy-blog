import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const h=JSON.parse('{"title":"MockJS","description":"","frontmatter":{},"headers":[],"relativePath":"daily/data/mockjs/index.md","filePath":"daily/data/mockjs/index.md","lastUpdated":1716965590000}'),t={name:"daily/data/mockjs/index.md"},o=p(`<h1 id="mockjs" tabindex="-1">MockJS <a class="header-anchor" href="#mockjs" aria-label="Permalink to &quot;MockJS&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i mockjs</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Mock from &quot;mockjs&quot;</span></span>
<span class="line"><span>var data = Mock.mock({</span></span>
<span class="line"><span>    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素</span></span>
<span class="line"><span>    &#39;list|1-10&#39;: [{</span></span>
<span class="line"><span>        // 属性 id 是一个自增数，起始值为 1，每次增 1</span></span>
<span class="line"><span>        &#39;id|+1&#39;: 1</span></span>
<span class="line"><span>    }]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 输出结果</span></span>
<span class="line"><span>console.log(JSON.stringify(data, null, 4))</span></span></code></pre></div><h2 id="使用http请求" tabindex="-1">使用http请求 <a class="header-anchor" href="#使用http请求" aria-label="Permalink to &quot;使用http请求&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Mock.mock(&#39;/data/list&#39;, &#39;get&#39;, { &#39;list|1-10&#39;: [] })</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>axios.get(&quot;/data/list&quot;).then(res =&gt; {</span></span>
<span class="line"><span>    console.log(res);</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="数据模板定义规范" tabindex="-1">数据模板定义规范 <a class="header-anchor" href="#数据模板定义规范" aria-label="Permalink to &quot;数据模板定义规范&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 属性名   name</span></span>
<span class="line"><span>// 生成规则 rule</span></span>
<span class="line"><span>// 属性值   value</span></span>
<span class="line"><span>&#39;name|rule&#39;: value</span></span></code></pre></div><ul><li>&#39;name|min-max&#39;: value</li><li>&#39;name|count&#39;: value</li><li>&#39;name|min-max.dmin-dmax&#39;: value</li><li>&#39;name|min-max.dcount&#39;: value</li><li>&#39;name|count.dmin-dmax&#39;: value</li><li>&#39;name|count.dcount&#39;: value</li><li>&#39;name|+step&#39;: value\`</li></ul><h3 id="函数没有规则" tabindex="-1">函数没有规则 <a class="header-anchor" href="#函数没有规则" aria-label="Permalink to &quot;函数没有规则&quot;">​</a></h3><p>可以使用函数获取变量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;type|1&#39;: Object.keys(useType),</span></span>
<span class="line"><span>sub_type: function () {</span></span>
<span class="line"><span>    const n = Math.floor(useType[this.type].length * Math.random())</span></span>
<span class="line"><span>    return useType[this.type][n]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Mock.setup({</span></span>
<span class="line"><span>    timeout: &#39;200-600&#39;</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="划重点" tabindex="-1">划重点 <a class="header-anchor" href="#划重点" aria-label="Permalink to &quot;划重点&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var data = Mock.mock({</span></span>
<span class="line"><span>    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素</span></span>
<span class="line"><span>    &#39;list|1-10&#39;: [{</span></span>
<span class="line"><span>      &quot;string&quot;: Random.string(5), // &quot;jPXEu&quot;</span></span>
<span class="line"><span>      &quot;string2&quot;: &#39;@string(5)&#39;, // &quot;jPXEu&quot;</span></span>
<span class="line"><span>      // 生成随机邮箱地址 可以指定域名，例如 163.com</span></span>
<span class="line"><span>      &quot;email&quot;: Random.email(&#39;163.com&#39;), // &quot;l.fvilfpz@163.com&quot;</span></span>
<span class="line"><span>      &quot;email2&quot;: &#39;@email()&#39;, // &quot;l.fvilfpz@163.com&quot;</span></span>
<span class="line"><span>      // 返回一个随机的布尔值。</span></span>
<span class="line"><span>      &quot;boolean&quot;: Random.boolean(), // true</span></span>
<span class="line"><span>      &quot;boolean2&quot;: &#39;@boolean()&#39;, // true</span></span>
<span class="line"><span>      // 生成 60-100 随机整数</span></span>
<span class="line"><span>      &quot;point&quot;: Random.integer(60, 100), // 69</span></span>
<span class="line"><span>      &quot;point2&quot;: &#39;@integer(60, 100)&#39;, // 98</span></span>
<span class="line"><span>      // // 生成一个浮点数，整数部分大于等于 1、小于等于 100，小数部分保留 3 到 5 位。</span></span>
<span class="line"><span>      &quot;floatNumber&quot;: Random.float(1, 100, 3, 5), // 60.695</span></span>
<span class="line"><span>      &quot;floatNumber2&quot;: &#39;@float(1, 100, 3, 5)&#39;, // 19.29368</span></span>
<span class="line"><span>      // 随机日期</span></span>
<span class="line"><span>      &quot;date&quot;: Random.datetime(&#39;yyyy-MM-dd&#39;), // &quot;2017-05-01&quot;</span></span>
<span class="line"><span>      &quot;date2&quot;: &quot;@datetime()&quot;, // &quot;1973-06-12 13:05:18&quot;</span></span>
<span class="line"><span>      // 随机时间</span></span>
<span class="line"><span>      &quot;time&quot;: Random.time(), // &quot;21:33:01&quot;</span></span>
<span class="line"><span>      &quot;time2&quot;: &quot;@time()&quot;, // &quot;21:33:01&quot;</span></span>
<span class="line"><span>      // 当前日期</span></span>
<span class="line"><span>      &quot;now&quot;: Random.now(&#39;year&#39;), // &quot;2023-01-01 00:00:00&quot;</span></span>
<span class="line"><span>      &quot;now2&quot;: &quot;@now(&#39;year&#39;)&quot;, // &quot;2023-01-01 00:00:00&quot;</span></span>
<span class="line"><span>      // 随机生成图片 Random.image( size, background, foreground, format, text )</span></span>
<span class="line"><span>      &quot;img&quot;: Random.image(&#39;200x100&#39;, &#39;#16d46b&#39;, &#39;#fff&#39;, &#39;png&#39;, &#39;Hello&#39;), // &quot;http://dummyimage.com/200x100/16d46b/fff.png&amp;text=Hello&quot;</span></span>
<span class="line"><span>      // 随机生成颜色,格式为 &#39;#RRGGBB&#39;。</span></span>
<span class="line"><span>      &quot;color&quot;: Random.color(), // &quot;#94f279&quot;</span></span>
<span class="line"><span>      &quot;color2&quot;: &#39;@color()&#39;, // &quot;#94f279&quot;</span></span>
<span class="line"><span>      // 随机生成颜色,格式为 &#39;rgb(r, g, b, a)&#39;。</span></span>
<span class="line"><span>      &quot;rgbaColor&quot;: Random.rgba(), // &quot;rgba(242, 121, 183, 0.22)&quot;</span></span>
<span class="line"><span>      // 随机生成一段文本 文本中句子的个数为 2 到 5。默认值为 3 到 7</span></span>
<span class="line"><span>      &quot;paragraph&quot;: Random.paragraph(2, 5), // &quot;Ymkp nvyryy vieq hlqdb pplbbikbd mtqiq uue jdufhkxy wpybjqi djico jxqkwvw kbmsscpfw owtgsqwn.&quot;</span></span>
<span class="line"><span>      &quot;paragraph2&quot;: &#39;@paragraph(2, 5)&#39;,  // &quot;Ymkp nvyryy vieq hlqdb pplbbikbd mtqiq uue jdufhkxy wpybjqi djico jxqkwvw kbmsscpfw owtgsqwn.&quot;</span></span>
<span class="line"><span>      // 随机生成一段中文文本 参数同 Random.paragraph( min?, max? )</span></span>
<span class="line"><span>      &quot;cparagraph&quot;: Random.cparagraph(), // &quot;重工边政应信江半实金改北反调程五八。张资圆向规成新家天交对传许。军较军七养多认维市般况验式华行证。&quot;</span></span>
<span class="line"><span>      &quot;cparagraph2&quot;: &#39;@cparagraph(2, 5)&#39;, // &quot;重工边政应信江半实金改北反调程五八。张资圆向规成新家天交对传许。军较军七养多认维市般况验式华行证。&quot;</span></span>
<span class="line"><span>      // 随机生成一个句子，第一个单词的首字母大写。 句子中单词的个数为 2 到 5 。默认值为 12 到 18</span></span>
<span class="line"><span>      &quot;sentence&quot;: Random.sentence(2, 5), // &quot;Yyfvs genrdeiyf.&quot;</span></span>
<span class="line"><span>      &quot;sentence2&quot;: &#39;@sentence(2, 5)&#39;, // &quot;Yyfvs genrdeiyf.&quot;</span></span>
<span class="line"><span>      // 随机生成一段中文文本，参数同 Random.sentence( min?, max? )</span></span>
<span class="line"><span>      &quot;csentence&quot;: Random.csentence(2, 5), // &quot;积现。&quot;</span></span>
<span class="line"><span>      &quot;csentence2&quot;: &#39;@csentence(2, 5)&#39;, // &quot;积现。&quot;</span></span>
<span class="line"><span>      // 随机生成一个单词，单词中字符的个数为 2 到 5 个。默认值为 3 到 10</span></span>
<span class="line"><span>      &quot;word&quot;: Random.word(2, 5), // &quot;nlgcl&quot;</span></span>
<span class="line"><span>      &quot;word2&quot;: &#39;@word(2, 5)&#39;, // &quot;nlgcl&quot;</span></span>
<span class="line"><span>      // 随机生成一个汉字，汉字中字符串的长度为 2 到 5 个。默认值为 1</span></span>
<span class="line"><span>      &quot;cword&quot;: Random.cword(2, 5), // &quot;系即感&quot;</span></span>
<span class="line"><span>      &quot;cword2&quot;: &#39;@cword(2, 5)&#39;, // &quot;系即感&quot;</span></span>
<span class="line"><span>      // 随机生成一句标题，其中每个单词的首字母大写。单词中字符的个数为 2 到 5。默认值为 3 到 7</span></span>
<span class="line"><span>      &quot;title&quot;: Random.title(2, 5), // &quot;Vmpx Rizds Smguoqki&quot;</span></span>
<span class="line"><span>      &quot;title2&quot;: &#39;@title(2, 5)&#39;, // &quot;Vmpx Rizds Smguoqki&quot;</span></span>
<span class="line"><span>      // 随机生成一句中文标题，参数同 Random.title( min?, max? )</span></span>
<span class="line"><span>      &quot;ctitle&quot;: Random.ctitle(2, 5), // &quot;其感期&quot;</span></span>
<span class="line"><span>      &quot;ctitle2&quot;: &#39;@ctitle(2, 5)&#39;, // &quot;其感期&quot;</span></span>
<span class="line"><span>      // 随机生成一个常见的英文名</span></span>
<span class="line"><span>      &quot;firstName&quot;: Random.first(), // &quot;Michelle&quot;</span></span>
<span class="line"><span>      &quot;firstName2&quot;: &#39;@first()&#39;, // &quot;Jose&quot;</span></span>
<span class="line"><span>      // 随机生成一个常见的英文姓。</span></span>
<span class="line"><span>      &quot;lastName&quot;: Random.last(), // &quot;Taylor&quot;</span></span>
<span class="line"><span>      &quot;lastName2&quot;: &#39;@last()&#39;, // &quot;Clark&quot;</span></span>
<span class="line"><span>      // 随机生成一个常见的英文姓名。括号里的布尔值，指示是否生成中间名（可选）。</span></span>
<span class="line"><span>      &quot;name&quot;: Random.name(true), // &quot;Donald Eric Jackson&quot;</span></span>
<span class="line"><span>      &quot;name2&quot;: &#39;@name(true)&#39;, // &quot;Donald Eric Jackson&quot;</span></span>
<span class="line"><span>      // 随机生成一个常见的中文姓</span></span>
<span class="line"><span>      &quot;cfirstName&quot;: Random.cfirst(), // &quot;任&quot;</span></span>
<span class="line"><span>      &quot;cfirstName2&quot;: &#39;@cfirst()&#39;, // &quot;郭&quot;</span></span>
<span class="line"><span>      // 随机生成一个常见的中文名。</span></span>
<span class="line"><span>      &quot;clastName&quot;: Random.clast(), // &quot;芳&quot;</span></span>
<span class="line"><span>      &quot;clastName2&quot;: &#39;@clast()&#39;, // &quot;芳&quot;</span></span>
<span class="line"><span>      // 随机生成一个常见的中文姓名。</span></span>
<span class="line"><span>      &quot;cname&quot;: Random.cname(), // &quot;程强&quot;</span></span>
<span class="line"><span>      &quot;cname2&quot;: &#39;@cname()&#39;, // &quot;程强&quot;</span></span>
<span class="line"><span>      // 随机生成一个URL。可以指定url协议，域名和端口号。例如&#39;http&#39; nuysoft.com。</span></span>
<span class="line"><span>      &#39;url&#39;: Random.url(&#39;http&#39;, &#39;nuysoft.com&#39;), // &quot;http://nuysoft.com/ysq&quot;</span></span>
<span class="line"><span>      &#39;url2&#39;: &#39;@url()&#39;, // &quot;http://nuysoft.com/ysq&quot;</span></span>
<span class="line"><span>      // 随机生成一个 IP 地址</span></span>
<span class="line"><span>      &#39;IP&#39;: Random.ip(), // &quot;112.127.151.37&quot;</span></span>
<span class="line"><span>      &#39;IP2&#39;: &#39;@ip()&#39;, // &quot;233.144.17.219&quot;</span></span>
<span class="line"><span>      // 随机生成一个（中国）大区。</span></span>
<span class="line"><span>      &quot;region&quot;: Random.region(), // &quot;华北&quot;</span></span>
<span class="line"><span>      &quot;region2&quot;: &#39;@region()&#39;, // &quot;华北&quot;</span></span>
<span class="line"><span>      // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。</span></span>
<span class="line"><span>      &quot;province&quot;: Random.province(), // &quot;澳门特别行政区&quot;</span></span>
<span class="line"><span>      &quot;province2&quot;: &#39;@province()&#39;, // &quot;澳门特别行政区&quot;</span></span>
<span class="line"><span>      // 随机生成一个（中国）市。括号里的布尔值，指是否生成所属的省（可选）</span></span>
<span class="line"><span>      &quot;city&quot;: Random.city(true), // &quot;广东省 肇庆市&quot;</span></span>
<span class="line"><span>      &quot;city2&quot;: &#39;@city()&#39;, // &quot;广东省 肇庆市&quot;</span></span>
<span class="line"><span>      // 随机生成一个（中国）县。括号里的布尔值，指是否生成所属的省、市（可选）</span></span>
<span class="line"><span>      &quot;county&quot;: Random.county(true), // &quot;江苏省 常州市 其它区&quot;</span></span>
<span class="line"><span>      &quot;county2&quot;: &#39;@county()&#39;, // &quot;江苏省 常州市 其它区&quot;</span></span>
<span class="line"><span>      // 随机生成一个邮政编码（六位数字）。</span></span>
<span class="line"><span>      &quot;zip&quot;: Random.zip(), // &quot;806124&quot;</span></span>
<span class="line"><span>      &quot;zip2&quot;: &#39;@zip()&#39;, // &quot;806124&quot;</span></span>
<span class="line"><span>      // 把字符串的第一个字母转换为大写。</span></span>
<span class="line"><span>      &quot;capitalize&quot;: Random.capitalize(&#39;hello&#39;), // &quot;Hello&quot;</span></span>
<span class="line"><span>      &quot;capitalize2&quot;: &#39;@capitalize(&quot;hello&quot;)&#39;, // &quot;Hello&quot;</span></span>
<span class="line"><span>      // 把字符串转换为大写。</span></span>
<span class="line"><span>      &quot;upper&quot;: Random.upper(&#39;hello&#39;), // &quot;HELLO&quot;</span></span>
<span class="line"><span>      &quot;upper2&quot;: &#39;@upper(&quot;hello&quot;)&#39;,  // &quot;HELLO&quot;</span></span>
<span class="line"><span>      // 把字符串转换为小写。</span></span>
<span class="line"><span>      &quot;lower&quot;: Random.lower(&#39;HELLO&#39;), // &quot;hello&quot;</span></span>
<span class="line"><span>      &quot;lower2&quot;: &#39;@lower(&quot;HELLO&quot;)&#39;, // &quot;hello&quot;</span></span>
<span class="line"><span>      // 从数组中随机选取一个元素并返回。</span></span>
<span class="line"><span>      &quot;pick&quot;: Random.pick([&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;]), // &quot;e&quot;</span></span>
<span class="line"><span>      &quot;pick2&quot;: &#39;@pick([&quot;a&quot;, &quot;e&quot;, &quot;i&quot;, &quot;o&quot;, &quot;u&quot;])&#39;, // &quot;e&quot;</span></span>
<span class="line"><span>      // 打乱数组中元素的顺序，并返回。</span></span>
<span class="line"><span>      &quot;shuffle&quot;: Random.shuffle([&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;]), // [&#39;o&#39;, &#39;a&#39;, &#39;i&#39;, &#39;e&#39;, &#39;u&#39;]</span></span>
<span class="line"><span>      &quot;shuffle2&quot;: &#39;@shuffle([&quot;a&quot;, &quot;e&quot;, &quot;i&quot;, &quot;o&quot;, &quot;u&quot;])&#39;, // [&#39;o&#39;, &#39;a&#39;, &#39;i&#39;, &#39;e&#39;, &#39;u&#39;]</span></span>
<span class="line"><span>      // 随机生成一个 18 位身份证。</span></span>
<span class="line"><span>      &quot;id&quot;: Random.id(), // 112.127.151.37</span></span>
<span class="line"><span>      id : @id()  //身份证</span></span>
<span class="line"><span>    }]</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="支持fetch" tabindex="-1">支持fetch <a class="header-anchor" href="#支持fetch" aria-label="Permalink to &quot;支持fetch&quot;">​</a></h2><p>mockjs默认不支持fetch,你可以安装mock-fetch实现</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i mock-fetch</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Mock from &quot;mockjs&quot;</span></span>
<span class="line"><span>import mockFetch  from &quot;mock-fetch&quot;</span></span>
<span class="line"><span>mockFetch(Mock)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>    import &quot;../../../../apis/index.js&quot;</span></span>
<span class="line"><span>    fetch(&quot;/data/get&quot;).then(r=&gt;{</span></span>
<span class="line"><span>         return r.json()</span></span>
<span class="line"><span>    }).then(r=&gt;{</span></span>
<span class="line"><span>        console.log(r)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,22),e=[o];function l(i,u,c,q,d,r){return n(),s("div",null,e)}const g=a(t,[["render",l]]);export{h as __pageData,g as default};
