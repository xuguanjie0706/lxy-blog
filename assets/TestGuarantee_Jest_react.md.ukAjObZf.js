import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.B3h3aO-h.js";const t="/lxy-blog/assets/image.BDxCCZrg.png",p="/lxy-blog/assets/image-1.BIiigzub.png",l="/lxy-blog/assets/image-2.BmNbOl0z.png",_=JSON.parse('{"title":"react 组件单测","description":"","frontmatter":{},"headers":[],"relativePath":"TestGuarantee/Jest/react.md","filePath":"TestGuarantee/Jest/react.md","lastUpdated":1734706348000}'),i={name:"TestGuarantee/Jest/react.md"},c=e(`<h1 id="react-组件单测" tabindex="-1">react 组件单测 <a class="header-anchor" href="#react-组件单测" aria-label="Permalink to &quot;react 组件单测&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx create-react-app react-unit-test-study --template typescript</span></span>
<span class="line"><span>pnpm test</span></span></code></pre></div><p><img src="`+t+'" alt="alt text"> 不巧的是,警告了。没关系更新<code>package.json</code></p><p>package.json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;@testing-library/react&quot;: &quot;^15.0.6&quot;,</span></span></code></pre></div><p>可以看到测试内容很少。大致可以这么解释</p><ol><li>引入文件</li><li>创建一条测试</li><li>渲染app</li><li><code>screen</code>根据文本不区分大小写查找文本内容learn react的组件</li><li>预料这个组件在文档中 <img src="'+p+`" alt="alt text"></li></ol><h2 id="写第一个测试用例" tabindex="-1">写第一个测试用例 <a class="header-anchor" href="#写第一个测试用例" aria-label="Permalink to &quot;写第一个测试用例&quot;">​</a></h2><h3 id="安装组件库" tabindex="-1">安装组件库 <a class="header-anchor" href="#安装组件库" aria-label="Permalink to &quot;安装组件库&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> antd</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &quot;./App.css&quot;;</span></span>
<span class="line"><span>import { Button, message } from &quot;antd&quot;;</span></span>
<span class="line"><span>import { useCallback } from &quot;react&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span>  const showMessage = useCallback(() =&gt; {</span></span>
<span class="line"><span>    message.info(\`展示一个提示\`);</span></span>
<span class="line"><span>  }, []);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className=&quot;App&quot;&gt;</span></span>
<span class="line"><span>      &lt;Button type=&quot;primary&quot; onClick={showMessage}&gt;</span></span>
<span class="line"><span>        按钮</span></span>
<span class="line"><span>      &lt;/Button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>test(&#39;renders learn react link&#39;, () =&gt; {</span></span>
<span class="line"><span>  render(&lt;App /&gt;);</span></span>
<span class="line"><span>  const linkElement = screen.getByText(&quot;按 钮&quot;);</span></span>
<span class="line"><span>  expect(linkElement).toBeInTheDocument();</span></span>
<span class="line"><span>});</span></span></code></pre></div><p><img src="`+l+'" alt="alt text"></p>',14),o=[c];function r(d,h,u,g,m,b){return n(),s("div",null,o)}const v=a(i,[["render",r]]);export{_ as __pageData,v as default};
