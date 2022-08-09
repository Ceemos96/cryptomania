import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import {
  Navbar, Homepage, Exchanges, CryptoDetails, Cryptocurrencies, News,
} from './components';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout className="routes">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinid" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>

      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Cryptomania
          {' '}
          <br />
          All rights reserved
        </Typography.Title>
      </div>
    </div>
  </div>
);

export default App;
