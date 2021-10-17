import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import {buyETH, ethereumDataHandler , ethBDataHandler , bitcoinDataHandlerB , bitcoinDataHandlerP, sellETH, buyBTC, sellBTC } from '../services/coingeckoAPI';

const Homepage = () => {
  const { isFetching } = useGetCryptosQuery(10);

  if (isFetching) return null;

  return (
    <>
 <div className="w">
       <div className="cont"><Cryptocurrencies /></div>
      </div>

      <div className="mid">
<div className="rec">
    <p> Recommendation </p>
    <span>{buyETH()}</span><br />
    <span>{sellETH()}</span> <br /><br />
    <span>{buyBTC()}</span><br />
    <span>{sellBTC()}</span>
</div></div>
    </>
  );
};

export default Homepage;
