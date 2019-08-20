import React, { PureComponent } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {
  Card,
  Col,
  Row,
  Tag,
} from 'antd';
import Link from 'umi/link';
import styles from './welcome.less';
export default class Welcome extends PureComponent{

  render() {

    const gridStyle = {
      width: '100%',
      // textAlign: 'center',
    };
    const cartStyle = {
      width: '800px',
      margin: '0 auto',
      marginBottom: '40px'
    }
    const tagStyle = {
      cursor: 'pointer'
    }


    return (
      <PageHeaderWrapper>
        <p
          style={{
            textAlign: 'center',
            fontSize: '20px',
            fontStyle: 'oblique',
          }}
        >
          一个人只有一个心脏，却有两个心房。一个住着快乐，一个住着悲伤，不要笑得太大声，不然会吵醒旁边的悲伤。---佛说
        </p>
        <Row gutter={16}>
          <Col span={17}>
            <Card title="前端知识汇总" extra={<span className={styles.subtitle}>FrontEnd knowledge aggregation</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>
                <a target="_blank" className={styles.contentStyle} href="https://github.com/kamranahmedse/developer-roadmap">文章主要是总结了前端开发人员所需要掌握的一些知识点以及框架，详细列出了前端的知识体系，虽为基础但却感触颇深</a>
              </Card.Grid>
            </Card>
            <Card title="JS语言精粹" extra={<span className={styles.subtitle}> The essence of JS language</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>
                <Link target="_blank" to={'./essence'} className={styles.contentStyle}>JS即Javascript，Javascript是一种由Netscape的LiveScript发展而来的脚本语言，主要目的是为了解决服务器终端语言，比如Perl，遗留的速度问题。当时服务端需要对数据进行验证，由于网络速度相当缓慢,只有28.8kbps，验证步骤浪费的时间太多。于是Netscape的浏览器Navigator加入了Javascript，提供了数据验证的基本功能。</Link>
              </Card.Grid>
            </Card>
            <Card title="前端面试知识点" extra={<span className={styles.subtitle}>FrontEnd interview knowledge points</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>
                <Link to={'./interview'} className={styles.contentStyle}>文章旨在总结了一些面试的常见问题，包含了各路大神总结的题库信息</Link>
              </Card.Grid>
            </Card>
            <Card title="reactJs" extra={<span className={styles.subtitle}>React</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>
                <a target="_blank" className={styles.contentStyle} href="https://www.reactjscn.com/">
                  React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。
                </a>
              </Card.Grid>
            </Card>
            <Card title="vueJs" extra={<span className={styles.subtitle}>Vue</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>
                <a target="_blank" className={styles.contentStyle} href="https://cn.vuejs.org/">
                  Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
                </a>
              </Card.Grid>
            </Card>
            <Card title="jQuery" extra={<span className={styles.subtitle}>JQuery</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>
                <a target="_blank" className={styles.contentStyle} href="http://jquery.cuishifeng.cn/">
                  jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。
                </a>
              </Card.Grid>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="目录" bordered={false} style={{ width: 300 }}>
              <Card.Grid style={gridStyle}>
                <Link to={'./essence'} style={{ display: 'block',fontSize:'20px' }}>js语言精粹</Link>
                <Link to={'./interview'} style={{ display: 'block',fontSize:'20px' }}>前端面试题</Link>
                <Link to={'./about'} style={{ display: 'block',fontSize:'20px' }}>关于我</Link>
              </Card.Grid>
            </Card>
            <Card title="tags" bordered={false} style={{ width: 300 ,marginTop: '22px'}}>
              <Card.Grid style={gridStyle}>
                <Tag color="magenta" className={styles.tags}>
                  <a href='https://darknights.me/tags/#HTML' style={{ color: '#eb2f96' }}>html</a>
                </Tag>
                <Tag color="red" className={styles.tags}>
                  <a href='https://darknights.me/tags/#%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA' style={{ color: '#f5222d' }}>博客搭建</a>
                </Tag>
                <Tag color="volcano" className={styles.tags}>volcano</Tag>
                <Tag color="orange" className={styles.tags}>orange</Tag>
                <Tag color="gold" className={styles.tags}>gold</Tag>
                <Tag color="lime" className={styles.tags}>lime</Tag>
                <Tag color="green" className={styles.tags}>green</Tag>
                <Tag color="cyan" className={styles.tags}>cyan</Tag>
                <Tag color="blue" className={styles.tags}>blue</Tag>
                <Tag color="geekblue" className={styles.tags}>geekblue</Tag>
                <Tag color="purple" className={styles.tags}>purple</Tag>
              </Card.Grid>
            </Card>
          </Col>
        </Row>

      </PageHeaderWrapper>
    )
  }

}
