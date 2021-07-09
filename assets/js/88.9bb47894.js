(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{463:function(t,v,_){"use strict";_.r(v);var a=_(26),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" tcp")]),t._v(" "),_("h2",{attrs:{id:"tcp-三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手"}},[t._v("#")]),t._v(" tcp 三次握手")]),t._v(" "),_("ul",[_("li",[t._v("第一次握手：（SYN）客户端发送网络包，服务端收到了。这样服务端就能得出结论：客户端的发送能力、服务端的接收能力是正常的。")]),t._v(" "),_("li",[t._v("第二次握手：（SYN+ACK）服务端发包，客户端收到了。这样客户端就能得出结论：服务端的接收、发送能力，客户端的接收、发送能力是正常的。")]),t._v(" "),_("li",[t._v("第三次握手：（ACK）客户端发包，服务端收到了。这样服务端就能得出结论：客户端的接收、发送能力，服务端的发送、接收能力是正常的。")])]),t._v(" "),_("p",[t._v("某同学的总结：")]),t._v(" "),_("ul",[_("li",[t._v("客户端：你能收我消息么？")]),t._v(" "),_("li",[t._v("服务端：可以的，你能接收到我的回复吗？")]),t._v(" "),_("li",[t._v("客户端：可以的，那我们开始聊正事把")])]),t._v(" "),_("h3",{attrs:{id:"tcp-为什么是-3-次握手不是-2-次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-为什么是-3-次握手不是-2-次"}},[t._v("#")]),t._v(" tcp 为什么是 3 次握手不是 2 次？")]),t._v(" "),_("ul",[_("li",[t._v("第一、二次握手后，服务端并不知道客户端的接收能力以及自己的发送能力是否正常。而在第三次握手时，服务端收到了客户端对第二次握手作的回应。从服务端的角度，我在第二次握手时的响应数据发送出去了，客户端接收到了。所以，我的发送能力是正常的。而客户端的接收能力也是正常的。")]),t._v(" "),_("li",[t._v("三次是最少的安全次数，两次不安全，四次浪费资源。")]),t._v(" "),_("li",[t._v("避免历史链接，确定客户端发的请求是这次通讯的人。")])]),t._v(" "),_("h3",{attrs:{id:"tcp-为什么是-3-次握手不是-4-次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-为什么是-3-次握手不是-4-次"}},[t._v("#")]),t._v(" tcp 为什么是 3 次握手不是 4 次？")]),t._v(" "),_("p",[t._v("4 次浪费资源")]),t._v(" "),_("h2",{attrs:{id:"tcp-四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-四次挥手"}},[t._v("#")]),t._v(" tcp 四次挥手")]),t._v(" "),_("ul",[_("li",[t._v("第一次挥手：（FIN）假设客户端想要关闭连接，客户端发送一个 FIN 标志位置为 1 的包，表示自己已经没有数据可以发送了，但是仍然可以接受数据。")]),t._v(" "),_("li",[t._v("第二次挥手：（ACK）服务器端确认客户端的 FIN 包，发送一个确认包，表明自己接受到了客户端关闭连接的请求，但还没有准备好关闭连接。")]),t._v(" "),_("li",[t._v("第三次挥手：（FIN、seq）服务器端准备好关闭连接时，向客户端发送结束连接请求，FIN 置为 1。")]),t._v(" "),_("li",[t._v("第四次挥手：（ACK）客户端接收到来自服务器端的关闭请求，发送一个确认包，并进入 TIME_WAIT 状态，等待可能出现的要求重传的 ACK 包。")])]),t._v(" "),_("p",[t._v("某同学的总结：")]),t._v(" "),_("ul",[_("li",[t._v("客户端：我要关闭通道了")]),t._v(" "),_("li",[t._v("服务端：好的你关闭，我这边也要准备关闭通道了")]),t._v(" "),_("li",[t._v("服务端：我要关闭通道了")]),t._v(" "),_("li",[t._v("客户端：好的，你关闭吧，我也把这个通道关闭了")])]),t._v(" "),_("h4",{attrs:{id:"为什么是-4-次挥手不能是-2-次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么是-4-次挥手不能是-2-次"}},[t._v("#")]),t._v(" 为什么是 4 次挥手不能是 2 次")]),t._v(" "),_("p",[t._v("无法确认服务端是否能到断开消息，还有服务端可能还有消息未发送完。")]),t._v(" "),_("h4",{attrs:{id:"为什么是-4-次挥手不能是-3-次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么是-4-次挥手不能是-3-次"}},[t._v("#")]),t._v(" 为什么是 4 次挥手不能是 3 次")]),t._v(" "),_("p",[t._v("三次情况服务端接收到断开消息，向客户端发送确认接受消息，客户端未给最后确认断开的回复。")]),t._v(" "),_("h2",{attrs:{id:"为什么建立连接是三次握手-而关闭连接却是四次挥手呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么建立连接是三次握手-而关闭连接却是四次挥手呢"}},[t._v("#")]),t._v(" 为什么建立连接是三次握手，而关闭连接却是四次挥手呢？")]),t._v(" "),_("p",[t._v("这是因为服务端在 LISTEN 状态下，收到建立连接请求的 SYN 报文后，把 ACK 和 SYN 放在一个报文里发送给客户端。而关闭连接时，当收到对方的 FIN 报文时，仅仅表示对方不再发送数据了但是还能接收数据，己方是否现在关闭发送数据通道，需要上层应用来决定，因此，己方 ACK 和 FIN 一般都会分开发送。")]),t._v(" "),_("h2",{attrs:{id:"一个-tcp-连接能发几个-http-请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一个-tcp-连接能发几个-http-请求"}},[t._v("#")]),t._v(" 一个 tcp 连接能发几个 http 请求？")]),t._v(" "),_("p",[t._v("HTTP/1.0 中 Connection 默认是 close 的，即每次请求都会重新建立和断开 TCP 连接，一个 tcp 就只能发送一个请求。")]),t._v(" "),_("p",[t._v("HTTP/1.1 中 Connection 默认是 keep-alive 的，即 tcp 连接可以复用，不用每次都要重新建立和断开 TCP 连接。维持连接的话，一个 TCP 就可以发送多个 HTTP 请求。")])])}),[],!1,null,null,null);v.default=s.exports}}]);