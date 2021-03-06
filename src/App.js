import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Typography } from 'antd';

import { Exchanges, Homepage, Cryptocurrencies, Navbar } from './components';
import './App.css';

const App = () => (


  <div className="app">

    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          <p> Made By Abdellatif Edlby </p>
        </Typography.Title>
      </div>
    </div>
  </div>
);

export default App;
