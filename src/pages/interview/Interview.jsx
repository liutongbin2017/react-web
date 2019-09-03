import React,{ PureComponent } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {
  Card,
  Col,
  Row,
  Tag,
  Pagination,
} from 'antd';
import Link from 'umi/link';
import styles from '../welcome.less';
import lunxun from '../../assets/lunxun.png'
import copy from '../../assets/copy.png'
import clearfloat from '../../assets/clearfloat.png'
export default class Interview extends PureComponent {

  state = {
    current: 1
  }

  onChange = page => {
    this.setState({
      current: page
    })
    document.documentElement.scrollTop = 0
  }

  render() {

    const gridStyle = {
      width: '100%',
      fontStyle: 'italic',
    };
    const cartStyle = {
      width: '800px',
      margin: '0 auto',
      marginBottom: '40px'
    }
    const tagStyle = {
      cursor: 'pointer'
    }
    const titleStyle = {
      color: '#000',
      fontSize: '16px'
    }

    return (
      <PageHeaderWrapper>
        <Row gutter={16}>
          {
            this.state.current === 1 &&
            <Col span={17}>
              <Card title="es6的promises" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>看似同步的代码，解决异步问题，跳出回调地狱，一个promise是一个被执行的对象，当他执行完成后，其状态会变成resolved或者rejected</div>
                  <div>es6处理异步的请求：promises和async-await</div>
                </Card.Grid>
              </Card>
              <Card title="es6的symbol" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <a target="_blank" href="https://www.jianshu.com/p/f40a77bbd74e">symbol是es6定义的一种新的数据类型，他的值是唯一的不可变的</a>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="闭包" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <a target="_blank" href="https://baijiahao.baidu.com/s?id=1622712837313298881&wfr=spider&for=pc">
                      闭包就是能够读取其他函数内部变量的函数。例如在javaScript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成"定义在一个函数内部的函数"。
                      在本质上，闭包是将函数内部和函数外部链接起来的桥梁。
                    </a>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="http与https区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、https数据传输期间对信息进行加密</p>
                    <p>2、使用https可以提高seo，提高搜索排名</p>
                    <p>3、https是使用TLS/SSL加密的http协议</p>
                    <p>4、http端口是80，https是433；https协议需要到ca申请证书，一般免费的证书很少，需要交费</p>
                    <p>5、http协议是Hyper Text Transfer Protocal(超文本传输协议)的缩写，是用于从万维网服务器传输超文本到本地浏览器的传送协议。</p>
                    <p>6、http是一个基于TCP/IP通信协议来传递数据(HTML文件，图片文件，查询结果等)</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="git的rebase的使用" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <a target="_blank" href="https://www.liaoxuefeng.com/wiki/896043488029600/1216289527823648">把分叉的提交历史“整理”成一条直线，看上去更直观。
                      缺点是本地的分叉提交已经被修改过了。主要是用来解决很多个本地分支</a>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react与vue框架的区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>react优点：虚拟DOM，丰富的js库</p>
                    <p>react缺点：react只是一个库，并不是完整的框架，需要配合react-router及redux或者dva</p>
                    <p>vue优点：vue易于上手，占用空间小</p>
                    <p>vue缺点：框架市场份额小</p>
                    <p>正式比较：react使用jsx，而vue使用的是html；react提供了一种Flux/Redux架构的创新解决方案，单项数据流替代了MVC框架；vue使用的是vuex的架构，架构不一样。</p>
                    <p>react需要安装Create React App脚手架工具，vue是vue-cli</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="跨越问题及解决方案" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>浏览器从一个域名的网页去请求另一个域名的资源，域名、端口、协议任一不同，都属于跨域</p>
                    <p>前端解决跨域问题一般用的方法是：1、jsonp，该方法只支持GET请求，不支持POST；2、修改头部的header</p>
                    <p>后台兼容</p>
                    <p>documents.domain主要解决的是windows之间的交互操作</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react组件之间的传值" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、父子传值：props</p>
                    <p>2、子父传值：回调函数</p>
                    <p>3、兄弟传值：标签内定义传值</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="TCP三次握手" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、建立链接：客户端发送请求报纹段，等待服务器确认(主机A发送位码为syn=1，seq number=1234567的数据包到服务器，由主机B接收)</p>
                    <p>2、服务器端收到报纹，进行确认，将信息放到报纹段中发送给客户端(主机B向A发送ack number = (主机A的seq+1) syn = 1，ack=1随机产生的seq=7654321)</p>
                    <p>3、客户端接收到服务器的报纹段(主机A接收到后检查ack number是否正确)</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react如何构造组件" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>react通过class构造和function构造</p>
                    <p>用function构造的组件没有状态，用class构造的组件有状态</p>
                    <p>两种构造的本质区别是state属性</p>
                  </div>
                </Card.Grid>
              </Card>
            </Col>
          }
          {
            this.state.current === 2 &&
            <Col span={17}>
              <Card title="react提高seo" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <Link to={'./interview/seo'}>react支持Server Side Rendering，可以解决SPA应用的SEO问题，我虽未亲手处理类似问题，但是接触过这方面的文章</Link>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react框架dva" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>
                   dva是体验技术部开发的react应用框架，将三个工具库包装在一起(React-Router，Redux，Redux-saga)。dva是个函数，返回了一个app对象；dva的核心代码包括两部分(dva和dva-core)；
                    前者用高阶组件React-redux实现了view层，后者用redux-saga解决了model层
                  </p>
                  <div>
                    <p style={titleStyle}>核心概念(针对的主要是model层的操作)</p>
                    <p>
                      State：一个对象，保存整个应用状态；是存储数据的地方，收到action后，会更新数据。<br />
                      View：React组件构成的视图层；从model下的state取数据，渲染html，只要state有变化，view会自动更新。<br />
                      Action：一个对象，描述事件；routes下的dispatch<br />
                      connect方法：一个函数，绑定State到view<br />
                      dispatch：一个函数，发送Action到State，指的是发送请求那一套
                    </p>
                  </div>
                  <div>
                    <p style={titleStyle}>model对象的属性</p>
                    <p>
                      namespace：当前model的名称<br />
                      state：该model当前的状态，数据保存在这里，直接决定了视图层的输出<br />
                      reducers：Action的处理器，处理同步动作，用来算出最新的state<br />
                      effects：Action处理器，处理异步动作
                    </p>
                  </div>
                  <div>
                    <p style={titleStyle}>Generator函数</p>
                    <p>
                      effects：是一个Generator函数，内部使用yield关键字，标示每一步操作<br />
                      call：执行异步操作；<br />
                      put：发出一个Action，类似于dispatch
                    </p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react可控组件与不可控组件" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>可控组件可以通过点击事件来获取输入框的值，例如onChange、onClick事件</p>
                    <p>不可控组件只能通过ref来获取</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react、html如何渲染页面" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>
                      1、浏览器会将html解析成一个DOM树；<br />
                      2、将css解析成CSS规则树；<br />
                      3、根据DOM树和CSS树来构造render树；<br />
                      4、根据render树计算各个节点在屏幕中的位置；<br />
                      5、遍历render树绘制页面的元素；<br />
                    </p>

                  </div>
                </Card.Grid>
              </Card>
              <Card title="多次提到的http原理" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>
                      1、http是一种无状态的协议，即服务器不保留与客户交易时的任何状态，http是一种面向对象的协议，允许传送任意类型的数据对象，http是一种超文本传输协议，信息是明文传输，请求方法常用GET POST HEAD
                      <br />
                      2、http工作流程：第一步建立TCP/IP连接，客户端与服务器三次握手进行连接；第二步客户端向服务器发送http
                      请求；第三步客户端发送请求头信息，请求内容，最后会发送空白行表明发送成功；第四步服务器做出应答；第五步服务器向客户端发送应答头信息；第六步服务器发送请求头信息后，也会发送一行空白表示发送完成；第七步服务器关闭TCP连接
                    </p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react的redux、refs" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>
                      redux没有setter（修改器方法），要想更新state的数据，需要发起一个Action（就是一个普通的javaScript对象），接着reducer把action和state串联起来（reducer只是一个接收state和action并返回新的state的函数）
                    </p>
                    <div>
                      <p style={titleStyle}>	redux有三大原则：Action-Reducer-Store</p>
                      <p>
                        1、单一数据源：整个应用的state被储存在一棵object tree中，并且该tree只存在于唯一一个store中；<br />
                        2、state是只读的：唯一改变state的方法是触发action；<br />
                        3、使用纯函数来执行修改（reducer只是一些纯函数）；<br />
                        4、store就是把他们联系到一起的对象，store有以下职责：维持应用的state；提供getState（）方法获取state；提供dispatch（action）方法更新state；通过subscribe（listener）注册监听器；通过subscribe（listener）返回的函数注销监听器；<br />
                        5、Redux应用只有一个单一的store
                      </p>
                      <p>
                        flux：将一个应用分成四部分：View（视图层）-Action（动作）-Dispatcher（派发器）-store（数据层）
                      </p>
                    </div>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react、vue如何进行双向绑定" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>
                      1、vue是通过es5的getter和setter以及Object.defineProperty方法，通过重写setter函数，并在里面写上trigger事件的代码，实现数据在改变的时候能自动调用trigger方法，从而实现了触发事件 <br />
                      2、react通过增加点击事件以及事件监听的可控组件来进行绑定 Object.defineProperty来改变name属性的setter
                    </p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react虚拟DOM与real DOM的区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>
                      虚拟Dom：当Node节点的更新，虚拟dom会比较两棵DOM树的区别，保证最小的DOM操作，使得执行效率得到保证；计算两棵树的常规算法是o（n^3）级别，所以需要优化深度遍历的算法。react diff算法的时间复杂度为o（n）
                    </p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react手机端项目" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>
                      react native
                    </p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="npm、yarn区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>
                      1、npm install的时候是按顺序依次下载包，yarn是并行下载 <br />
                      2、yarn的命令比npm简单<br />
                      3、npm 5.0之后npm做了改动增加了package-lock.json<br />
                      4、离线模式，当已经安装了一个软件包，用yarn再次安装时直接从缓存中获取，速度更快，npm需要在线下载
                    </p>
                  </div>
                </Card.Grid>
              </Card>
            </Col>
          }
          {
            this.state.current === 3 &&
            <Col span={17}>
              <Card title="string字符串'abc'如何转换成'cba'" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>'message = 'RUNOOB''</p>
                    <p>'message.split()' ------>'["R","U","N","O","O","B"]'</p>
                    <p>'message.split('').reverse()' ------>'["B","O","O","N","U","R"]'</p>
                    <p>'message.split('').reverse().join('')' ------>BOONUR</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="npm和yarn的区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、npm install的时候是按顺序依次下载包，yarn是并行下载</p>
                    <p>2、yarn的命令比npm简单</p>
                    <p>3、npm 5.0之后做了改动，增加了package-lock.json</p>
                    <p>4、离线模式，当已经安装了一个软件包，用yarn再次安装时直接从缓存中获取，速度更快，npm需要在线下载</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="less和sass的区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、less是基于javaScript，是在客户端处理的；sass是基于Ruby的，是在服务器处理的</p>
                    <p>2、less声明变量是@，sass声明变量是$</p>
                    <p>3、运算：less的运算符可带单位可不带单位，sass的运算符带单位的话会将单位也进行运算</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="git在同一分支开发的时候，如何查看修改" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、git status查看冲突文件</p>
                    <p>2、git add或者git rm将解决后的文件暂存</p>
                    <p>3、所有冲突解决后，git commit提交更改</p>
                    <p>4、git diff查看两者文件的区别</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="css伪类元素" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>link-visited-hover-active:顺序不能变</p>
                    <p>:first-child伪类，选择器匹配属于任意元素的第一个子元素的元素</p>
                    <p>:before 在每个元素之前插入内容</p>
                    <p>:after 在每个元素之后插入内容</p>
                    <p>:lang 为元素的lang属性选择一个开始值</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="js的一些数据的api" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>Manth.round(4.7) ------>5：可以四舍五入</p>
                    <p>Manth.random() ------> ：可以生成0-1之间的随机数</p>
                    <p>toFixed() ------> ：将Number四舍五入为指定小数位数的数字</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="线程与进程的区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、一个程序至少有一个进程，一个进程至少有一个线程</p>
                    <p>2、线程的划分尺度小于进程，使得多线程程序的并发性高</p>
                    <p>3、进程在执行过程总拥有独立的内存单元，而多个线程共享内存，从而极大的提高了程序的运行效率</p>
                    <p>4、线程在执行过程中与进程还是有区别的，每个单独的线程有一个程序运行的入口，顺序执行序列的出口，但是线程不能独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="减少页面加载时间的方法" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、将图片进行压缩</p>
                    <p>2、优化css代码，压缩合并css</p>
                    <p>3、网址后加斜杠(www.baidu.com/)</p>
                    <p>4、减少http请求数量</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="json与jsonp" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>json是一种轻量级的数据交换格式，是基于javaScript的一个子集，易于读写，占用宽带小</p>
                    <p>jsonp主要是用来解决跨域问题，并且只支持get请求</p>
                    <p>跨域问题的其他解决方式(document.domain+iframe、window.name、window.postMessage、服务器上设置代理页面)</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="get与post区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>GET：一般用于信息获取，使用URL传递参数，对所发送信息的数量有限制，一般在2000个字符</p>
                    <p>POST：一般用于修改服务器上的资源，对所发送的信息没限制</p>
                    <p>get是通过地址栏传值，post是通过表单提交传值</p>
                  </div>
                </Card.Grid>
              </Card>
            </Col>
          }
          {
            this.state.current === 4 &&
            <Col span={17}>
              <Card title="页面加载过程" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、当发送url请求时，浏览器会开启一个线程来处理这个请求，同时在远程DNS服务器上启动一个DNS查询，这能使浏览器获得请求对应的IP地址</p>
                    <p>2、浏览器与远程服务器通过TCP三次握手建立TCP/IP连接</p>
                    <p>3、一旦TCP/IP连接建立，浏览器会通过该连接向远程服务器发送http请求，远程服务器找到资源并使用http响应返回该资源</p>
                    <p>4、客户端开始下载资源，浏览器解析HTML生成DOM Tree，加载css</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="css sprites" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>css sprites是把网页中一些背景图整合到一张图片文件中，再利用css的"background-img"，"background-position"的组合进行背景定位，这样可以减少很多图片请求的开销</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="数组的一些常用api" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>toString('数组变成字符串')；join('自定义分隔符')；concat('数组拼接')；<br />
                      slice(start，end)('数组截取')；splice(start,n)(删除从start位置开始的n个元素)；reverse('倒叙')；<br />
                      sort()('升序排序')；push('插入到最后')；unshift('插入到数组头部')
                    </p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="call、apply、bind区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、call与apply是对函数的直接调用，bind方法返回的仍然是函数，后面要用括号来进行调用：call( xh ),apply( xh ),bind( xh )()</p>
                    <p>2、call与apply区别：apply的第二个参数必须是数组：xw.say.call（xh，“实验小学”，“六年级”）；xw.say.apply（xh，[“实验小学”，“六年级”]）；
                      xw.say.bind(xh,"实验小学","六年级")()或者 xw.say.bind(xh)("实验小学","六年级");
                    </p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="forEach与map的区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>forEach遍历的数组没有返回值，map有返回值</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="html5的一些新特性" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>增加了关于图像、位置、存储、多任务等功能</p>
                    <p>拖拽释放：Drag、drop</p>
                    <p>新的标签：header、nav、footer、aside、section</p>
                    <p>音频、视频API：audio、video</p>
                    <p>画布：canvas</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="react的生命周" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>挂载：componentDidMount，卸载：componentWillUnMount</p>
                    <p>判断组件是否持续更新：shouldComponentUpdate</p>
                    <p>props变化监听：componentWillReceiveProps</p>
                    <p>组件更新后调用，可作为更新后调用DOM的地方：componentDidUpdate(prevProps，prevState)</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="webpack与gulp" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>gulp：是通过task对整个开发过程进行构建</p>
                    <p>webpack：将许多松散的模块按照依赖和规则打包成符合生产部署的的前端资源</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="箭头函数与普通函数的区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>箭头函数不绑定this，会捕获上下文的this值作为自己的this；普通函数的this指向调用它的那个对象</p>
                    <p>箭头函数没有原型链( propotype ),普通函数有原型链</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="ES6对象的解构赋值" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>数组的解构赋值：let [x,y] = [1,2]</p>
                  </div>
                </Card.Grid>
              </Card>
            </Col>
          }
          {
            this.state.current === 5 &&
            <Col span={17}>
              <Card title="let、var、const区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>var声明的变量会挂载在windows上</p>
                    <p>var声明变量存在变量提升，其他两个不存在</p>
                    <p>同一个作用域下let和const不能声明同名变量，var可以</p>
                    <p>const定义的对象里面的值可以修改</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="HOC高阶组件" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>高阶组件是参数为组件，返回值为新组件的函数</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="盒子模型" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>w3c盒子模型(标准盒子模型)：width指的是content的宽度</p>
                    <p>IE盒子模型(怪异盒子模型)：width指的是content + padding + border</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="js两种数据类型" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>基本数据类型：数字、字符串</p>
                    <p>引用数据类型：数组、对象</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="js的异步轮询机制" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <a target="_blank" href="https://www.cnblogs.com/heshan1992/p/6650593.html"><img src={lunxun} style={{ width:'100%' }}/></a>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="http状态码" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <Link to={'./interview/httpRequest'} className={styles.contentStyle}>http请求主要总结了五大类</Link>
                </Card.Grid>
              </Card>
              <Card title="块级元素的一些操作" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>如何将三个div放在同一行，让两边的div分别固定在左右两侧，中间的要自适应</p>
                  <p>1、左右两个div要左右浮动，设置左右宽度分别为100px</p>
                  <p>2、中间的div设置inline-block，margin设置上下为0，左右为100</p>
                </Card.Grid>
              </Card>
              <Card title="行内元素和块级元素有哪些" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>行内元素：a，label，img，input，select，span，b</p>
                  <p>块级元素、div，dd，dl，dt，h标签，ul，li，table系列，</p>
                  <p>
                    行内元素与块级元素的区别：块级元素会独占一行，其宽度自动填满其父元素宽度，块级元素可以设置width、height；
                    行内元素不会独占一行，相邻的行内元素会排列在同一行里，直到一行排不下去才会换行，设置width、height无效
                  </p>
                </Card.Grid>
              </Card>
              <Card title="select、radio如何用js进行选中" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>select需要用到prop属性，来进行选中</p>
                  <p>radio以及他的可以采用attr来进行赋值属性选中</p>
                </Card.Grid>
              </Card>
              <Card title="内存泄漏以及如何避免" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>常见的js泄漏 <br />
                    1、意外的全局变量 <br />
                    2、被遗忘的计时器或者回调 <br />
                    3、超出DOM引用<br />
                    4、闭包
                  </p>
                  <p>
                    <a target="_blank" href="https://blog.csdn.net/qappleh/article/details/80337630">查看详细注解》》</a>
                  </p>
                </Card.Grid>
              </Card>
            </Col>
          }
          {
            this.state.current === 6 &&
            <Col span={17}>
              <Card title="append与appendTo的区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>append：向指定的元素中追加内容，被追加的content参数可以是字符、html元素标记，也可以是字符串(append(content))</p>
                    <p>appendTo：$(content).appendTo(selector),content标示需要插入的内容，参数selector表示被选的元素，默认是在尾部</p>
                    <p>
                      <a target="_blank" href="https://blog.csdn.net/u014482758/article/details/40504205">查看详细注解》》</a>
                    </p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="js克隆对象和数组的常用方法介绍" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <img src={copy} style={{ width: '100%' }} />
                  </div>
                </Card.Grid>
              </Card>
              <Card title="js实现给html标签赋值" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>1、$('input').val('给input标签赋值')：val()用于input元素的内容存取</p>
                    <p>2、$('text').text('文本内容的存储')：text()用于html元素文本的存取</p>
                    <p>3、$('html').html()：html()不但可以用于html元素文本内容的存取，还可以用于html内容的存取</p>
                  </div>
                </Card.Grid>
              </Card>
              <Card title="css清除浮动" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <p>伪类:after和zoom</p>
                    <p>
                      <img src={clearfloat} style={{ width: '100%' }} />
                    </p>
                  </div>
                </Card.Grid>
              </Card>

            </Col>
          }

          <Col span={4}>
          </Col>

        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Pagination current={this.state.current} onChange={this.onChange} total={60}/>
        </Row>
      </PageHeaderWrapper>
    )
  }

}


