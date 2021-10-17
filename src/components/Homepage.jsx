import React from 'react';

import Cryptocurrencies from './Cryptocurrencies';
import {buyETH, sellETH, buyBTC, sellBTC } from '../services/coingeckoAPI';

const Homepage = () => {

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
