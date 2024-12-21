import{c as n,o as a,a4 as s}from"./chunks/framework.B3h3aO-h.js";const t=s(`<h1 id="bind" tabindex="-1">Bind <a class="header-anchor" href="#bind" aria-label="Permalink to &quot;Bind&quot;">​</a></h1><p>bind 函数的实现步骤：判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。保存当前函数的引用，获取其余传入参数值。创建一个函数返回函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Function.prototype.mybind = function(context){</span></span>
<span class="line"><span>    if(typeof this !== &#39;function&#39;){</span></span>
<span class="line"><span>        console.log(&quot;type is not function&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const args = [...argument].slice(1)</span></span>
<span class="line"><span>    fn = this</span></span>
<span class="line"><span>    return function Fn(){</span></span>
<span class="line"><span>       return fn.apply(context,args.concat(arguments))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3),e=[t],r=JSON.parse('{"title":"Bind","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/handwriting/bind.md","filePath":"Interview/handwriting/bind.md","lastUpdated":1716056211000}'),p={name:"Interview/handwriting/bind.md"},d=Object.assign(p,{setup(i){return(l,c)=>(a(),n("div",null,e))}});export{r as __pageData,d as default};
