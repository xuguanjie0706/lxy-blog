import{c as s,o as a,a4 as n}from"./chunks/framework.B3h3aO-h.js";const p=n(`<h1 id="柯里化" tabindex="-1">柯里化 <a class="header-anchor" href="#柯里化" aria-label="Permalink to &quot;柯里化&quot;">​</a></h1><h2 id="简化柯里化代码" tabindex="-1">简化柯里化代码 <a class="header-anchor" href="#简化柯里化代码" aria-label="Permalink to &quot;简化柯里化代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var sum2 = x =&gt; y =&gt; z =&gt; {</span></span>
<span class="line"><span>  return x + y + z</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var sum3 = x =&gt; y =&gt; z =&gt; x + y + z</span></span></code></pre></div><h2 id="手写代码" tabindex="-1">手写代码 <a class="header-anchor" href="#手写代码" aria-label="Permalink to &quot;手写代码&quot;">​</a></h2><p>函数的长度代码参数的长度</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function curry(fn,...args){</span></span>
<span class="line"><span>    if(args.length&gt;=fn.length){</span></span>
<span class="line"><span>        return fn(...args)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return function(){</span></span>
<span class="line"><span>      let _args = [...args,...arguments]</span></span>
<span class="line"><span>      return curry.call(this,fn,..._args)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const sum = (a,b,c)=&gt;a+b+c</span></span>
<span class="line"><span>const curry1 = curry(sum,1,2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(curry1(3,4))  // 6</span></span>
<span class="line"><span>console.log(curry1(9))    // 12</span></span></code></pre></div><h2 id="实现参数不固定的写法-实现-addcurry-1-2-3-6" tabindex="-1">实现参数不固定的写法 实现 addCurry(1,2,3) = 6 <a class="header-anchor" href="#实现参数不固定的写法-实现-addcurry-1-2-3-6" aria-label="Permalink to &quot;实现参数不固定的写法 实现 addCurry(1,2,3) = 6&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function currying(fn){</span></span>
<span class="line"><span>    let args = []</span></span>
<span class="line"><span>    return function temp(...newArgs){</span></span>
<span class="line"><span>        if(newArgs.length){</span></span>
<span class="line"><span>            args = args.concat(newArgs)</span></span>
<span class="line"><span>            return temp</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            let res = fn.apply(this,args)</span></span>
<span class="line"><span>            args=[]</span></span>
<span class="line"><span>            return res</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function add (...arr){</span></span>
<span class="line"><span>  return arr.reduce((x,y)=&gt;x+y)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const addCurry = currying(add)</span></span>
<span class="line"><span>console.log(&#39;currying&#39;,addCurry(1)(2,3)())</span></span></code></pre></div>`,8),e=[p],o=JSON.parse('{"title":"柯里化","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/handwriting/curry.md","filePath":"Interview/handwriting/curry.md","lastUpdated":1716056211000}'),l={name:"Interview/handwriting/curry.md"},d=Object.assign(l,{setup(t){return(r,i)=>(a(),s("div",null,e))}});export{o as __pageData,d as default};
