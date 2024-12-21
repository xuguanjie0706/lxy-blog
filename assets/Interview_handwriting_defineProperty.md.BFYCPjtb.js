import{k as e,c as p,o as l,a4 as i}from"./chunks/framework.B3h3aO-h.js";const t=i(`<h1 id="defineproperty" tabindex="-1">defineProperty <a class="header-anchor" href="#defineproperty" aria-label="Permalink to &quot;defineProperty&quot;">​</a></h1><p>为了更好的理解，下面会举一个例子</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Object.defineProperty(obj, prop, descriptor)</span></span></code></pre></div><ul><li>obj:要定义属性的对象。</li><li>prop:一个字符串或 Symbol，指定了要定义或修改的属性键。</li><li>descriptor:要定义或修改的属性的描述符。</li></ul><h2 id="访问器描述符" tabindex="-1">访问器描述符 <a class="header-anchor" href="#访问器描述符" aria-label="Permalink to &quot;访问器描述符&quot;">​</a></h2><p>简单理解，默认不能删除，不能修改，不能枚举</p><ul><li>value:设置值，默认undefined</li><li>configurable： 该属性表示是否可以通过delete删除，是否能够修改属性的特征或者访问器属性。默认值是false；</li><li>enumerable: 属性述否可枚举。 即 可否通过for..in 访问属性；默认值为 false</li><li>writable： 该属性的值是否可写。 默认值为false。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const person = {</span></span>
<span class="line"><span>    name:&quot;bob&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(person)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.defineProperty(person,&quot;age&quot;,{</span></span>
<span class="line"><span>    value:24,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(person)</span></span>
<span class="line"><span>/* 此时设置年龄会报错 */</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>    person.age = 25</span></span>
<span class="line"><span>} catch (error) {</span></span>
<span class="line"><span>    console.log(\`年龄不能随意改\`);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.defineProperty(person,&quot;gender&quot;,{</span></span>
<span class="line"><span>    value:&quot;男&quot;,</span></span>
<span class="line"><span>    writable:true</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 他做了手术 */</span></span>
<span class="line"><span>person.gender = &quot;中性&quot;</span></span>
<span class="line"><span>console.log(person,\`bob 做了手术,改变了性别\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* bob 希望别人知道自己的爱好 */</span></span>
<span class="line"><span>Object.defineProperty(person,&#39;hobbies&#39;,{</span></span>
<span class="line"><span>    value:[&#39;reading&#39;, &#39;traveling&#39;, &#39;photography&#39;],</span></span>
<span class="line"><span>    enumerable:true</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(person,\`bob希望别人可以知道他的爱好\`)</span></span>
<span class="line"><span>Object.values(person).forEach((item)=&gt;console.log(item))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.defineProperty(person,&#39;job&#39;,{</span></span>
<span class="line"><span>    value:&#39;coding&#39;,</span></span>
<span class="line"><span>    configurable:true</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(person,\`bob得到了工作\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>   delete person.age</span></span>
<span class="line"><span>} catch (error) {</span></span>
<span class="line"><span>    console.log(\`age is cannot delete\`);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>delete person.job</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(person,\`bob失去了工作\`)</span></span></code></pre></div><h2 id="访问器描述符-1" tabindex="-1">访问器描述符 <a class="header-anchor" href="#访问器描述符-1" aria-label="Permalink to &quot;访问器描述符&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const person1 = {</span></span>
<span class="line"><span>    name: &quot;jack&quot;,</span></span>
<span class="line"><span>    _age: null, // 私有变量</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.defineProperty(person1, &quot;age&quot;, {</span></span>
<span class="line"><span>    configurable:true,</span></span>
<span class="line"><span>    enumerable:false,</span></span>
<span class="line"><span>    set(value) {</span></span>
<span class="line"><span>        console.log(&#39;set&#39;, value);</span></span>
<span class="line"><span>        this._age = value;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    get() {</span></span>
<span class="line"><span>        console.log(&#39;get&#39;);</span></span>
<span class="line"><span>        return this._age;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="🌰-举个例子" tabindex="-1">🌰 举个例子 <a class="header-anchor" href="#🌰-举个例子" aria-label="Permalink to &quot;🌰 举个例子&quot;">​</a></h2><div><div> 输入框：<input style="border:1px solid #ccc;padding:0px 5px;" id="myInput"></div><div>内容：<span id="myMessage"></span></div></div>`,13),o=[t],h=JSON.parse('{"title":"defineProperty","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/handwriting/defineProperty.md","filePath":"Interview/handwriting/defineProperty.md","lastUpdated":1717098301000}'),c={name:"Interview/handwriting/defineProperty.md"},g=Object.assign(c,{setup(r){let s={text:"Hello, world!"};Object.defineProperty(s,"text",{enumerable:!0,configurable:!0,get:function(){return this._text},set:function(n){this._text=n,a()}});function a(){document.getElementById("myMessage").innerText=s.text}return e(()=>{document.getElementById("myInput").addEventListener("input",function(n){s.text=n.target.value})}),(n,d)=>(l(),p("div",null,o))}});export{h as __pageData,g as default};
