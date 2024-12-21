import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.B3h3aO-h.js";const p="/lxy-blog/assets/image-1.DwrXeTEP.png",l="/lxy-blog/assets/image-2.B7ArFaAV.png",t="/lxy-blog/assets/image-4.6dxVXrn_.png",i="/lxy-blog/assets/image-3.BX1M9AAM.png",o="/lxy-blog/assets/image-7.DdLlQ-DZ.png",c="/lxy-blog/assets/image-8.CNcLp6-f.png",q=JSON.parse('{"title":"git Actions","description":"","frontmatter":{},"headers":[],"relativePath":"daily/git/actions.md","filePath":"daily/git/actions.md","lastUpdated":1716300886000}'),r={name:"daily/git/actions.md"},h=e('<h1 id="git-actions" tabindex="-1">git Actions <a class="header-anchor" href="#git-actions" aria-label="Permalink to &quot;git Actions&quot;">​</a></h1><p>你可以理解他是一个虚拟机，可以帮你实现仓库的部署。他可以安装软件，执行脚本。</p><h2 id="首先需要申请一个token-打开github的设置" tabindex="-1">首先需要申请一个token,打开github的设置 <a class="header-anchor" href="#首先需要申请一个token-打开github的设置" aria-label="Permalink to &quot;首先需要申请一个token,打开github的设置&quot;">​</a></h2><p><img src="'+p+'" alt="alt text"></p><h2 id="创建一个token" tabindex="-1">创建一个token <a class="header-anchor" href="#创建一个token" aria-label="Permalink to &quot;创建一个token&quot;">​</a></h2><p><img src="'+l+'" alt="alt text"></p><h2 id="输入一个名字-然后是过期天数-这里需要对workflow打勾-名字推荐用大写。如-action-secret" tabindex="-1">输入一个名字，然后是过期天数,这里需要对<code>workflow</code>打勾,名字推荐用大写。如：ACTION_SECRET <a class="header-anchor" href="#输入一个名字-然后是过期天数-这里需要对workflow打勾-名字推荐用大写。如-action-secret" aria-label="Permalink to &quot;输入一个名字，然后是过期天数,这里需要对`workflow`打勾,名字推荐用大写。如：ACTION_SECRET&quot;">​</a></h2><p><img src="'+t+'" alt="alt text"></p><h2 id="创建成功-你就可以使用" tabindex="-1">创建成功，你就可以使用 <a class="header-anchor" href="#创建成功-你就可以使用" aria-label="Permalink to &quot;创建成功，你就可以使用&quot;">​</a></h2><p><img src="'+i+'" alt="alt text"> 准备工作已经做好了</p><h2 id="创建actions" tabindex="-1">创建Actions <a class="header-anchor" href="#创建actions" aria-label="Permalink to &quot;创建Actions&quot;">​</a></h2><p><img src="'+o+'" alt="alt text"></p><h2 id="编辑main-yml-就可以实现指令" tabindex="-1">编辑main.yml,就可以实现指令 <a class="header-anchor" href="#编辑main-yml-就可以实现指令" aria-label="Permalink to &quot;编辑main.yml,就可以实现指令&quot;">​</a></h2><p><img src="'+c+`" alt="alt text"></p><h2 id="指令详情" tabindex="-1">指令详情 <a class="header-anchor" href="#指令详情" aria-label="Permalink to &quot;指令详情&quot;">​</a></h2><p>先看一段yml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>name: docs-deploy # 流程名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on: # 触发条件</span></span>
<span class="line"><span>  # 每当 push 到 master 分支时触发部署</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches: [master]</span></span>
<span class="line"><span>jobs: # 工作</span></span>
<span class="line"><span>  docs: # 工作名称</span></span>
<span class="line"><span>    runs-on: ubuntu-latest # 指定运行所需要的虚拟机环境（必填）</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - uses: actions/checkout@v2</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line"><span>          fetch-depth: 0</span></span>
<span class="line"><span>      - name: Install pnpm</span></span>
<span class="line"><span>        uses: pnpm/action-setup@v2</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          version: 7</span></span>
<span class="line"><span>      - name: Setup Node.js</span></span>
<span class="line"><span>        uses: actions/setup-node@v2</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          # 选择要使用的 node 版本</span></span>
<span class="line"><span>          node-version: &#39;16&#39;</span></span>
<span class="line"><span>          cache: &#39;pnpm&#39;</span></span>
<span class="line"><span>        # 如果缓存没有命中，安装依赖</span></span>
<span class="line"><span>      - name: Install dependencies</span></span>
<span class="line"><span>        run: pnpm install --no-frozen-lockfile --ignore-scripts</span></span>
<span class="line"><span>      # 运行构建脚本</span></span>
<span class="line"><span>      - name: Build vitepress site</span></span>
<span class="line"><span>        run: pnpm docs:build</span></span>
<span class="line"><span>        env:</span></span>
<span class="line"><span>          DOC_ENV: preview</span></span>
<span class="line"><span>          NODE_OPTIONS: --max-old-space-size=4096</span></span>
<span class="line"><span>      # 查看 workflow 的文档来获取更多信息</span></span>
<span class="line"><span>      # @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span>      - name: Deploy to GitHub Pages</span></span>
<span class="line"><span>        uses: crazy-max/ghaction-github-pages@v2</span></span>
<span class="line"><span>        # 环境变量</span></span>
<span class="line"><span>        env:</span></span>
<span class="line"><span>          GITHUB_TOKEN: \${{ secrets.ACTION_SECRET }} ## 这里用到了token的变量</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          # 部署到 gh-pages 分支</span></span>
<span class="line"><span>          target_branch: gh-pages</span></span>
<span class="line"><span>          # 部署目录为 vitepress 的默认输出目录</span></span>
<span class="line"><span>          build_dir: docs/.vitepress/dist</span></span></code></pre></div><h2 id="自定义何时触发工作流运行" tabindex="-1">自定义何时触发工作流运行 <a class="header-anchor" href="#自定义何时触发工作流运行" aria-label="Permalink to &quot;自定义何时触发工作流运行&quot;">​</a></h2><h3 id="将工作流设置为在向主分支和发布分支推送事件时运行" tabindex="-1">将工作流设置为在向主分支和发布分支推送事件时运行 <a class="header-anchor" href="#将工作流设置为在向主分支和发布分支推送事件时运行" aria-label="Permalink to &quot;将工作流设置为在向主分支和发布分支推送事件时运行&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>on:</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches:</span></span>
<span class="line"><span>    - main</span></span>
<span class="line"><span>    - release/*</span></span>
<span class="line"><span>  pull_request:</span></span>
<span class="line"><span>    branches:</span></span>
<span class="line"><span>    - main</span></span></code></pre></div><h3 id="日程-定时任务" tabindex="-1">日程-定时任务 <a class="header-anchor" href="#日程-定时任务" aria-label="Permalink to &quot;日程-定时任务&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>on:</span></span>
<span class="line"><span>  schedule:</span></span>
<span class="line"><span>  - cron: &quot;0 2 * * 1-5&quot;</span></span></code></pre></div><h3 id="手动运行工作流" tabindex="-1">手动运行工作流 <a class="header-anchor" href="#手动运行工作流" aria-label="Permalink to &quot;手动运行工作流&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>on:</span></span>
<span class="line"><span>  workflow_dispatch:</span></span></code></pre></div><h2 id="在不同的操作系统上运行作业" tabindex="-1">在不同的操作系统上运行作业 <a class="header-anchor" href="#在不同的操作系统上运行作业" aria-label="Permalink to &quot;在不同的操作系统上运行作业&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>jobs:</span></span>
<span class="line"><span>  my_job:</span></span>
<span class="line"><span>    name: deploy to staging</span></span>
<span class="line"><span>    runs-on: ubuntu-22.04</span></span></code></pre></div><p>可用的虚拟机类型</p><ul><li>ubuntu-latest, ubuntu-22.04, or ubuntu-20.04</li><li>windows-latest, windows-2022, or windows-2019</li><li>macos-latest, macos-13, or macos-12</li></ul><h2 id="使用一个动作" tabindex="-1">使用一个动作 <a class="header-anchor" href="#使用一个动作" aria-label="Permalink to &quot;使用一个动作&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- name: Setup Node</span></span>
<span class="line"><span>  uses: actions/setup-node@v4</span></span>
<span class="line"><span>  with:</span></span>
<span class="line"><span>    node-version: &#39;20.x&#39;</span></span></code></pre></div><h3 id="marketplace-action市场" tabindex="-1">Marketplace <code>action市场</code> <a class="header-anchor" href="#marketplace-action市场" aria-label="Permalink to &quot;Marketplace \`action市场\`&quot;">​</a></h3><p>你可以在这里寻找你想要的action<a href="https://github.com/marketplace?query=setup-node" target="_blank" rel="noreferrer">链接</a></p><h2 id="执行一个命令" tabindex="-1">执行一个命令 <a class="header-anchor" href="#执行一个命令" aria-label="Permalink to &quot;执行一个命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- name: Install Dependencies</span></span>
<span class="line"><span>  run: npm install</span></span></code></pre></div><h2 id="有条件地运行步骤或作业" tabindex="-1">有条件地运行步骤或作业 <a class="header-anchor" href="#有条件地运行步骤或作业" aria-label="Permalink to &quot;有条件地运行步骤或作业&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>steps:</span></span>
<span class="line"><span>- run: npm publish</span></span>
<span class="line"><span>  if: github.event_name == &#39;push&#39;</span></span></code></pre></div>`,36),d=[h];function u(g,m,b,k,v,_){return n(),s("div",null,d)}const x=a(r,[["render",u]]);export{q as __pageData,x as default};
