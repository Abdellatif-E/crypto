import React from 'react';
import { Collapse, Row, Col, Typography } from 'antd';
import { poloNameDataHandler , poloVolDataHandler , binaVolDataHandler , binaNameDataHandler, binarankDataHandler, poloRankDataHandler, poloYearDataHandler, binaYearDataHandler } from '../services/coingeckoAPI';
import { useGetExchangesQuery } from '../services/cryptoApi';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { isFetching } = useGetExchangesQuery(2);

  if (isFetching) return null;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume BTC</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Year</Col>
      </Row>
      <Row>
       
          <Col span={24}>
            <div className="exCont">
            <Panel
                
                showArrow={false}
                header={(
                  <Row >
                    <Col span={6}>
                     
                      <Text><strong>{binaNameDataHandler()}</strong></Text>
                    </Col>
                    <Col span={6}>{binaVolDataHandler()}</Col>
                    <Col span={6}>{binarankDataHandler()}</Col>
                    <Col span={6}>{binaYearDataHandler()}</Col>
                  </Row>
                  )}
              >
               
              </Panel> <br/>
              <Panel
                
                showArrow={false}
                header={(
                  <Row >
                    <Col span={6}>
                     
                      <Text><strong>{poloNameDataHandler()}</strong></Text>
                    </Col>
                    <Col span={6}>{poloVolDataHandler()}</Col>
                    <Col span={6}>{poloRankDataHandler()}</Col>
                    <Col span={6}>{poloYearDataHandler()}</Col>
                  </Row>
                  )}
              >
               
              </Panel>
             
            
            </div>
            
          </Col>
        
      </Row>
    </>
  );
};

export default Exchanges;
