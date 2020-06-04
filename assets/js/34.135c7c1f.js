(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{514:function(t,a,s){"use strict";s.r(a);var e=s(4),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"kafka在macos上的安装与启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka在macos上的安装与启动"}},[t._v("#")]),t._v(" kafka在macOS上的安装与启动")]),t._v(" "),s("ol",[s("li",[t._v("kafka安装包下载")])]),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:"https://www.apache.org/dyn/closer.cgi?path=/kafka/2.1.0/kafka_2.11-2.1.0.tgz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache的kafak官网"),s("OutboundLink")],1),t._v("下载安装包，以下4个包随便选一个下载。"),s("br"),t._v("\n![](https://img-blog.csdnimg.cn/20181126204137448.png?x-oss-\nprocess=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2x0MzI2MDMwNDM0,size_16,color_FFFFFF,t_70)")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("启动zookeeper的服务")])]),t._v(" "),s("p",[t._v("进入文件的解压目录，输入")]),t._v(" "),s("p",[t._v("​"),s("br"),t._v("\n​    bin/zookeeper-server-start.sh config/zookeeper.properties")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181126210417845.png",alt:""}})]),t._v(" "),s("ol",[s("li",[t._v("启动kafka的服务")])]),t._v(" "),s("p",[t._v("另起一个窗口，进入解压目录，输入")]),t._v(" "),s("p",[t._v("​"),s("br"),t._v("\n​    bin/kafka-server-start.sh config/server.properties")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181126210803371.png",alt:""}})]),t._v(" "),s("ol",[s("li",[t._v("配置topic")])]),t._v(" "),s("p",[t._v("另起窗口，进入解压目录，输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic my_test  \n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/201811262113407.png",alt:""}})]),t._v(" "),s("p",[t._v("我们也可以通过以下命令查看topic")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("bin/kafka-topics.sh --list --zookeeper localhost:2181  \n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181126211508179.png",alt:""}}),s("br"),t._v("\n到这里topic就创建完成了")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("创建生产者"),s("br"),t._v("\n输入以下命令可成功创建生产者")]),t._v(" "),s("p",[t._v("bin/kafka-console-producer.sh --broker-list localhost:9092 --topic my_test")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181126211809910.png",alt:""}})]),t._v(" "),s("ol",[s("li",[t._v("创建消费者")])]),t._v(" "),s("p",[t._v("另起窗口，输入以下命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic my_test --from-beginning  \n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181126212018225.png",alt:""}})]),t._v(" "),s("p",[t._v("这样消费者也创建成功了")]),t._v(" "),s("p",[t._v("我们可以在生产者的窗口中输入一个1，可以发现消费者中也会出现一个1"),s("br"),t._v("\n![](https://img-blog.csdnimg.cn/20181126212156949.png?x-oss-\nprocess=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2x0MzI2MDMwNDM0,size_16,color_FFFFFF,t_70)"),s("br"),t._v("\n到这里，单点的kafka环境部署就全部结束了！")])])}),[],!1,null,null,null);a.default=o.exports}}]);