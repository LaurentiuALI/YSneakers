import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";
import Searchbar from "../searchbar/searchbar";
import { Menu, Layout, Space } from 'antd';
const { Header } = Layout;

const items = [
  { label: <Link to="/">LOGO</Link> },
  { label: <Searchbar /> },
  {
    label: <Link to="/products">Browse</Link>
  },
  {
    label: <Link to="/account">Account</Link>
  }
];



const Navbar = () => {
  return <Header theme="white">
    <Space>
      <Menu theme="dark" mode="horizontal" items={items} />
    </Space>
  </Header>
};

export default Navbar;
