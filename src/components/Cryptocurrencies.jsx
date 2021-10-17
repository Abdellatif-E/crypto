import React from 'react';
import { Card, Row, Col } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { ethereumDataHandler , ethBDataHandler , bitcoinDataHandlerB , bitcoinDataHandlerP, bitcoinVolDataHandlerP, bitcoinVolDataHandlerB, ethereumVolDataHandler, ethBVolDataHandler } from '../services/coingeckoAPI';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 1 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

 

  if (isFetching) return null;

  return (
    <>
    <div className="mainCont">
    <div className="b">
    <div className="cardT"> Binance</div>
         <div className="cont">
         

<div className="exh">
      <Row  className="crypto-card-container">
 
      
          <Col xs={24} sm={12} lg={6} className="crypto-card" >
            <Card title={`Ethereum`}  hoverable>
              <p>Buy/Sell: {(ethBDataHandler())} $</p>
              <p>Volume: {ethBVolDataHandler()} </p>

            </Card>
          </Col>
      </Row>
      <Row  className="crypto-card-container">
          <Col xs={24} sm={12} lg={6} className="crypto-card" >
            <Card title={`Bitcoin`}  hoverable>
              <p>Buy/Sell: {(bitcoinDataHandlerB())} $</p>
              <p>Volume: {bitcoinVolDataHandlerB()} </p>
            </Card>
          </Col>
      
      </Row>
      </div>
      </div>
      </div>
      <div className="b">
    <div className="cardT"> Poloniex</div>
      <div className="cont">
<div className="exh">
      <Row  className="crypto-card-container">
 
      
          <Col xs={24} sm={12} lg={6} className="crypto-card" >
            <Card title={`Ethereum`}  hoverable>
              <p>Buy/Sell: {(ethereumDataHandler())} $</p>
              <p>Volume: {ethereumVolDataHandler()} </p>
            </Card>
          </Col>
      </Row>
      <Row  className="crypto-card-container">
          <Col xs={24} sm={12} lg={6} className="crypto-card" >
            <Card title={`Bitcoin`}  hoverable>
              <p>Buy/Sell: {(bitcoinDataHandlerP())} $</p>
              <p>Volume: {bitcoinVolDataHandlerP()} </p>
            </Card>
          </Col>
      
      </Row>
      </div>
      </div>
      </div>
      </div>

    </>
  );
};

export default Cryptocurrencies;
