import React, { PureComponent } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {
  Card,
  Col,
  Row,
  Tag,
} from 'antd';
import styles from '../welcome.less';
import flux from '../../assets/flux.png';
import router from '../../assets/router.png';
import store from '../../assets/store.png';
import action from '../../assets/action.png';
import services from '../../assets/services.png';
export default class Seo extends PureComponent {


  render() {

    const gridStyle = {
      width: '100%',
      // textAlign: 'center',
    };
    const cartStyle = {
      width: '1000px',
      margin: '0 auto',
      marginBottom: '40px'
    }
    const tagStyle = {
      cursor: 'pointer'
    }


    return (
      <PageHeaderWrapper>
        <Row gutter={16}>
          <Col span={24}>
            <Card title="React Server Side Rendering 解决 SPA 应用的 SEO 问题" style={cartStyle}>
              <div>
                <p>Server Side Render 需要什么</p>
                <div>最先想到的肯定是，能够直接把一个 SPA 应用输出成 HTML 字符串吧！嗯，没错，就是它。</div>
                <p>React renderToString 和 renderToStaticMarkup 魔法棒</p>
                <div>
                  <div>React 提供了俩个神奇的方法，renderToString 和 renderToStaticMarkup，它们支持将 React Component 直接输出成 HTML 字符串，有了这俩个方法，我们就可以在服务器端执行 React，直接返回渲染之后的结果。 这样搜索爬虫就能爬出一个具有内容的 HTML 页面，而不是一个 SPA 应用的 Initialize HTML 页面。</div>
                  <div>
                    renderToString 方法，只应用在服务器端，把一个 React Component 渲染成 HTMl ,可以将它通过 response 发送到浏览器端，已达到 SEO 的目的。
                    renderToStaticMarkup 方法，和 renderToString 类似，但是它生成的 HTML Dom 不包含类似 data-react-id 这样的额外属性，可以用于生成简单的静态页面，节省大量字符串。
                  </div>
                </div>
                <p>熟悉 React 的都知道 Flux ，使用 Flux 可以更加方便 React 的数据交互，让 React 更专注于 View 的逻辑。（附图：React Flux 应用交互过程）</p>
                <img src={flux} style={{ width: '100%' }}/>
                <p>但是，一个 React Flux 应用即使可以在浏览器端正常的运行，直接在服务器端使用 renderToString 方法也只能渲染出 React Component 不包含数据的 HTML Dom，React 的 ComponentDidMount 不会在服务器端触发，你的 Flux Action 事件也无法触发， Store 中不会存在任何数据，并不能解决根本问题。</p>
                <div>
                  <p>我们还需要解决如下问题</p>
                  <div>
                    1 、初始数据异步请求的问题。所有需要在服务器端渲染的数据请求，都需要在返回 HTML 之前处理完毕。<br />
                    2、Action 和 Store 该如何管理？Action 事件发送是在数据之前还是之后？<br />
                    3、服务器端数据需要初始化，浏览器端的数据同样需要初始化。所以，浏览器需要保存一个数据副本。副本如何保存，浏览器端 Store 如何初始化？<br />
                    4、客户端端渲染的问题。
                  </div>
                </div>
                <p>
                  带着这些问题，也许会有一个轮子可以解决这个问题，不然就得自己造一个轮子了，好吧，看看有没有好用的轮先。在 GitHub 找找，找到 Redux 和 Fluxible 俩个好轮子，看了下文档，选择了 Fluxible，因为觉得它对于 Component Context 的管理比较好，而且是在 Flux 的基础上实现的。（最关键可以用酷酷的 Decorator Pattern）。
                </p>
                <div>
                  <p>怎么用 Fluxible 完成 Server Side Rendering 的魔法</p>
                  <div>
                    <p>1、前端路由的选择</p>
                    <p>作为 SPA 应用，都需要一个前端路由来处理不同的渲染。Fluxible 提供了自己的 router 组件，当然，使用 react-router 也可以。本文就是使用 react-router 来作为路由组件的。新建一个 Router.jsx ，作为博客的路由入口：</p>
                    <img src={router} style={{ width: '100%' }}/>
                  </div>
                  <div>
                    <p>2、Store 、Action、Service</p>
                    <p>
                      使用 Fluxible 之后，Store 最好只作为数据存储使用，Store 中不要加入数据请求之类的方法，数据请求方法可以使用 Fluxible Plugins 来管理，也可以自己封装 service 类来管理。Fluxble 提供了 createStore 方法和 BaseStore 基类来创建 Store，可以根据自己的需求选择，下面创建一个 Blog.store.js ：
                    </p>
                    <img src={store} style={{ width: '100%' }}/>
                    <div>
                      <p> BlogStore 中有几个比较重要的方法和属性：</p>
                      <div>
                        1、dehydrate 方法，用于将服务器端载入数据之后的 Store 中的 state ，序列化输出到浏览器端。<br />
                        2、rehydrate 方法，用于将序列化之后的 Store 中的 state，在浏览器端反序列化成 Store 对象。<br />
                        3、storeName 属性，可以直接使用 storeName 在 Component Context 中获取 Store 实例。<br />
                        4、handlers 属性，定义 Store 监听的 Action 事件。
                      </div>
                    </div>
                    <p>
                      有了 Store 之后，接下来创建一个 Action 。
                    </p>
                    <img src={action} style={{ width: '100%' }}/>
                    <p>Action 只负责分发事件，以及处理在不同业务逻辑下的事件分发。具体数据加载交给 Service 来处理。</p>
                    <img src={services}  style={{ width: '100%' }}/>
                  </div>
                  <p>有了 Store、Action、Service ，数据和事件的绑定也就有了，下面只需要把数据跟 React Component 交互处理好就可以了</p>
                </div>
              </div>

            </Card>
            <Card id="props">
              111
            </Card>
          </Col>
        </Row>
      </PageHeaderWrapper>
    )
  }
}
