import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Menu, Layout, Space, Input, Button } from 'antd';
import Searchbar from "../searchbar/searchbar";
const { Header, Footer, Content } = Layout;
import { PlusOutlined, DisconnectOutlined } from '@ant-design/icons';

const items = [
  {
    label: <Link to="/"> Logo </Link>
  },
  {
    label: <Link to="/products">Products</Link>
  },
  // {
  //   label: <Searchbar /> 
  // },
  {
    label: <Link to="/account">Account</Link>,
  },
  {
    label: <Link to="/add" ><Button type="primary" shape="circle"><PlusOutlined /></Button></Link>
  }
]

const Navbar = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" className="menu" items={items} style={{ flex: "auto" }} >
       
      </Menu>
    </Header >
  );
};

export default Navbar;
