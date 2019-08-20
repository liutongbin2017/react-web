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

export default class Interview extends PureComponent {

  state = {
    current: 1
  }

  onChange = page => {
    console.log(111)
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
                      闭包就是能够读取其他函数内部变量的函数。例如在javaScript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成"定义在一个函数内部的函数"。在本质上，闭包是将函数内部和函数外部链接起来的桥梁。
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
                    <a target="_blank" href="https://www.liaoxuefeng.com/wiki/896043488029600/1216289527823648">把分叉的提交历史“整理”成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。主要是用来解决很冰多个本地分支</a>
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

          <Col span={4}>
          </Col>

        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Pagination current={this.state.current} onChange={this.onChange} total={50}/>
        </Row>
      </PageHeaderWrapper>
    )
  }

}


