import{_ as p,D as e,c as l,l as t,a as s,I as i,a4 as a,o}from"./chunks/framework.B3h3aO-h.js";const q=JSON.parse('{"title":"script setup","description":"","frontmatter":{},"headers":[],"relativePath":"Javascript/Vue3/setup.md","filePath":"Javascript/Vue3/setup.md","lastUpdated":1717574325000}'),c={name:"Javascript/Vue3/setup.md"},r=a(`<h1 id="script-setup" tabindex="-1">&lt;script setup &gt; <a class="header-anchor" href="#script-setup" aria-label="Permalink to &quot;\\&lt;script setup \\&gt;&quot;">​</a></h1><p><code>&lt;script setup&gt;</code> 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐</p><h2 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>console.log(&#39;hello script setup&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="响应式" tabindex="-1">响应式 <a class="header-anchor" href="#响应式" aria-label="Permalink to &quot;响应式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { ref,toRefs } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>cosnt props = toRefs(props)</span></span></code></pre></div><h2 id="使用组件" tabindex="-1">使用组件 <a class="header-anchor" href="#使用组件" aria-label="Permalink to &quot;使用组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import MyComponent from &#39;./MyComponent.vue&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;MyComponent /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h3 id="动态组件" tabindex="-1">动态组件 <a class="header-anchor" href="#动态组件" aria-label="Permalink to &quot;动态组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import Foo from &#39;./Foo.vue&#39;</span></span>
<span class="line"><span>import Bar from &#39;./Bar.vue&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;component :is=&quot;Foo&quot; /&gt;</span></span>
<span class="line"><span>  &lt;component :is=&quot;someCondition ? Foo : Bar&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h3 id="递归组件" tabindex="-1">递归组件 <a class="header-anchor" href="#递归组件" aria-label="Permalink to &quot;递归组件&quot;">​</a></h3>`,11),d=a(`<h3 id="命名空间组件" tabindex="-1">命名空间组件 <a class="header-anchor" href="#命名空间组件" aria-label="Permalink to &quot;命名空间组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import * as Form from &#39;./form-components&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;Form.Input&gt;</span></span>
<span class="line"><span>    &lt;Form.Label&gt;label&lt;/Form.Label&gt;</span></span>
<span class="line"><span>  &lt;/Form.Input&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h2 id="使用自定义指令" tabindex="-1">使用自定义指令 <a class="header-anchor" href="#使用自定义指令" aria-label="Permalink to &quot;使用自定义指令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const vMyDirective = {</span></span>
<span class="line"><span>  beforeMount: (el) =&gt; {</span></span>
<span class="line"><span>    // 在元素上做些操作</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;h1 v-my-directive&gt;This is a Heading&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h2 id="defineprops-和-defineemits" tabindex="-1">defineProps() 和 defineEmits() <a class="header-anchor" href="#defineprops-和-defineemits" aria-label="Permalink to &quot;defineProps() 和 defineEmits()&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  foo: String</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const emit = defineEmits([&#39;change&#39;, &#39;delete&#39;])</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="definemodel-3-4" tabindex="-1">defineModel() 3.4+ <a class="header-anchor" href="#definemodel-3-4" aria-label="Permalink to &quot;defineModel() 3.4+&quot;">​</a></h2><p>fdafda</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const model = defineModel()</span></span>
<span class="line"><span>// 或者：声明带选项的 &quot;modelValue&quot; prop</span></span>
<span class="line"><span>const model = defineModel({ type: String });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>model.value = &quot;hello&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 声明 &quot;count&quot; prop，由父组件通过 v-model:count 使用</span></span>
<span class="line"><span>const count = defineModel(&quot;count&quot;)</span></span>
<span class="line"><span>// 或者：声明带选项的 &quot;count&quot; prop</span></span>
<span class="line"><span>const count = defineModel(&quot;count&quot;, { type: Number, default: 0 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function inc() {</span></span>
<span class="line"><span>  // 在被修改时，触发 &quot;update:count&quot; 事件</span></span>
<span class="line"><span>  count.value++</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="修饰符" tabindex="-1">修饰符 <a class="header-anchor" href="#修饰符" aria-label="Permalink to &quot;修饰符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const [modelValue, modelModifiers] = defineModel({</span></span>
<span class="line"><span>  // get() 省略了，因为这里不需要它</span></span>
<span class="line"><span>  set(value) {</span></span>
<span class="line"><span>    // 如果使用了 .trim 修饰符，则返回裁剪过后的值</span></span>
<span class="line"><span>    if (modelModifiers.trim) {</span></span>
<span class="line"><span>      return value.trim()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 否则，原样返回</span></span>
<span class="line"><span>    return value</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="defineexpose" tabindex="-1">defineExpose() <a class="header-anchor" href="#defineexpose" aria-label="Permalink to &quot;defineExpose()&quot;">​</a></h2><p>使用 <code>&lt;script setup&gt;</code> 的组件是默认关闭的——即通过模板引用或者 $parent 链获取到的组件的公开实例，不会暴露任何在 <code>&lt;script setup&gt;</code> 中声明的绑定。</p><p>可以通过 defineExpose 编译器宏来显式指定在 <code>&lt;script setup&gt;</code> 组件中要暴露出去的属性：</p><p><strong>值得注意的是通过getCurrentInstance 获取的实例在expose中，并不再proxy属性中</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = 1</span></span>
<span class="line"><span>const b = ref(2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>defineExpose({</span></span>
<span class="line"><span>  a,</span></span>
<span class="line"><span>  b</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="defineoptions" tabindex="-1">defineOptions() <a class="header-anchor" href="#defineoptions" aria-label="Permalink to &quot;defineOptions()&quot;">​</a></h2><p>这个宏可以用来直接在 <code>&lt;script setup&gt;</code> 中声明组件选项，而不必使用单独的块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>defineOptions({</span></span>
<span class="line"><span>  inheritAttrs: false,</span></span>
<span class="line"><span>  customOptions: {</span></span>
<span class="line"><span>    /* ... */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="shallowref" tabindex="-1">shallowRef <a class="header-anchor" href="#shallowref" aria-label="Permalink to &quot;shallowRef&quot;">​</a></h2><p>优势</p><ul><li>使用 shallowRef 可以避免不必要的响应式更新，从而提高性能。</li><li>当处理大型对象或深层嵌套的对象时，使用 shallowRef 可以减少不必要的重新渲染和计算。::: details 具体用法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { shallowRef } from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const person = { name: &#39;John&#39;, age: 30 };</span></span>
<span class="line"><span>const shallowPerson = shallowRef(person);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(shallowPerson.value); // 输出: { name: &#39;John&#39;, age: 30 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 修改对象内部的属性，不会触发 shallowRef 的更新</span></span>
<span class="line"><span>shallowPerson.value.name = &#39;Alice&#39;;</span></span>
<span class="line"><span>console.log(shallowPerson.value); // 输出: { name: &#39;Alice&#39;, age: 30 }，但组件不会重新渲染</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 替换整个对象，会触发 shallowRef 的更新</span></span>
<span class="line"><span>shallowPerson.value = { name: &#39;Bob&#39;, age: 25 };</span></span>
<span class="line"><span>console.log(shallowPerson.value); // 输出: { name: &#39;Bob&#39;, age: 25 }，此时组件会重新渲染</span></span></code></pre></div><p>:::</p><p>shallowRef 是 Vue 3 提供的一个性能优化工具，适用于只需要监听对象引用变化而不需要监听对象内部属性变化的场景。通过合理地使用 shallowRef，可以提高 Vue 应用的性能。</p>`,25);function h(u,g,m,f,v,b){const n=e("FooBar");return o(),l("div",null,[r,t("p",null,[s("一个单文件组件可以通过它的文件名被其自己所引用。例如：名为 FooBar.vue 的组件可以在其模板中用 "),i(n),s(" 引用它自己。")]),d])}const _=p(c,[["render",h]]);export{q as __pageData,_ as default};
