import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const g=JSON.parse('{"title":"打包成2进制形式","description":"","frontmatter":{},"headers":[],"relativePath":"PackagingTools/webpack/plugin.md","filePath":"PackagingTools/webpack/plugin.md","lastUpdated":1734659489000}'),e={name:"PackagingTools/webpack/plugin.md"},l=p(`<h1 id="打包成2进制形式" tabindex="-1">打包成2进制形式 <a class="header-anchor" href="#打包成2进制形式" aria-label="Permalink to &quot;打包成2进制形式&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;);</span></span>
<span class="line"><span>const WebpackObfuscator = require(&#39;webpack-obfuscator&#39;);</span></span>
<span class="line"><span>const webpack = require(&quot;webpack&quot;);</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span>    filename: &#39;[name].js&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    // new webpack.optimize.OccurrenceOrderPlugin(),</span></span>
<span class="line"><span>    new WebpackObfuscator({</span></span>
<span class="line"><span>      compact: true,</span></span>
<span class="line"><span>      controlFlowFlattening: true,</span></span>
<span class="line"><span>      controlFlowFlatteningThreshold: 0.75,</span></span>
<span class="line"><span>      IdentifierNamesGenerator:&#39;hexadecimal&#39;,</span></span>
<span class="line"><span>    }, [])</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>};</span></span></code></pre></div>`,2),t=[l];function c(i,o,r,d,u,_){return n(),s("div",null,t)}const m=a(e,[["render",c]]);export{g as __pageData,m as default};
