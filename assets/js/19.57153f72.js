(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{499:function(_,v,e){"use strict";e.r(v);var t=e(4),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"id生成策略-snowflake"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#id生成策略-snowflake"}},[_._v("#")]),_._v(" ID生成策略----SnowFlake")]),_._v(" "),e("p",[_._v("该文章转载自"),e("a",{attrs:{href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"}},[_._v("普通程序员"),e("OutboundLink")],1)]),_._v(" "),e("h2",{attrs:{id:"一、遇到问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、遇到问题"}},[_._v("#")]),_._v(" 一、遇到问题")]),_._v(" "),e("p",[_._v("某个项目采用了"),e("code",[_._v("数据库（MySQL）自增ID")]),_._v("作为主要业务数据的主键。数据库自增ID使用简单，自动编号，速度快，而且是增量增长，按顺序存放，对于检索非常有利。")]),_._v(" "),e("p",[e("code",[_._v("单库环境")]),_._v("下，数据库自增ID问题不大。但在分布式环境或分库分表环境下，数据库自增ID逐渐暴露出一些问题。例如，"),e("code",[_._v("分库分表")]),_._v("的情况下保证ID唯一变得困难；订单号等业务数据如果用数据库自增ID，竞对很容易"),e("code",[_._v("算出大概的业务量")]),_._v("。")]),_._v(" "),e("h2",{attrs:{id:"二、常见的id生成策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、常见的id生成策略"}},[_._v("#")]),_._v(" 二、常见的ID生成策略")]),_._v(" "),e("p",[_._v("1、数据库自增ID（前面提到了）")]),_._v(" "),e("p",[_._v("2、UUID")]),_._v(" "),e("p",[_._v("算法的核心思想是结合机器的网卡、当地时间、一个随记数来生成UUID。")]),_._v(" "),e("p",[_._v("优点：本地生成，生成简单，性能好，没有高可用风险")]),_._v(" "),e("p",[_._v("缺点：长度过长，存储冗余，且无序不可读，查询效率低")]),_._v(" "),e("p",[_._v("3、Redis生成ID")]),_._v(" "),e("p",[_._v("Redis生成ID可以看做数据库自增ID的升级版。Redis的所有命令操作都是单线程的，本身提供像 incr 和 increby\n这样的自增原子命令，所以能保证生成的 ID 肯定是唯一有序的。")]),_._v(" "),e("p",[_._v("优点：不依赖于数据库，灵活方便，且性能优于数据库；数字ID天然排序，对分页或者需要排序的结果很有帮助。")]),_._v(" "),e("p",[_._v("缺点：如果系统中没有Redis，还需要引入新的组件，增加系统复杂度；需要编码和配置的工作量比较大。")]),_._v(" "),e("p",[_._v("考虑到单节点的性能瓶颈，可以"),e("code",[_._v("使用 Redis 集群")]),_._v("来获取更高的"),e("code",[_._v("吞吐量")]),_._v("。假如一个集群中有5台 Redis。可以初始化每台 Redis 的值分别是1,\n2, 3, 4, 5，然后步长都是 5。各个 Redis 生成的 ID 为")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/bwicjdKXbf3pvmzUgUSjUic4y5GNQMcGSia8s64OagiaWgDIxAIBD6xaS49BxuNTXH0T6FX4tUmsbcIKetJUNzfFPg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:""}})]),_._v(" "),e("p",[_._v("4、Twitter的snowflake算法。")]),_._v(" "),e("h2",{attrs:{id:"三、snowflake算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、snowflake算法"}},[_._v("#")]),_._v(" 三、snowflake算法")]),_._v(" "),e("p",[_._v("snowflake算法，采用64位二进制整数。二进制具体位数含义如下图。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/bwicjdKXbf3pvmzUgUSjUic4y5GNQMcGSiap062xIHHsPWuAdfp7x6icF6LnibvB9aIVhvib919YOEkcVg8Q2EA3v8gQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:""}}),e("br"),_._v(" "),e("code",[_._v("1位")]),_._v("，不用。二进制中最高位为1的都是负数，但是我们生成的id都使用正数，所以这个最高位固定是0")]),_._v(" "),e("p",[e("code",[_._v("41位")]),_._v("，用来记录时间戳（毫秒）。")]),_._v(" "),e("p",[_._v("如果只用来表示正整数（计算机中正数包含0），可以表示的数值范围是：0 至 241−1，减1是因为可表示的数值范围是从0开始算的，而不是1。")]),_._v(" "),e("p",[_._v("也就是说41位可以表示241−1个毫秒的值，转化成单位年则是(241−1)/(1000∗60∗60∗24∗365)=69年")]),_._v(" "),e("p",[e("code",[_._v("10位")]),_._v("，用来记录工作机器id。")]),_._v(" "),e("p",[_._v("可以部署在1024个节点，包括5位datacenterId和5位workerId")]),_._v(" "),e("p",[e("code",[_._v("12位")]),_._v("，序列号，用来记录同毫秒内产生的不同id。")]),_._v(" "),e("p",[_._v("12位（bit）可以表示的最大正整数是4095，即可以用0、1、2、3、….4095这4096个数字，来表示同一机器同一时间截（毫秒)内产生的4096个ID序号")]),_._v(" "),e("p",[_._v("大多数人都知道这个算法，但Twitter 利用 zookeeper\n还做了很多工程上的实现，感兴趣可以看"),e("a",{attrs:{href:"https://github.com/twitter/snowflake",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://github.com/twitter/snowflake"),e("OutboundLink")],1)]),_._v(" "),e("p",[_._v("截取git上该工程的主要文件目录，")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/bwicjdKXbf3pvmzUgUSjUic4y5GNQMcGSiaA0vvZmialYia2lmdMHKVHAkYOyCHxGdK1NHdMkBIGIfrfCicCFASQ7b5Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:""}}),e("br"),_._v("\ngit工程README.md文件中有这么一段话")]),_._v(" "),e("p",[e("code",[_._v("We have retired the initial release of Snowflake and working on open sourcing the next version based on Twitter-server, in a form that can run anywhere without requiring Twitter's own infrastructure services.")])]),_._v(" "),e("p",[e("code",[_._v("Twitter几年前")]),_._v("就停止了对这个项目的维护，新的版本也没见着放出来。好在现有版本的核心算法已经能够满足常规的需求。")]),_._v(" "),e("p",[_._v("当然，snowflake有众多"),e("code",[_._v("优点")]),_._v("的同时也是有"),e("code",[_._v("缺点")]),_._v("的。")]),_._v(" "),e("p",[e("code",[_._v("优点：")])]),_._v(" "),e("p",[_._v("毫秒数在高位，自增序列在低位，整个ID都是"),e("code",[_._v("趋势递增")]),_._v("的。")]),_._v(" "),e("p",[_._v("不依赖数据库等第三方系统，以服务的方式部署，稳定性更高，生成ID的性能也是非常高的。")]),_._v(" "),e("p",[_._v("可以根据自身业务特性"),e("code",[_._v("分配bit位")]),_._v("，非常灵活。")]),_._v(" "),e("p",[e("code",[_._v("缺点：")])]),_._v(" "),e("p",[_._v("强依赖机器时钟，如果机器上时钟回拨，会导致发号重复或者服务会处于不可用状态。")]),_._v(" "),e("p",[_._v("强依赖时钟在有些情况下"),e("code",[_._v("很致命")]),_._v("，我个人就遇到过"),e("code",[_._v("服务器刚重启")]),_._v("的短时间内时间没有同步，造成生成ID出问题的情况！")]),_._v(" "),e("h2",{attrs:{id:"四、一些改进策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、一些改进策略"}},[_._v("#")]),_._v(" 四、一些改进策略")]),_._v(" "),e("p",[_._v("1、美团Leaf比较完美的方案")]),_._v(" "),e("p",[e("code",[_._v("美团Leaf")]),_._v("比较好的解决了这些问题，参看《Leaf——来自美团点评的分布式ID生成系统》")]),_._v(" "),e("p",[_._v("美团Leaf的方案核心有两点")]),_._v(" "),e("p",[_._v("（1）依靠zookeeper实现workerId的自动化租用")]),_._v(" "),e("p",[_._v("（2）通过算法解决了时钟回拨问题")]),_._v(" "),e("p",[_._v("美团Leaf目前是开源软件，可以在"),e("a",{attrs:{href:"https://github.com/weizhenyi/leaf-snowflake",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://github.com/weizhenyi/leaf-snowflake"),e("OutboundLink")],1),_._v("下载")]),_._v(" "),e("p",[_._v("2、一个候选人不严谨但成本很低的实现")]),_._v(" "),e("p",[_._v("我在面试中，一个"),e("code",[_._v("候选人提出的方法")]),_._v("也比较有意思（尽管这个"),e("code",[_._v("方法不严谨")]),_._v("）。")]),_._v(" "),e("p",[_._v("在redis中设置一个整数变量workerNum，初始值为0，snowflake\nid生成客户端每次启动时读取redis中的变量，用workerNum%1024作为worker的值，然后把redis中的workerNum+1。")]),_._v(" "),e("p",[_._v("在idworker数量不多的情况下，这个方案一般不会出现workerId重复（因为随着业务的迭代，一般情况下idworker过一段时间都会因为业务部署而重启）。如果研发资源特别有限，又想使用snowflake可以考虑一下这个办法。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/bwicjdKXbf3pvmzUgUSjUic4y5GNQMcGSia74HfkPs0QtLbDY1Swd7Rn1ELpvuOXmzdMHdFztn1qV0TuDwbm03ITQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:""}})]),_._v(" "),e("p",[_._v("3、个人项目中hash分库的解决办法")]),_._v(" "),e("p",[_._v("实际使用中，有时候ID需要支持"),e("code",[_._v("分库分表")]),_._v("，snowflake的默认实现对这块支持得不够。"),e("code",[_._v("在业务量不大")]),_._v("的情况下，snowflake生成的"),e("code",[_._v("id序列号部分")]),_._v("大多都"),e("code",[_._v("是0")]),_._v("，转换为十进制会是偶数。用这个id通过"),e("code",[_._v("取模hash")]),_._v("分库，显然"),e("code",[_._v("不平均")]),_._v("。")]),_._v(" "),e("p",[_._v("万一有这样的需求怎么办呢？可以考虑"),e("code",[_._v("借助ID时间戳部分")]),_._v("实现均匀分布")]),_._v(" "),e("p",[_._v("（1）分库分表逻辑使用ID中时间戳部分做取模。这个方法需要把10进制ID转成2进制，然后移位，再进行计算。"),e("code",[_._v("比较麻烦")])]),_._v(" "),e("p",[_._v("（2）生成ID的时候把序列号部分尾数用时间戳对应的位置覆盖。截段代码，这段代码的取值能保证ID除以128的余数"),e("code",[_._v("均匀分布。")]),e("br"),_._v(" "),e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/bwicjdKXbf3pvmzUgUSjUic4y5GNQMcGSiauRrLxcY0CPWIVUe7ppPduQRjXKEhwcjVDGDgxI15Q0ThDGXAFk1j8g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:""}})])])}),[],!1,null,null,null);v.default=r.exports}}]);