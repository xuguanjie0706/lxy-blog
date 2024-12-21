import{_ as s,c as a,o as n,a4 as i}from"./chunks/framework.B3h3aO-h.js";const g=JSON.parse('{"title":"Sass案例篇","description":"","frontmatter":{},"headers":[],"relativePath":"css/sass/example.md","filePath":"css/sass/example.md","lastUpdated":1734706348000}'),p={name:"css/sass/example.md"},e=i(`<h1 id="sass案例篇" tabindex="-1">Sass案例篇 <a class="header-anchor" href="#sass案例篇" aria-label="Permalink to &quot;Sass案例篇&quot;">​</a></h1><p>为了让样式写的更好看 <strong>(element用到的sass函数)</strong></p><p>BEM 是 Block（块） Element（元素） Modifier（修饰器）的简称。使用BEM规范来命名CSS，组织HTML中选择器的结构，利于CSS代码的维护，使得代码结构更清晰。</p><h2 id="b-块" tabindex="-1">b 块 <a class="header-anchor" href="#b-块" aria-label="Permalink to &quot;b 块&quot;">​</a></h2><p>快速声明 <code>namespace+block</code>className</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin b($block) {</span></span>
<span class="line"><span>  $B: $namespace + &#39;-&#39; + $block !global;</span></span>
<span class="line"><span>  .#{$B} {</span></span>
<span class="line"><span>    @content;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="m-元素" tabindex="-1">m 元素 <a class="header-anchor" href="#m-元素" aria-label="Permalink to &quot;m 元素&quot;">​</a></h2><p>他应该包裹在<code>b</code>里面，快速声明 <code>namespace+block+modifier-separator+unit</code> className</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin m($modifier) {</span></span>
<span class="line"><span>  $selector: &amp;;  //这行似乎没有用</span></span>
<span class="line"><span>  $currentSelector: &#39;&#39;;</span></span>
<span class="line"><span>  @each $unit in $modifier {</span></span>
<span class="line"><span>    $currentSelector: #{$currentSelector +</span></span>
<span class="line"><span>      &amp; +</span></span>
<span class="line"><span>      $modifier-separator +</span></span>
<span class="line"><span>      $unit +</span></span>
<span class="line"><span>      &#39;,&#39;};</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @at-root {</span></span>
<span class="line"><span>    #{$currentSelector} {</span></span>
<span class="line"><span>      @content;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="selectortostring" tabindex="-1">selectorToString <a class="header-anchor" href="#selectortostring" aria-label="Permalink to &quot;selectorToString&quot;">​</a></h2><p>获取字符串第二个到倒数第二个之间，注意是从1或-1开始数，长度不够返回空</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@function selectorToString($selector) {</span></span>
<span class="line"><span>  $selector: inspect($selector); // 获取选择字符串</span></span>
<span class="line"><span>  $selector: str-slice($selector, 2, -2);</span></span>
<span class="line"><span>  @return $selector;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="containwhenflag" tabindex="-1">containWhenFlag <a class="header-anchor" href="#containwhenflag" aria-label="Permalink to &quot;containWhenFlag&quot;">​</a></h2><p>判断标记<code>$state-prefix</code>是否存在</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@function containWhenFlag($selector) {</span></span>
<span class="line"><span>  $selector: selectorToString($selector);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @if str-index($selector, &#39;.&#39; + $state-prefix) {</span></span>
<span class="line"><span>    @return true;</span></span>
<span class="line"><span>  } @else {</span></span>
<span class="line"><span>    @return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="containsmodifier" tabindex="-1">containsModifier <a class="header-anchor" href="#containsmodifier" aria-label="Permalink to &quot;containsModifier&quot;">​</a></h2><p>判断标记<code>$modifier-separator</code>是否存在</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@function containsModifier($selector) {</span></span>
<span class="line"><span>  $selector: selectorToString($selector);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @if str-index($selector, $modifier-separator) {</span></span>
<span class="line"><span>    @return true;</span></span>
<span class="line"><span>  } @else {</span></span>
<span class="line"><span>    @return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="containpseudoclass" tabindex="-1">containPseudoClass <a class="header-anchor" href="#containpseudoclass" aria-label="Permalink to &quot;containPseudoClass&quot;">​</a></h2><p>判断是否有伪类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@function containPseudoClass($selector) {</span></span>
<span class="line"><span>  $selector: selectorToString($selector);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @if str-index($selector, &#39;:&#39;) {</span></span>
<span class="line"><span>    @return true;</span></span>
<span class="line"><span>  } @else {</span></span>
<span class="line"><span>    @return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="hitallspecialnestrule" tabindex="-1">hitAllSpecialNestRule <a class="header-anchor" href="#hitallspecialnestrule" aria-label="Permalink to &quot;hitAllSpecialNestRule&quot;">​</a></h2><p>命中所有特殊嵌套规则除了<code>$element-separator</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@function hitAllSpecialNestRule($selector) {</span></span>
<span class="line"><span>  @return containsModifier($selector) or containWhenFlag($selector) or</span></span>
<span class="line"><span>    containPseudoClass($selector);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="e-元素" tabindex="-1">e 元素 <a class="header-anchor" href="#e-元素" aria-label="Permalink to &quot;e 元素&quot;">​</a></h2><p>学习完上面的函数，才能理解。</p><p>大概意思如果命中特殊规则，在根目录下创建，没有则在父元素下创建</p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mixin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $E: $</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> !global;    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注册一个全局变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $selector: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $currentSelector: &#39;&#39;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">each</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $unit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $currentSelector: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{$currentSelector +</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39; +</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      $B +</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      $</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">element-separator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> +</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      $unit +</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &#39;,&#39;};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">if</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hitAllSpecialNestRule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($selector) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">at-root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      #</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{$selector} {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        #</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{$currentSelector} {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">at-root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      #</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{$currentSelector} {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span></code></pre></div><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(alert) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(content) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">table-cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//生成</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> span</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .lxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">alert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">content</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .lxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">alert__info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="when" tabindex="-1">when <a class="header-anchor" href="#when" aria-label="Permalink to &quot;when&quot;">​</a></h2><p>快速声明<code>is-state</code>className</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin when($state) {</span></span>
<span class="line"><span>  @at-root {</span></span>
<span class="line"><span>    &amp;.#{$state-prefix + $state} {</span></span>
<span class="line"><span>      @content;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="share-rule" tabindex="-1">share-rule <a class="header-anchor" href="#share-rule" aria-label="Permalink to &quot;share-rule&quot;">​</a></h2><p>还没做到</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin share-rule($name) {</span></span>
<span class="line"><span>  $rule-name: &#39;%shared-&#39; + $name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @at-root #{$rule-name} {</span></span>
<span class="line"><span>    @content;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="meb" tabindex="-1">meb <a class="header-anchor" href="#meb" aria-label="Permalink to &quot;meb&quot;">​</a></h2><p>还没做到</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin meb($modifier: false, $element: $E, $block: $B) {</span></span>
<span class="line"><span>  $selector: &amp;;</span></span>
<span class="line"><span>  $modifierCombo: &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @if $modifier {</span></span>
<span class="line"><span>    $modifierCombo: $modifier-separator + $modifier;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @at-root {</span></span>
<span class="line"><span>    #{$selector} {</span></span>
<span class="line"><span>      .#{$block + $element-separator + $element + $modifierCombo} {</span></span>
<span class="line"><span>        @content;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="pseudo" tabindex="-1">pseudo <a class="header-anchor" href="#pseudo" aria-label="Permalink to &quot;pseudo&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin pseudo($pseudo) {</span></span>
<span class="line"><span>  @at-root #{&amp;}#{&#39;:#{$pseudo}&#39;} {</span></span>
<span class="line"><span>    @content;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="extend-rule" tabindex="-1">extend-rule <a class="header-anchor" href="#extend-rule" aria-label="Permalink to &quot;extend-rule&quot;">​</a></h2><p>还没做到</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin extend-rule($name) {</span></span>
<span class="line"><span>  @extend #{&#39;%shared-&#39; + $name};</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="configurable-m" tabindex="-1">configurable-m <a class="header-anchor" href="#configurable-m" aria-label="Permalink to &quot;configurable-m&quot;">​</a></h2><p>还没做到</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin configurable-m($modifier, $E-flag: false) {</span></span>
<span class="line"><span>  $selector: &amp;;</span></span>
<span class="line"><span>  $interpolation: &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @if $E-flag {</span></span>
<span class="line"><span>    $interpolation: $element-separator + $E-flag;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @at-root {</span></span>
<span class="line"><span>    #{$selector} {</span></span>
<span class="line"><span>      .#{$B + $interpolation + $modifier-separator + $modifier} {</span></span>
<span class="line"><span>        @content;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="spec-selector" tabindex="-1">spec-selector <a class="header-anchor" href="#spec-selector" aria-label="Permalink to &quot;spec-selector&quot;">​</a></h2><p>未使用到</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin spec-selector(</span></span>
<span class="line"><span>  $specSelector: &#39;&#39;,</span></span>
<span class="line"><span>  $element: $E,</span></span>
<span class="line"><span>  $modifier: false,</span></span>
<span class="line"><span>  $block: $B</span></span>
<span class="line"><span>) {</span></span>
<span class="line"><span>  $modifierCombo: &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @if $modifier {</span></span>
<span class="line"><span>    $modifierCombo: $modifier-separator + $modifier;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @at-root {</span></span>
<span class="line"><span>    #{&amp;}#{$specSelector}.#{$block</span></span>
<span class="line"><span>      + $element-separator</span></span>
<span class="line"><span>      + $element</span></span>
<span class="line"><span>      + $modifierCombo} {</span></span>
<span class="line"><span>      @content;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="utils-user-select" tabindex="-1">utils-user-select <a class="header-anchor" href="#utils-user-select" aria-label="Permalink to &quot;utils-user-select&quot;">​</a></h2><p>未使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin utils-user-select($value) {</span></span>
<span class="line"><span>  -moz-user-select: $value;</span></span>
<span class="line"><span>  -webkit-user-select: $value;</span></span>
<span class="line"><span>  -ms-user-select: $value;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="utils-clearfix" tabindex="-1">utils-clearfix <a class="header-anchor" href="#utils-clearfix" aria-label="Permalink to &quot;utils-clearfix&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin utils-clearfix {</span></span>
<span class="line"><span>  $selector: &amp;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @at-root {</span></span>
<span class="line"><span>    #{$selector}::before,</span></span>
<span class="line"><span>    #{$selector}::after {</span></span>
<span class="line"><span>      display: table;</span></span>
<span class="line"><span>      content: &#39;&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    #{$selector}::after {</span></span>
<span class="line"><span>      clear: both;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="utils-vertical-center" tabindex="-1">utils-vertical-center <a class="header-anchor" href="#utils-vertical-center" aria-label="Permalink to &quot;utils-vertical-center&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin utils-vertical-center {</span></span>
<span class="line"><span>  $selector: &amp;;</span></span>
<span class="line"><span>  @at-root {</span></span>
<span class="line"><span>    #{$selector}::after {</span></span>
<span class="line"><span>      display: inline-block;</span></span>
<span class="line"><span>      content: &#39;&#39;;</span></span>
<span class="line"><span>      height: 100%;</span></span>
<span class="line"><span>      vertical-align: middle;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin utils-ellipsis {</span></span>
<span class="line"><span>  overflow: hidden;</span></span>
<span class="line"><span>  text-overflow: ellipsis;</span></span>
<span class="line"><span>  white-space: nowrap;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,58),l=[e];function t(h,c,r,o,k,d){return n(),a("div",null,l)}const u=s(p,[["render",t]]);export{g as __pageData,u as default};
