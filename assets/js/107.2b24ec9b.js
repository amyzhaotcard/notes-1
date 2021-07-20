(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{485:function(_,v,t){"use strict";t.r(v);var l=t(26),a=Object(l.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"http-常见状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-常见状态码"}},[_._v("#")]),_._v(" http 常见状态码")]),_._v(" "),t("h2",{attrs:{id:"_1xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1xx"}},[_._v("#")]),_._v(" 1xx")]),_._v(" "),t("p",[_._v("代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束")]),_._v(" "),t("p",[_._v("常见的有：")]),_._v(" "),t("ul",[t("li",[_._v("100（客户端继续发送请求，这是临时响应）：这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求完成后向客户端发送一个最终响应")]),_._v(" "),t("li",[_._v("101：服务器根据客户端的请求切换协议，主要用于 websocket 或 http2 升级")])]),_._v(" "),t("h2",{attrs:{id:"_2xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[_._v("#")]),_._v(" 2xx")]),_._v(" "),t("p",[_._v("代表请求已成功被服务器接收、理解、并接受")]),_._v(" "),t("p",[_._v("常见的有：")]),_._v(" "),t("ul",[t("li",[_._v("200（成功）：请求已成功，请求所希望的响应头或数据体将随此响应返回")]),_._v(" "),t("li",[_._v("201（已创建）：请求成功并且服务器创建了新的资源")]),_._v(" "),t("li",[_._v("202（已创建）：服务器已经接收请求，但尚未处理")]),_._v(" "),t("li",[_._v("203（非授权信息）：服务器已成功处理请求，但返回的信息可能来自另一来源")]),_._v(" "),t("li",[_._v("204（无内容）：服务器成功处理请求，但没有返回任何内容")]),_._v(" "),t("li",[_._v("205（重置内容）：服务器成功处理请求，但没有返回任何内容")]),_._v(" "),t("li",[_._v("206（部分内容）：服务器成功处理了部分请求")])]),_._v(" "),t("h2",{attrs:{id:"_3xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[_._v("#")]),_._v(" 3xx")]),_._v(" "),t("p",[_._v("表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向")]),_._v(" "),t("p",[_._v("常见的有：")]),_._v(" "),t("ul",[t("li",[_._v("300（多种选择）：针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择")]),_._v(" "),t("li",[_._v("301（永久移动）：请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置")]),_._v(" "),t("li",[_._v("302（临时移动）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求")]),_._v(" "),t("li",[_._v("303（查看其他位置）：请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码")]),_._v(" "),t("li",[_._v("304 (未修改) ：自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容")]),_._v(" "),t("li",[_._v("305 （使用代理）： 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理")]),_._v(" "),t("li",[_._v("307 （临时重定向）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求")])]),_._v(" "),t("h2",{attrs:{id:"_4xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[_._v("#")]),_._v(" 4xx")]),_._v(" "),t("p",[_._v("代表了客户端看起来可能发生了错误，妨碍了服务器的处理")]),_._v(" "),t("p",[_._v("常见的有：")]),_._v(" "),t("ul",[t("li",[_._v("400（错误请求）： 服务器不理解请求的语法")]),_._v(" "),t("li",[_._v("401（未授权）： 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。")]),_._v(" "),t("li",[_._v("403（禁止）： 服务器拒绝请求")]),_._v(" "),t("li",[_._v("404（未找到）： 服务器找不到请求的网页")]),_._v(" "),t("li",[_._v("405（方法禁用）： 禁用请求中指定的方法")]),_._v(" "),t("li",[_._v("406（不接受）： 无法使用请求的内容特性响应请求的网页")]),_._v(" "),t("li",[_._v("407（需要代理授权）： 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理")]),_._v(" "),t("li",[_._v("408（请求超时）： 服务器等候请求时发生超时")])]),_._v(" "),t("h2",{attrs:{id:"_5xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[_._v("#")]),_._v(" 5xx")]),_._v(" "),t("p",[_._v("表示服务器无法完成明显有效的请求。这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生")]),_._v(" "),t("p",[_._v("常见的有：")]),_._v(" "),t("ul",[t("li",[_._v("500（服务器内部错误）：服务器遇到错误，无法完成请求")]),_._v(" "),t("li",[_._v("501（尚未实施）：服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码")]),_._v(" "),t("li",[_._v("502（错误网关）： 服务器作为网关或代理，从上游服务器收到无效响应")]),_._v(" "),t("li",[_._v("503（服务不可用）： 服务器目前无法使用（由于超载或停机维护）")]),_._v(" "),t("li",[_._v("504（网关超时）： 服务器作为网关或代理，但是没有及时从上游服务器收到请求")]),_._v(" "),t("li",[_._v("505（HTTP 版本不受支持）： 服务器不支持请求中所用的 HTTP 协议版本")])])])}),[],!1,null,null,null);v.default=a.exports}}]);