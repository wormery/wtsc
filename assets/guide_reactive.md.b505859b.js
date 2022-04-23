import{_ as n,c as s,o as a,a as p}from"./app.08334bc0.js";const b='{"title":"\u54CD\u5E94","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521D\u59CB\u5316","slug":"\u521D\u59CB\u5316"},{"level":2,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528"},{"level":2,"title":"\u7981\u6B62\u54CD\u5E94","slug":"\u7981\u6B62\u54CD\u5E94"}],"relativePath":"guide/reactive.md"}',e={},t=p(`<h1 id="\u54CD\u5E94" tabindex="-1">\u54CD\u5E94 <a class="header-anchor" href="#\u54CD\u5E94" aria-hidden="true">#</a></h1><p>\u54CD\u5E94\u5316 api \u7684\u751F\u6210\u51FD\u6570\u9700\u8981\u60A8\u628A\u5BF9\u5E94\u7684\u54CD\u5E94 ref \u51FD\u6570\u4F20\u5165\u8FDB\u6765\uFF0C\u672A\u6765\u4F1A\u589E\u52A0\u81EA\u52A8\u54CD\u5E94\u73AF\u5883\u8BC6\u522B\u5E76\u6267\u884C</p><h2 id="\u521D\u59CB\u5316" tabindex="-1">\u521D\u59CB\u5316 <a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><div class="language-typescript line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defRefPackager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wormery/wtsc&#39;</span>
<span class="token function">defRefPackager</span><span class="token punctuation">(</span>ref<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u751F\u6210\u54CD\u5E94\u5316\u7684 api \u8BF7\u5728\u4EE3\u7801\u6700\u524D\u6267\u884C\uFF0C\u8BF7\u5728\u521B\u5EFA wtsc \u524D\u6267\u884C\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u4E00\u4E9B bug</p></div><p>\u8FD9\u6837\u7684\u4EE3\u7801\u60A8\u53EA\u9700\u8981\u6267\u884C\u4E00\u6B21\u5C31\u53EF\u4EE5\u4E86</p><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u7528 vue3 \u7684\u8BA1\u7B97\u5C5E\u6027\u505A\u7B80\u8981\u6D4B\u8BD5</p><div class="language-typescript line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defRefPackager<span class="token punctuation">,</span> defTypeWTSC <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wormery/wtsc&#39;</span>

<span class="token function">defRefPackager</span><span class="token punctuation">(</span>ref<span class="token punctuation">)</span>

<span class="token keyword">const</span> wtsc <span class="token operator">=</span> <span class="token function">defWTSC</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> key <span class="token operator">=</span> wtsc<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;\u6D4B\u8BD51&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027</span>
<span class="token keyword">const</span> comV <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> wtsc<span class="token punctuation">.</span><span class="token function">inject</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//\u5F97\u5230\u8BA1\u7B97\u5C5E\u6027\u7684\u503C</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>comV<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u6D4B\u8BD51</span>

<span class="token comment">//\u6211\u4EEC\u7ED9provide\u4E00\u4E2A\u65B0\u503C</span>
wtsc<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;\u6D4B\u8BD52&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>comV<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u6D4B\u8BD52</span>
<span class="token comment">//\u4EE3\u8868\u54CD\u5E94\u88AB\u76D1\u542C,comV\u7684\u503C\u56E0\u4E3A\u6211\u4EECset\u4E86\u4E00\u4E2Av2\u800C\u6539\u53D8</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u7981\u6B62\u54CD\u5E94" tabindex="-1">\u7981\u6B62\u54CD\u5E94 <a class="header-anchor" href="#\u7981\u6B62\u54CD\u5E94" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u5B9A\u4E49 key \u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u7981\u6B62\u54CD\u5E94\u53EA\u9700\u8981\u4F20\u5165\u4E00\u4E2A false \u5C31\u53EF\u4EE5\u4E86</p><div class="language-typescript line-numbers-mode"><pre><code><span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">defInjKey</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,12),c=[t];function o(l,r,i,u,k,d){return a(),s("div",null,c)}var f=n(e,[["render",o]]);export{b as __pageData,f as default};