import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const u=JSON.parse('{"title":"理解interface和type的区别和使用场景","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/discuss.md","filePath":"TypeScript/discuss.md","lastUpdated":1734659489000}'),i={name:"TypeScript/discuss.md"},e=p(`<h1 id="理解interface和type的区别和使用场景" tabindex="-1">理解interface和type的区别和使用场景 <a class="header-anchor" href="#理解interface和type的区别和使用场景" aria-label="Permalink to &quot;理解interface和type的区别和使用场景&quot;">​</a></h1><p>让我详细解释一下 interface 和 type 的区别和各自的使用场景：</p><ol><li>主要区别扩展语法不同</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Interface 扩展</span></span>
<span class="line"><span>interface Animal {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Dog extends Animal {</span></span>
<span class="line"><span>    bark(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Type 扩展</span></span>
<span class="line"><span>type Animal = {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Dog = Animal &amp; {</span></span>
<span class="line"><span>    bark(): void;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>合并声明（Declaration Merging）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Interface 可以重复声明，会自动合并</span></span>
<span class="line"><span>interface User {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface User {</span></span>
<span class="line"><span>    age: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 最终 User 将同时拥有 name 和 age 属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Type 不能重复声明</span></span>
<span class="line"><span>type User = {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// Error: 重复的标识符 &#39;User&#39;</span></span>
<span class="line"><span>type User = {</span></span>
<span class="line"><span>    age: number;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>Type 独有特性</li></ol><p>可以使用联合类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Status = &quot;pending&quot; | &quot;success&quot; | &quot;error&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type StringOrNumber = string | number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用于函数参数</span></span>
<span class="line"><span>function printID(id: StringOrNumber) {</span></span>
<span class="line"><span>    console.log(id);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可以使用原始值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Name = &quot;张三&quot;;</span></span>
<span class="line"><span>type Age = 18;</span></span>
<span class="line"><span>type Enabled = true;</span></span></code></pre></div><p>可以使用元组类型</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Point</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StringNumberPair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> point</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Point</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><ol start="3"><li><p>常见使用场景</p></li><li><p>最佳实践建议</p></li><li><p>优先使用 Interface</p></li></ol><ul><li>当你在定义对象结构时</li><li>当你需要声明类的实现时</li><li>当你需要利用声明合并特性时</li></ul><ol start="2"><li>使用 Type 的情况</li></ol><ul><li>需要使用联合类型或交叉类型时</li><li>需要使用元组或其他特定类型时</li><li>需要使用类型运算和映射类型时</li></ul><h3 id="记住" tabindex="-1">记住： <a class="header-anchor" href="#记住" aria-label="Permalink to &quot;记住：&quot;">​</a></h3><ul><li>interface 更适合定义对象的结构</li><li>type 更适合定义类型的别名和复杂类型运算</li><li>两者可以混合使用，选择最适合当前场景的方式</li><li>在团队开发中保持一致的使用规范</li></ul>`,19),l=[e];function t(c,r,h,o,k,d){return n(),a("div",null,l)}const y=s(i,[["render",t]]);export{u as __pageData,y as default};
