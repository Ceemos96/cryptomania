import React from 'react';
import {
  Menu, Typography, Avatar,
} from 'antd';
import { NavLink } from 'react-router-dom';
import {
  HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined,
} from '@ant-design/icons';
// import MenuItem from 'antd/lib/menu/MenuItem';
import icon from '../images/icon.png';

const Navbar = () => (
  <div className="nav-container">
    <div className="logo-container">
      <Avatar src={icon} size="large" />
      <Typography.Title level={2} className="logo">
        <NavLink to="/">CryptoMania</NavLink>
      </Typography.Title>
    </div>
    <Menu theme="dark">
      <Menu.Item icon={<HomeOutlined />}>
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item icon={<FundOutlined />}>
        <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
      </Menu.Item>
      <Menu.Item icon={<MoneyCollectOutlined />}>
        <NavLink to="/exchanges">Exchanges</NavLink>
      </Menu.Item>
      <Menu.Item icon={<BulbOutlined />}>
        <NavLink to="/news">News</NavLink>
      </Menu.Item>
    </Menu>
  </div>
);

export default Navbar;
