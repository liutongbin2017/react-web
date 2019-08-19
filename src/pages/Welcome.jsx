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
            <Card title="前端知识汇总" extra={<span>2019-1-1</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>

              </Card.Grid>
            </Card>
            <Card title="Default size card" extra={<span>2019-1-1</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
            <Card title="Default size card" extra={<span>2019-1-1</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
            <Card title="Default size card" extra={<span>2019-1-1</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
            <Card title="Default size card" extra={<span>2019-1-1</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
            <Card title="Default size card" extra={<span>2019-1-1</span>} style={cartStyle}>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
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
