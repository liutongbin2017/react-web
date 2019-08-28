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
import number from '../../assets/number.png'

export default class Language extends PureComponent {

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
              <Card title="parseInt用法" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>该函数可以解析一个字符串并且返回一个整数</p>
                  <p>parseInt(string,radix):string，要被解析的字符串；radix，要被解析的数字的基数</p>
                </Card.Grid>
              </Card>
              <Card title="&&，&，|，||" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>&&(短路与)：只要第一个条件满足，后面的条件就不再判断，可以直接执行下去不会报错</p>
                  <p>&：要对所有的条件都进行判断</p>
                  <p>|：要对所有的条件都进行判断</p>
                  <p>||(短路或)：只要满足第一个条件，后面的条件就不再判断</p>
                </Card.Grid>
              </Card>
              <Card title="数字" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <img src={number} style={{ width: '100%' }} />
                </Card.Grid>
              </Card>
            </Col>
          }
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Pagination current={this.state.current} onChange={this.onChange} total={50}/>
        </Row>
      </PageHeaderWrapper>
    )
  }
}
