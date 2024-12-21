import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const b=JSON.parse('{"title":"React 基础","description":"","frontmatter":{},"headers":[],"relativePath":"Javascript/React/base.md","filePath":"Javascript/React/base.md","lastUpdated":1716471679000}'),e={name:"Javascript/React/base.md"},t=p(`<h1 id="react-基础" tabindex="-1">React 基础 <a class="header-anchor" href="#react-基础" aria-label="Permalink to &quot;React 基础&quot;">​</a></h1><h2 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h2><p>react 声明组件有2种方式。分为:类组件和函数组件</p><h2 id="类组件" tabindex="-1">类组件 <a class="header-anchor" href="#类组件" aria-label="Permalink to &quot;类组件&quot;">​</a></h2><p>类组件使用class 定义,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class WelCome extends React.Compnent&lt;Props&gt;{</span></span>
<span class="line"><span>    // 组件被挂载之前，调用构造函数</span></span>
<span class="line"><span>    constructor(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 组件的状态，也可写在constructor中</span></span>
<span class="line"><span>    state = {</span></span>
<span class="line"><span>        count:1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 在render方法之前被调用，并且在初始化挂载后更新都会被调用。它应返回一个对象来更新state，如果返回null则不更新任何内容</span></span>
<span class="line"><span>    getDerivedStateFromProps(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 每次渲染都会执行。但是当\`shouldComponentUpdate\`返回false时，不对调用</span></span>
<span class="line"><span>    render (){</span></span>
<span class="line"><span>        return &lt;h1&gt;Hello,{this.props.name}&lt;/h1&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 该方法会在组件挂载后，正实插入节点后调用</span></span>
<span class="line"><span>    componentDidMount(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 默认state每次发生变化，组件都会重新渲染，此生命周期用来优化性能</span></span>
<span class="line"><span>    shouldComponentUpdate(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 该方法会在最近一次渲染输出前调用。它用来获取更改前的DOM信息，如滚动位置</span></span>
<span class="line"><span>    getSnapshotBeforeUpdate(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 首次渲染不会执行此方法，该方法会在组件被更新后调用。</span></span>
<span class="line"><span>    componentDidUpdate(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 在组件销毁前调用。一般用于清理必要的操作，如定时器</span></span>
<span class="line"><span>    componentWillUnmount(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //用于后代组件抛出错误后调用</span></span>
<span class="line"><span>    getDerivedStateFromError(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="state-组件内状态管理" tabindex="-1">state 组件内状态管理 <a class="header-anchor" href="#state-组件内状态管理" aria-label="Permalink to &quot;state 组件内状态管理&quot;">​</a></h3><p>使用setState方法进行更新，this.setState(obj,callback)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>this.setState({</span></span>
<span class="line"><span>    count:this.state.count+1</span></span>
<span class="line"><span>},()=&gt;console.log(&#39;更新完成&#39;))</span></span></code></pre></div><h3 id="提问-this-setstate是异步的还是同步的-上面的例子像是有一个异步的回调。" tabindex="-1">提问：this.setState是异步的还是同步的？上面的例子像是有一个异步的回调。 <a class="header-anchor" href="#提问-this-setstate是异步的还是同步的-上面的例子像是有一个异步的回调。" aria-label="Permalink to &quot;提问：this.setState是异步的还是同步的？上面的例子像是有一个异步的回调。&quot;">​</a></h3><p>遗留问题</p><h2 id="函数组件" tabindex="-1">函数组件 <a class="header-anchor" href="#函数组件" aria-label="Permalink to &quot;函数组件&quot;">​</a></h2><p>React Hook</p><ul><li>useState: 对应类组件中的state和setState,用于状态管理</li><li>useEffect: 用于执行副作用代码，如模拟生命周期，绑定事件</li><li>useMemo</li></ul><h2 id="路由控制" tabindex="-1">路由控制 <a class="header-anchor" href="#路由控制" aria-label="Permalink to &quot;路由控制&quot;">​</a></h2><p>React Router 是一套完整的React路由解决方案，它拥有简单的Api与强大的功能。</p>`,16),l=[t];function i(c,o,r,h,d,u){return n(),s("div",null,l)}const _=a(e,[["render",i]]);export{b as __pageData,_ as default};
