import{c as n,o as a,a4 as s}from"./chunks/framework.B3h3aO-h.js";const e=s(`<h1 id="发布订阅" tabindex="-1">发布订阅 <a class="header-anchor" href="#发布订阅" aria-label="Permalink to &quot;发布订阅&quot;">​</a></h1><p>发布订阅模式（Publish-Subscribe Pattern）是一种常见的消息传递模式，用于在多个对象或组件之间建立松散的耦合关系。在这种模式中，发送者（发布者）发送消息（事件），而不直接发送给特定的接收者（订阅者）。接收者则订阅他们感兴趣的消息，当消息被发布时，所有订阅了该消息的接收者都会收到通知。</p><h2 id="故事" tabindex="-1">故事 <a class="header-anchor" href="#故事" aria-label="Permalink to &quot;故事&quot;">​</a></h2><h3 id="故事背景" tabindex="-1">故事背景 <a class="header-anchor" href="#故事背景" aria-label="Permalink to &quot;故事背景&quot;">​</a></h3><p>在森林里，有一个猎人经常需要追踪和狩猎各种动物。但是，由于森林面积广阔，猎人无法独自追踪所有感兴趣的动物。幸运的是，森林里有许多其他生物，比如小鸟、松鼠和狐狸，它们经常观察到动物的活动，并愿意帮助猎人传递信息。</p><h3 id="角色定义" tabindex="-1">角色定义 <a class="header-anchor" href="#角色定义" aria-label="Permalink to &quot;角色定义&quot;">​</a></h3><p>猎人：发布者（Publisher），他对动物的行踪感兴趣，并希望获取关于动物的信息。小鸟、松鼠、狐狸：订阅者（Subscribers），它们各自观察着森林中不同区域的动物活动，并愿意将这些信息传递给猎人。消息传递系统：森林中的“消息传递系统”就是发布者模式的消息代理（Broker），它负责接收订阅者的注册信息，并在有消息发布时通知所有相关的订阅者。</p><h3 id="故事流程" tabindex="-1">故事流程 <a class="header-anchor" href="#故事流程" aria-label="Permalink to &quot;故事流程&quot;">​</a></h3><ol><li>猎人发布订阅请求：猎人告诉森林中的“消息传递系统”，他对“鹿群”的行踪特别感兴趣，如果有任何关于鹿群的消息，他希望能第一时间得知。</li><li>订阅者注册：小鸟、松鼠和狐狸分别表示它们可以观察到森林不同区域的动物活动。小鸟说自己经常在高空飞翔，能看到远处的鹿群；松鼠则说自己在树上能观察到地面上的动静；狐狸则表示自己有敏锐的嗅觉，能闻到鹿群的气味。它们都向“消息传递系统”注册，表示愿意将观察到的鹿群信息传递给猎人。</li><li>消息发布：有一天，小鸟在空中看到远处的鹿群正在迁移。它立即将这个消息发送给“消息传递系统”。</li><li>消息传递：“消息传递系统”收到小鸟的消息后，迅速通知所有注册了“鹿群”信息的订阅者（在这个例子中是松鼠和狐狸）。但是，由于松鼠和狐狸当天并没有观察到鹿群，所以它们没有额外的信息传递给猎人。</li><li>猎人接收消息：“消息传递系统”最后将小鸟观察到的鹿群信息传递给猎人。猎人得知鹿群正在迁移的消息后，立即准备追踪和狩猎。</li></ol><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class EventEmitter {</span></span>
<span class="line"><span>    constructor (){</span></span>
<span class="line"><span>        this.events={}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 订阅事件</span></span>
<span class="line"><span>    on(eventName,callback){</span></span>
<span class="line"><span>        if(!this.events[eventName]){</span></span>
<span class="line"><span>            this.events[eventName] = []</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        this.events[eventName].push(callback)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 发布事件</span></span>
<span class="line"><span>    emit(eventName,...args){</span></span>
<span class="line"><span>        if(this.events[eventName]){</span></span>
<span class="line"><span>            this.events[eventName].forEach(callback=&gt;{</span></span>
<span class="line"><span>                callback.call(this,...args)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 取消事件</span></span>
<span class="line"><span>    off(eventName,callback){</span></span>
<span class="line"><span>        if(this.events[eventName]){</span></span>
<span class="line"><span>           this.events[eventName] =  this.events[eventName].filter((cb)=&gt;cb!==callback)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个消息传递系统</span></span>
<span class="line"><span>const emitter = new EventEmitter()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 猎人1 订阅 鹿群在哪里的任务 (不同的函数代表猎人名称)</span></span>
<span class="line"><span>function hunter1(area){</span></span>
<span class="line"><span>    console.log(\`猎人1 鹿群在 \${area}\`)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>emitter.on(&quot;Deer&quot;,hunter1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 猎人2 订阅 鹿群在哪里的任务 (不同的函数代表猎人名称)</span></span>
<span class="line"><span>function hunter2(area){</span></span>
<span class="line"><span>    console.log(\`猎人2 鹿群在 \${area}\`)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter.on(&quot;Deer&quot;,hunter2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 小鸟 发现 鹿群 在消息传递系统发布消息</span></span>
<span class="line"><span>emitter.emit(&quot;Deer&quot;,&#39;东边&#39;)</span></span>
<span class="line"><span>// 狐狸 发现 鹿群 在消息传递系统发布消息</span></span>
<span class="line"><span>emitter.emit(&quot;Deer&quot;,&quot;西边&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 猎人1 取消订阅 鹿群在哪里的任务</span></span>
<span class="line"><span>emitter.off(&#39;Deer&#39;, hunter1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 松鼠 发现 鹿群 在消息传递系统发布消息</span></span>
<span class="line"><span>emitter.emit(&quot;Deer&quot;,&quot;北边&quot;) //只有猎人才能收到消息</span></span></code></pre></div>`,11),p=[e],o=JSON.parse('{"title":"发布订阅","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/handwriting/eventEmitter.md","filePath":"Interview/handwriting/eventEmitter.md","lastUpdated":1716056211000}'),l={name:"Interview/handwriting/eventEmitter.md"},h=Object.assign(l,{setup(t){return(i,c)=>(a(),n("div",null,p))}});export{o as __pageData,h as default};
