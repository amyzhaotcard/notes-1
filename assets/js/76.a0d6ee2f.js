(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{455:function(t,e,r){"use strict";r.r(e);var a=r(26),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vue-router-怎么实现的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-怎么实现的"}},[t._v("#")]),t._v(" Vue router 怎么实现的")]),t._v(" "),r("h2",{attrs:{id:"原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("当用户执行 Vue.use(VueRouter) 的时候，实际上就是在执行 install 函数")]),t._v(" "),r("ul",[r("li",[t._v("为 vue 的原型上注入 router")]),t._v(" "),r("li",[t._v("mixin beforeCreate")]),t._v(" "),r("li",[t._v("将 router-link、router-view 组件注册为 vue 全局组件")])])]),t._v(" "),r("li",[r("p",[t._v("router 安装最重重要的一步是利用 vue.mixin 方法，把 beforeCreate 和 destroyed 钩子函数注入到每一个组件中。")])]),t._v(" "),r("li",[r("p",[t._v("然后 根 vue 实例同时会调用 beforeCreate 钩子，这里面执行")]),t._v(" "),r("ul",[r("li",[t._v("调用 Vue.util.defineReactive 方法，把 router 变成响应式对象。（主要的）")]),t._v(" "),r("li",[t._v("然后赋值 _router，这样原型上就可以访问 $router")]),t._v(" "),r("li",[t._v("然后执行 _router.init() 初始化 router")])])]),t._v(" "),r("li",[r("p",[t._v("当 hash 或 history 更新后都触发 $router 的更新机制，调用实例的 vm.render() 方法进行重新渲染")])])]),t._v(" "),r("h2",{attrs:{id:"hash-模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式"}},[t._v("#")]),t._v(" hash 模式")]),t._v(" "),r("ul",[r("li",[t._v("地址栏 URL 中有 # 符号")]),t._v(" "),r("li",[t._v("使用 window.location.hash 属性，以及 onhashchange 事件，可以实现监听浏览器地址 hash 值的变化，执行相应的 js 切换页面")]),t._v(" "),r("li",[r("strong",[t._v("仅 hash 符号之前的内容会被包含在请求中，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误")])])]),t._v(" "),r("h2",{attrs:{id:"history-模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#history-模式"}},[t._v("#")]),t._v(" history 模式")]),t._v(" "),r("ul",[r("li",[t._v("服务端 需要配置所有的路由都要重定向到根页面")]),t._v(" "),r("li",[t._v("nginx 配置到 根路径下面（qiankun 遇到过）")]),t._v(" "),r("li",[t._v("H5 的新 API，pushState 和 replaceState 通过这两个 API 改变 url 地址不会发送请求。同时还有 popstate 事件")]),t._v(" "),r("li",[r("strong",[t._v("前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.abc.com/book/id。如果后端缺少对 /book/id 的路由处理，将返回 404 错误")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);