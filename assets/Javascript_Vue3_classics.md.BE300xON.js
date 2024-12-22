import{_ as n,c as a,o as s,a4 as e}from"./chunks/framework.B3h3aO-h.js";const u=JSON.parse('{"title":"经典使用场景","description":"","frontmatter":{},"headers":[],"relativePath":"Javascript/Vue3/classics.md","filePath":"Javascript/Vue3/classics.md","lastUpdated":1716257221000}'),t={name:"Javascript/Vue3/classics.md"},p=e(`<h1 id="经典使用场景" tabindex="-1">经典使用场景 <a class="header-anchor" href="#经典使用场景" aria-label="Permalink to &quot;经典使用场景&quot;">​</a></h1><h2 id="这是一段element3的代码" tabindex="-1">这是一段Element3的代码 <a class="header-anchor" href="#这是一段element3的代码" aria-label="Permalink to &quot;这是一段Element3的代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { h, render,ComponentInstance,VNode} from &quot;vue&quot;</span></span>
<span class="line"><span>const MOUNT_COMPONENT_REF = &#39;el_component&#39;</span></span>
<span class="line"><span>const COMPONENT_CONTAINER_SYMBOL = Symbol(&#39;el_component_container&#39;)</span></span>
<span class="line"><span>export function createComponent(Component,props,children?) {</span></span>
<span class="line"><span>    const vnode = h(Component,{...props,ref:MOUNT_COMPONENT_REF},children)</span></span>
<span class="line"><span>    const container = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>    vnode[COMPONENT_CONTAINER_SYMBOL] = container</span></span>
<span class="line"><span>    render(vnode,container)</span></span>
<span class="line"><span>    return vnode.component</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3),o=[p];function c(l,i,r,d,_,m){return s(),a("div",null,o)}const N=n(t,[["render",c]]);export{u as __pageData,N as default};
