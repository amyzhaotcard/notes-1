(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{392:function(t,a,e){"use strict";e.r(a);var v=e(26),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"object-与-map-的异同及使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-与-map-的异同及使用场景"}},[t._v("#")]),t._v(" Object 与 Map 的异同及使用场景")]),t._v(" "),e("h2",{attrs:{id:"map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" Map")]),t._v(" "),e("p",[t._v("Map 是一种数据结构,在 Map 中，每一对数据的格式都为键值对的形式。Map 中的键和值可以是任何数据类型，不仅限于字符串或整数。")]),t._v(" "),e("h2",{attrs:{id:"object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),e("p",[t._v("Object 遵循与 Map 类型相同键值对的存储结构。JavaScript 中的 Object 拥有内置原型(prototype)。需要注意的是，JavaScript 中几乎所有对象都是 Object 实例，包括 Map。")]),t._v(" "),e("h2",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("键：Object 遵循普通的字典规则，键必须是单一类型，并且只能是整数、字符串或是 Symbol 类型。但在 Map 中，key 可以为任意数据类型（Object, Array 等）。")])]),t._v(" "),e("li",[e("p",[t._v("元素顺序：Map 会保留所有元素的顺序，而 Object 并不会保证属性的顺序。")])]),t._v(" "),e("li",[e("p",[t._v("继承：Map 是 Object 的实例对象，而 Object 显然不可能是 Map 的实例对象。")])]),t._v(" "),e("li",[e("p",[t._v("构建方式：")]),t._v(" "),e("p",[t._v("object：")]),t._v(" "),e("ul",[e("li",[t._v('直接定义（var obj = {}; //空对象 var obj = {id: 1, name: "Test object"}; ）')]),t._v(" "),e("li",[t._v("构造方法（new Object）")]),t._v(" "),e("li",[t._v("Object.prototype.create")])]),t._v(" "),e("p",[t._v("map:")]),t._v(" "),e("ul",[e("li",[t._v("new Map()")])])])]),t._v(" "),e("h2",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),e("ul",[e("li",[t._v("如果知道所有的 key，它们都为字符串或整数（或是 Symbol 类型），你需要一个简单的结构去存储这些数据，Object 是一个非常好的选择。构建一个 Object 并通过知道的特定 key 获取元素的性能要优于 Map（字面量 vs 构造函数，直接获取 vs get()方法）。")]),t._v(" "),e("li",[t._v("如果需要在对象中保持自己独有的逻辑和属性，只能使用 Object")]),t._v(" "),e("li",[t._v("JSON 直接支持 Object，但尚未支持 Map。因此，在某些我们必须使用 JSON 的情况下，应将 Object 视为首选。")]),t._v(" "),e("li",[t._v("Map 是一个纯哈希结构，而 Object 不是（它拥有自己的内部逻辑）。使用 delete 对 Object 的属性进行删除操作存在很多性能问题。所以，针对于存在大量增删操作的场景，使用 Map 更合适。")]),t._v(" "),e("li",[t._v("不同于 Object，Map 会保留所有元素的顺序。Map 结构是在基于可迭代的基础上构建的，所以如果考虑到元素迭代或顺序，使用 Map 更好，它能够确保在所有浏览器中的迭代性能。")]),t._v(" "),e("li",[t._v("Map 在存储大量数据的场景下表现更好，尤其是在 key 为未知状态，并且所有 key 和所有 value 分别为相同类型的情况下。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);