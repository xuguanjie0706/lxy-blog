import{c as n,o as a,a4 as s}from"./chunks/framework.B3h3aO-h.js";const l=s(`<h1 id="手写-call-函数" tabindex="-1">手写 call 函数 <a class="header-anchor" href="#手写-call-函数" aria-label="Permalink to &quot;手写 call 函数&quot;">​</a></h1><p>call 函数的实现步骤：</p><ol><li>判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。</li><li>判断传入上下文对象是否存在，如果不存在，则设置为 window 。</li><li>处理传入的参数，截取第一个参数后的所有参数。</li><li>将函数作为上下文对象的一个属性。</li><li>使用上下文对象来调用这个方法，并保存返回结果。</li><li>删除刚才新增的属性。</li><li>返回结果。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Function.protoType.myCall  = function(context){</span></span>
<span class="line"><span> // 判断调用对象</span></span>
<span class="line"><span>  if (typeof this !== &quot;function&quot;) {</span></span>
<span class="line"><span>    console.error(&quot;type error&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>   // 获取参数</span></span>
<span class="line"><span>  let args = [...arguments].slice(1),</span></span>
<span class="line"><span>      result = null;</span></span>
<span class="line"><span>  // 判断 context 是否传入，如果未传入则设置为 window</span></span>
<span class="line"><span>  context = context || window;</span></span>
<span class="line"><span>  // 将调用函数设为对象的方法</span></span>
<span class="line"><span>  context.fn = this;</span></span>
<span class="line"><span>  // 调用函数</span></span>
<span class="line"><span>  result = context.fn(...args);</span></span>
<span class="line"><span>  // 将属性删除</span></span>
<span class="line"><span>  delete context.fn;</span></span>
<span class="line"><span>  return result;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4),p=[l],r=JSON.parse('{"title":"手写 call 函数","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/handwriting/call.md","filePath":"Interview/handwriting/call.md","lastUpdated":1716056211000}'),e={name:"Interview/handwriting/call.md"},d=Object.assign(e,{setup(t){return(i,c)=>(a(),n("div",null,p))}});export{r as __pageData,d as default};
