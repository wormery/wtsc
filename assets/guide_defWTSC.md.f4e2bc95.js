import{_ as s,c as n,o as a,a as e}from"./app.08334bc0.js";const b='{"title":"defWTSC","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528"},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570"}],"relativePath":"guide/defWTSC.md"}',p={},t=e(`<h1 id="defwtsc" tabindex="-1">defWTSC <a class="header-anchor" href="#defwtsc" aria-hidden="true">#</a></h1><p>\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528\u5B9E\u4F8B</p><p>\u6BCF\u4E2A WTSC \u5B9E\u4F8B\u90FD\u662F\u901A\u8FC7 wtsc \u521B\u5EFA\u7684</p><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-typescript line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defWTSC <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wormery/wtsc&#39;</span>
<span class="token keyword">const</span> wtsc <span class="token operator">=</span> <span class="token function">defWTSC</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>\u60A8\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A option</p><p>\u4E0B\u9762\u5C06\u5C55\u793A option \u7684\u4E00\u4E9B\u53EF\u9009\u5C5E\u6027\u5217\u8868</p><ul><li>name \u7ED9\u6839 wtsc \u8D77\u4E2A\u540D\u5B57\uFF0C\u5982\u679C\u4E0D\u8F93\u5165\u7684\u8BDD\u9ED8\u8BA4\u4E3A root</li></ul><div class="language-typescript line-numbers-mode"><pre><code>type<span class="token operator">:</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>defThemeKeys \u60A8\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u56DE\u6389\u51FD\u6570\uFF0C\u5B83\u7684\u8FD4\u56DE\u503C\u5C06\u8BBE\u7F6E\u4E3A wtsc.the</li></ul><div class="language-typescript line-numbers-mode"><pre><code><span class="token function-variable function">type</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Inject<span class="token punctuation">,</span> provide<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> InjectKey<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> TheKey
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>themeList \u6839\u636E\u524D\u9762\u7684 defThemeKey \u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u52A8\u6001\u63A8\u65AD\u7684\u53BB\u8FD4\u56DE\u6EE1\u8DB3\u4E00\u4E0B\u7C7B\u578B\u7684\u4E00\u4E2A\u53C2\u6570</li></ul><div class="language-typescript line-numbers-mode"><pre><code>type<span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>mode <span class="token keyword">in</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>themeName <span class="token keyword">in</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span>TheKey<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,14),o=[t];function c(l,r,i,u,d,k){return a(),n("div",null,o)}var h=s(p,[["render",c]]);export{b as __pageData,h as default};