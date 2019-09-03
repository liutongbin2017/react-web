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
import dataName from '../../assets/dataName.png'
import dayTime from '../../assets/dayTime.png'
import hour from '../../assets/hour.png'
import cookies from '../../assets/cookies.png'
import key from '../../assets/key.png'

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
              <Card title="整数检测" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>Number.isInteger(42) //true</p>
                  <p>Number.isInteger(42.00) //true</p>
                  <p>Number.isInteger(42.3) //false</p>
                </Card.Grid>
              </Card>
              <Card title="显示解析数字字符串" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>var a = "42"; var b = "42px";</p>
                  <p>Number(a):42;parseInt(a):42</p>
                  <p>Number(b):NaN;parseInt(b):42</p>
                  <p>Number：解析数字只能是数字，多余的东西会直接返回值NAN</p>
                  <p>parseInt：解析数字时允许出现非数字的字符</p>
                </Card.Grid>
              </Card>
              <Card title="rem与em区别" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <p>rem只受到浏览器字体的大小的影响</p>
                  <p>em受到当下字体的大小的影响，当标签无字体大小的时候，em才继承浏览器的字体大小</p>
                </Card.Grid>
              </Card>
              <Card title="字体下面加上水印的写法(针对h5)" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <img src={dataName} style={{width: '100%'}} />
                  </div>
                </Card.Grid>
              </Card>
              <Card title="时间的处理" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <img src={dayTime} style={{ width: '100%' }} />
                  </div>
                  <div>
                    <img src={hour} style={{ width: '100%' }} />
                  </div>
                </Card.Grid>
              </Card>
              <Card title="从cookies获取token值" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <img src={cookies} style={{ width: '100%' }} />
                  </div>
                </Card.Grid>
              </Card>
              <Card title="电脑公钥的获取" style={cartStyle}>
                <Card.Grid style={gridStyle} className={styles.interviewStyle}>
                  <div>
                    <img src={key} style={{ width: '100%' }} />
                  </div>
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
