import{c as s,l as n,t as p,a4 as e,o as l}from"./chunks/framework.B3h3aO-h.js";const t=e(`<h1 id="apply" tabindex="-1">Apply <a class="header-anchor" href="#apply" aria-label="Permalink to &quot;Apply&quot;">​</a></h1><p>apply 是函数对象的一个方法，用于调用一个函数，并指定函数内部的 this 上下文以及函数的参数列表 <strong>function.apply(thisArg,[argsArray])</strong></p><h2 id="将类数组对象转换为真正的数组" tabindex="-1">将类数组对象转换为真正的数组： <a class="header-anchor" href="#将类数组对象转换为真正的数组" aria-label="Permalink to &quot;将类数组对象转换为真正的数组：&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sum(a,b){</span></span>
<span class="line"><span>    return a+b</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sum.apply(null,[2,3])</span></span></code></pre></div><h2 id="在继承中调用父类的构造函数" tabindex="-1">在继承中调用父类的构造函数 <a class="header-anchor" href="#在继承中调用父类的构造函数" aria-label="Permalink to &quot;在继承中调用父类的构造函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function Parent(name){</span></span>
<span class="line"><span>    this.name = name</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Child(name,age){</span></span>
<span class="line"><span>    Parent.apply(this,[name])</span></span>
<span class="line"><span>    this.age = age</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const child = new Child(&#39;Alice&#39;, 5);</span></span></code></pre></div><h2 id="动态改变函数的上下文" tabindex="-1">动态改变函数的上下文 <a class="header-anchor" href="#动态改变函数的上下文" aria-label="Permalink to &quot;动态改变函数的上下文&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const person1 = {name:&#39;Alice&#39;}</span></span>
<span class="line"><span>const person2 = {name:&#39;Jom&#39;}</span></span>
<span class="line"><span>function sayHi  (){</span></span>
<span class="line"><span>    console.log(\`Hello \${this.name}\`)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sayHi.apply(person1)</span></span></code></pre></div><h2 id="手写代码" tabindex="-1">手写代码 <a class="header-anchor" href="#手写代码" aria-label="Permalink to &quot;手写代码&quot;">​</a></h2><p>apply和call 最大的区别就是args <code>[...arguments][1]</code>和<code>[...arguments].slice(1)</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Function.prototype.myApply = function(context){</span></span>
<span class="line"><span>    if( typeof this !== &quot;function&quot;){</span></span>
<span class="line"><span>        return console.error(&quot;type error&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    let args = [...arguments][1]</span></span>
<span class="line"><span>    context = context || window;</span></span>
<span class="line"><span>    const sym = Symbol(&#39;fn&#39;);</span></span>
<span class="line"><span>    context[sym]= this</span></span>
<span class="line"><span>    const result = context[sym](...args)</span></span>
<span class="line"><span>    delete context[sym]</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,11),d=JSON.parse('{"title":"Apply","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/handwriting/apply.md","filePath":"Interview/handwriting/apply.md","lastUpdated":1716056211000}'),i={name:"Interview/handwriting/apply.md"},h=Object.assign(i,{setup(c){return(a,o)=>(l(),s("div",null,[t,n("p",null,p(a.a),1)]))}});export{d as __pageData,h as default};
