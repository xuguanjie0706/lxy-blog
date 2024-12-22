import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.B3h3aO-h.js";const h=JSON.parse('{"title":"MutationObserver","description":"","frontmatter":{},"headers":[],"relativePath":"Javascript/CommonAPIs/MutationObserver.md","filePath":"Javascript/CommonAPIs/MutationObserver.md","lastUpdated":1734659489000}'),t={name:"Javascript/CommonAPIs/MutationObserver.md"},l=e(`<h1 id="mutationobserver" tabindex="-1">MutationObserver <a class="header-anchor" href="#mutationobserver" aria-label="Permalink to &quot;MutationObserver&quot;">​</a></h1><p><code>MutationObserver</code>是一个Web API，它允许开发者监视DOM（文档对象模型）的变化。当你想要在某个元素或其子元素发生变化时执行某些动作时，MutationObserver 是非常有用的。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var callback = function(mutationsList, observer) {</span></span>
<span class="line"><span>    // 处理 mutationsList...</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个 MutationObserver 实例，传入回调函数</span></span>
<span class="line"><span>var observer = new MutationObserver(callback);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 以上面的配置开始观察目标节点</span></span>
<span class="line"><span>observer.observe(targetNode, config);</span></span></code></pre></div><h2 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h2><ol><li>childList</li></ol><ul><li>类型：boolean</li><li>描述：当目标节点的子节点被添加或删除时触发。注意，这不会观察子节点的后代节点的变化。</li></ul><ol start="2"><li>attributes</li></ol><ul><li>类型：boolean</li><li>描述：当目标节点的属性被修改时触发。</li></ul><ol start="3"><li>characterData</li></ol><ul><li>类型：boolean</li><li>描述：当目标节点或其后代节点的文本内容被修改时触发。注意，这个选项不会观察节点的添加或删除，只会观察文本内容的变化。</li></ul><ol start="4"><li>subtree</li></ol><ul><li>类型：boolean</li><li>描述：当目标节点或其后代节点的任何变化（由上述选项指定的类型）被触发时，都会触发。这个选项必须与上述的其他选项之一结合使用。</li></ul><ol start="5"><li>attributeOldValue</li></ol><ul><li>类型：boolean</li><li>描述：如果设置为true，则在attributes为true或省略时，会记录变化之前的属性值。</li></ul><ol start="6"><li>characterDataOldValue</li></ol><ul><li>类型：boolean</li><li>描述：如果设置为true，则在characterData为true或省略时，会记录变化之前的字符数据。</li></ul><ol start="7"><li>attributeFilter</li></ol><ul><li>类型：Array</li><li>描述：当attributes为true或被忽略时，可以指定一个属性名数组，只观察这些属性的变化。</li></ul><h2 id="你可以轻松实现页面增加节点滚动到对应节点下" tabindex="-1">你可以轻松实现页面增加节点滚动到对应节点下 <a class="header-anchor" href="#你可以轻松实现页面增加节点滚动到对应节点下" aria-label="Permalink to &quot;你可以轻松实现页面增加节点滚动到对应节点下&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import {useEffect, useState}  from &#39;react&#39;</span></span>
<span class="line"><span>const MutationObserverPage = () =&gt; {</span></span>
<span class="line"><span>  const  [ comments,setComments]=useState([])</span></span>
<span class="line"><span>  useEffect(()=&gt;{</span></span>
<span class="line"><span>    // 选择需要观察变动的节点</span></span>
<span class="line"><span>    const target = document.getElementById(&quot;comments-container&quot;)</span></span>
<span class="line"><span>    // 观察器的配置（需要观察子元素的增加）</span></span>
<span class="line"><span>    const config = {childList:true,subtree:true}</span></span>
<span class="line"><span>    // 回调函数，当观察到变动时执行</span></span>
<span class="line"><span>    const callback = (mutationList,observer)=&gt;{</span></span>
<span class="line"><span>      // 遍历所有变动</span></span>
<span class="line"><span>      console.log(mutationList)</span></span>
<span class="line"><span>      for(let mutation of mutationList){</span></span>
<span class="line"><span>        if(mutation.type===&quot;childList&quot;){</span></span>
<span class="line"><span>          target.scrollTo({</span></span>
<span class="line"><span>            top:target.scrollHeight,</span></span>
<span class="line"><span>            behavior:&#39;smooth&#39;</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 创建一个观察器实例并传入回调函数</span></span>
<span class="line"><span>    const observer = new MutationObserver(callback)</span></span>
<span class="line"><span>    // 以上面的配置开始观察目标节点</span></span>
<span class="line"><span>    observer.observe(target,config)</span></span>
<span class="line"><span>  },[])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const handleClick =()=&gt;{</span></span>
<span class="line"><span>    const _comments = [...comments]</span></span>
<span class="line"><span>    _comments.push(comments.length+1)</span></span>
<span class="line"><span>    setComments(_comments)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return &lt;&gt;</span></span>
<span class="line"><span>      &lt;div id=&quot;comments-container&quot;&gt;</span></span>
<span class="line"><span>          {comments.map(item=&gt;&lt;div className=&#39;comment box&#39; key={item}&gt;{item}&lt;/div&gt;)}</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;button id=&#39;load-more-comments&#39; onClick={handleClick}&gt;加载更多评论&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default MutationObserverPage</span></span></code></pre></div>`,21),p=[l];function i(o,c,r,u,m,d){return n(),a("div",null,p)}const v=s(t,[["render",i]]);export{h as __pageData,v as default};
