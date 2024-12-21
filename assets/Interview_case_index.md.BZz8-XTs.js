import{c as a,o as s,a4 as n}from"./chunks/framework.B3h3aO-h.js";const e=n(`<h1 id="经典案例" tabindex="-1">经典案例 <a class="header-anchor" href="#经典案例" aria-label="Permalink to &quot;经典案例&quot;">​</a></h1><h2 id="案例一" tabindex="-1">案例一 <a class="header-anchor" href="#案例一" aria-label="Permalink to &quot;案例一&quot;">​</a></h2><p>var repeatFunc=repeat(console.log,4,3000) repeatFunc(&#39;hellow world&#39;); //每个3秒打印1次hellow world,打印四次</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function repeat(fn,num,delay){</span></span>
<span class="line"><span>    let n =0</span></span>
<span class="line"><span>    return async (...args)=&gt;{</span></span>
<span class="line"><span>        while(n&lt;num){</span></span>
<span class="line"><span>            fn(...args)</span></span>
<span class="line"><span>            await new Promise(resolve=&gt;setTimeout(resolve,delay))</span></span>
<span class="line"><span>            n++</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4),t=[e],r=JSON.parse('{"title":"经典案例","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/case/index.md","filePath":"Interview/case/index.md","lastUpdated":1716403880000}'),p={name:"Interview/case/index.md"},d=Object.assign(p,{setup(l){return(i,c)=>(s(),a("div",null,t))}});export{r as __pageData,d as default};
