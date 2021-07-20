(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{455:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-3-和-vue-2-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-和-vue-2-的区别"}},[t._v("#")]),t._v(" vue 3 和 vue 2 的区别")]),t._v(" "),s("h2",{attrs:{id:"vue3-的重构背景-目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3-的重构背景-目的"}},[t._v("#")]),t._v(" vue3 的重构背景（目的）")]),t._v(" "),s("ul",[s("li",[t._v("利用新的语言特性(es6)")]),t._v(" "),s("li",[t._v("解决架构问题")])]),t._v(" "),s("h2",{attrs:{id:"vue-3-与-vue-2-的对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-与-vue-2-的对比"}},[t._v("#")]),t._v(" vue 3 与 vue 2 的对比")]),t._v(" "),s("ul",[s("li",[t._v("速度更快")]),t._v(" "),s("li",[t._v("体积减少 : "),s("code",[t._v("tree-shaking")])]),t._v(" "),s("li",[t._v("更易维护")]),t._v(" "),s("li",[t._v("更接近原生 : 可以自定义渲染 API")]),t._v(" "),s("li",[t._v("更易使用 : 响应式 Api 暴露出来")])]),t._v(" "),s("h3",{attrs:{id:"速度更快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#速度更快"}},[t._v("#")]),t._v(" 速度更快")]),t._v(" "),s("p",[t._v("vue3 相比 vue2")]),t._v(" "),s("ul",[s("li",[t._v("重写了虚拟 Dom 实现")]),t._v(" "),s("li",[t._v("编译模板的优化")]),t._v(" "),s("li",[t._v("更高效的组件初始化")]),t._v(" "),s("li",[t._v("undate 性能提高 1.3~2 倍")]),t._v(" "),s("li",[t._v("SSR 速度提高了 2~3 倍")])]),t._v(" "),s("h3",{attrs:{id:"更易维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更易维护"}},[t._v("#")]),t._v(" 更易维护")]),t._v(" "),s("ul",[s("li",[t._v("compositon Api: 可与现有的 Options API 一起使用;灵活的逻辑组合与复用;Vue3 模块可以和其他框架搭配使用")]),t._v(" "),s("li",[s("strong",[t._v("更好的 Typescript 支持")]),t._v(": Vue.js 3.0 抛弃 Flow 后，"),s("strong",[t._v("使用 TypeScript 重构了整个项目")]),t._v("。 TypeScript 提供了更好的类型检查，能支持复杂的类型推导；由于源码就使用 TypeScript 编写，也省去了单独维护 d.ts 文件的麻烦；就整个 TypeScript 的生态来看，TypeScript 团队也是越做越好，TypeScript 本身保持着一定频率的迭代和更新，支持的 feature 也越来越多。")]),t._v(" "),s("li",[t._v("编译器重写")])]),t._v(" "),s("h2",{attrs:{id:"vue3-新增特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3-新增特性"}},[t._v("#")]),t._v(" Vue3 新增特性")]),t._v(" "),s("ul",[s("li",[t._v("framents")]),t._v(" "),s("li",[t._v("Teleport")]),t._v(" "),s("li",[t._v("composition Api")]),t._v(" "),s("li",[t._v("createRenderer")])]),t._v(" "),s("h3",{attrs:{id:"framents-支持有多个根节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#framents-支持有多个根节点"}},[t._v("#")]),t._v(" framents： 支持有多个根节点")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Layout.vue --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-bind")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$attrs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"teleport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teleport"}},[t._v("#")]),t._v(" Teleport")]),t._v(" "),s("ul",[s("li",[t._v("能够将我们的模板移动到 DOM 中 Vue app 之外的其他位置")]),t._v(" "),s("li",[t._v("在 vue2 中，像 modals,toast 等这样的元素，如果我们嵌套在 Vue 的某个组件内部，那么处理嵌套组件的定位、z-index 和样式就会变得很困难")]),t._v(" "),s("li",[t._v("通过 Teleport，我们可以在组件的逻辑位置写模板代码，然后在 Vue 应用范围之外渲染它")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showToast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("打开 toast"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- to 属性就是目标位置 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("teleport")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#teleport-target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("visible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("toast-wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("toast-msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是一个 Toast 文案"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("teleport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"composition-api-将相同功能的变量进行一个集中式的管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composition-api-将相同功能的变量进行一个集中式的管理"}},[t._v("#")]),t._v(" composition Api：将相同功能的变量进行一个集中式的管理")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/vue/vue3中CompositionApi了解么.html"}},[t._v("vue3 中 Composition Api 了解么")])],1),t._v(" "),s("h3",{attrs:{id:"createrenderer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createrenderer"}},[t._v("#")]),t._v(" createRenderer")]),t._v(" "),s("p",[t._v("构建自定义渲染器，我们能够将 vue 的开发模型扩展到其他平台，比如说我们可以将其生成在 canvas 画布上")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://vue3js.cn/interview/vue/vue3_vue2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3 有了解过吗？能说说跟 vue2 的区别吗？"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);