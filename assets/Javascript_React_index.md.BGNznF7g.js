import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const q=JSON.parse('{"title":"React 介绍","description":"","frontmatter":{},"headers":[],"relativePath":"Javascript/React/index.md","filePath":"Javascript/React/index.md","lastUpdated":1716471679000}'),e={name:"Javascript/React/index.md"},t=p(`<h1 id="react-介绍" tabindex="-1">React 介绍 <a class="header-anchor" href="#react-介绍" aria-label="Permalink to &quot;React 介绍&quot;">​</a></h1><p>React是用于构建用户界面的JavaScript库，起源于FaceBook。React在页面渲染更新上具有很好的表现，主要原因引入了虚拟节点（Virrual Dom）。通通俗的话来说就是一个JSON描述浏览器真实节点，通过规则递归出真实的dom元素。</p><h2 id="学习路径" tabindex="-1">学习路径 <a class="header-anchor" href="#学习路径" aria-label="Permalink to &quot;学习路径&quot;">​</a></h2><ul><li><a href="./base.html">React基础</a></li></ul><h2 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h2><h3 id="先来看一段代码" tabindex="-1">先来看一段代码 <a class="header-anchor" href="#先来看一段代码" aria-label="Permalink to &quot;先来看一段代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>&lt;span &gt;Hello&lt;/span&gt;</span></span>
<span class="line"><span>&lt;span id=&quot;name&quot;&gt;Tom Jerry&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="虚拟节点树" tabindex="-1">虚拟节点树 <a class="header-anchor" href="#虚拟节点树" aria-label="Permalink to &quot;虚拟节点树&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>   tag:&quot;div&quot;,</span></span>
<span class="line"><span>   children:[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            tag:&quot;span&quot;,</span></span>
<span class="line"><span>            children:[</span></span>
<span class="line"><span>                &quot;Hello&quot;</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            tag:&quot;span&quot;,</span></span>
<span class="line"><span>            props:{</span></span>
<span class="line"><span>                id:&quot;name&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            children:[</span></span>
<span class="line"><span>                &quot;Tom Jerry&quot;</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="react-写法" tabindex="-1">React 写法 <a class="header-anchor" href="#react-写法" aria-label="Permalink to &quot;React 写法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const El = React.createElement(</span></span>
<span class="line"><span>    &quot;div&quot;,</span></span>
<span class="line"><span>    null,</span></span>
<span class="line"><span>    React.createElement(</span></span>
<span class="line"><span>        &quot;span&quot;,</span></span>
<span class="line"><span>        null,</span></span>
<span class="line"><span>        &quot;Hello!&quot;</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>    React.createElement(</span></span>
<span class="line"><span>        &quot;span&quot;,</span></span>
<span class="line"><span>        { id: &#39;name&#39; },</span></span>
<span class="line"><span>        &quot;Tom Jerry!&quot;</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="jsx-写法" tabindex="-1">jsx 写法 <a class="header-anchor" href="#jsx-写法" aria-label="Permalink to &quot;jsx 写法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> cosnt El = ()=&gt;(&lt;div&gt;</span></span>
<span class="line"><span>    &lt;span&gt;Hello!&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;span id=&quot;name&quot;&gt;Tom Jerry!&lt;/span&gt;</span></span>
<span class="line"><span> &lt;/div&gt;)</span></span>
<span class="line"><span> ReactDOM.render(El,document.getElementById(&quot;app&quot;))</span></span></code></pre></div><p>相信已经对react有所了解,是不是也挺简单</p>`,14),l=[t];function i(c,o,r,d,h,u){return n(),s("div",null,l)}const m=a(e,[["render",i]]);export{q as __pageData,m as default};
