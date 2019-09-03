import React, { PureComponent } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {
  Card,
  Col,
  Row,
  Tag,
} from 'antd';
import styles from '../welcome.less';
import flex_direction from '../../assets/flex-direction.png';
import flex_wrap from '../../assets/flex-wrap.png';
import justify_content1 from '../../assets/justify-content1.png';
import justify_content2 from '../../assets/justify_content2.png';
import align_items1 from '../../assets/align-items1.png';
import align_items2 from '../../assets/align-items2.png';
import align_content1 from '../../assets/align-content1.png';
import align_content2 from '../../assets/align-content2.png';

export default class Flex extends PureComponent {


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
            <Card title="Flex 容器的属性" style={cartStyle}>
              <div>
                <p>容器上包含六个属性：</p>
                <p>flex-direction</p>
                <p>flex-wrap</p>
                <p>flex-flow</p>
                <p>justify-content</p>
                <p>align-items</p>
                <p>align-content</p>
              </div>
              <div>
                <p>flex-direction：决定主轴的方向</p>
                <img src={flex_direction} style={{ width: '100%' }}/>
              </div>
              <div>
                <p>flex-wrap：如果一条轴线排不下，如何换行</p>
                <img src={flex_wrap} style={{ width: '100%' }}/>
              </div>
              <div>
                <p>flex-flow：是flex-direction属性和flex-wrap属性的简写，默认值为row nowrap</p>
              </div>
              <div>
                <p>justify-content：定义了项目在主轴上的对齐方式</p>
                <img src={justify_content1} style={{ width: '100%' }}/>
                <img src={justify_content2} style={{ width: '100%' }}/>
              </div>
              <div>
                <p>align-items：定义项目在交叉轴上如何对齐</p>
                <img src={align_items1} style={{ width: '100%' }}/>
                <img src={align_items2} style={{ width: '100%' }}/>
              </div>
              <div>
                <p>align-content：定义了多根轴线的对齐方式，如果项目只有一根轴线，该属性不起作用</p>
                <img src={align_content1} style={{ width: '100%' }}/>
                <img src={align_content2} style={{ width: '100%' }}/>
              </div>
            </Card>
          </Col>
        </Row>
      </PageHeaderWrapper>
    )
  }
}
