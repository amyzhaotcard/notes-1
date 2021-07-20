(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{479:function(e,i,l){"use strict";l.r(i);var t=l(26),n=Object(t.a)({},(function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"如何借助-webpack-来优化前端性能"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#如何借助-webpack-来优化前端性能"}},[e._v("#")]),e._v(" 如何借助 webpack 来优化前端性能")]),e._v(" "),l("p",[l("strong",[e._v("关于 webpack 对前端性能的优化，可以通过文件体积大小入手，其次还可通过分包的形式、减少 http 请求次数等方式，实现对前端性能的优化")])]),e._v(" "),l("ul",[l("li",[e._v("JS 代码压缩: "),l("code",[e._v("TerserPlugin")])]),e._v(" "),l("li",[e._v("CSS 代码压缩: "),l("code",[e._v("css-minimizer-webpack-plugin")])]),e._v(" "),l("li",[e._v("Html 文件代码压缩: 使用 HtmlWebpackPlugin 插件来生成 HTML 的模板时候，通过配置属性 minify 进行 html 优化,设置了 minify，实际会使用另一个插件 "),l("code",[e._v("html-minifier-terser")])]),e._v(" "),l("li",[e._v("文件大小压缩: "),l("code",[e._v("compression-webpack-plugin")])]),e._v(" "),l("li",[e._v("图片压缩")]),e._v(" "),l("li",[e._v("Tree Shaking:消除死代码，依赖于 ES Module 的静态语法分析（不执行任何的代码，可以明确知道模块的依赖关系）\n"),l("ul",[l("li",[e._v("usedExports：通过标记某些函数是否被使用，之后通过 Terser 来进行优化的")]),e._v(" "),l("li",[e._v("sideEffects：跳过整个模块/文件，直接查看该文件是否有副作用")])])]),e._v(" "),l("li",[e._v("代码分离: "),l("code",[e._v("splitChunksPlugin")]),e._v(",将代码分离到不同的 bundle 中，之后我们可以按需加载，或者并行加载这些文件.")]),e._v(" "),l("li",[e._v("内联 chunk: "),l("code",[e._v("InlineChunkHtmlPlugin")]),e._v(", 将一些 chunk 的模块内联到 html，如 runtime 的代码（对模块进行解析、加载、模块信息相关的代码），代码量并不大，但是必须加载的")])])])}),[],!1,null,null,null);i.default=n.exports}}]);