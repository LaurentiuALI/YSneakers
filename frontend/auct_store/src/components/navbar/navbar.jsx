import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Menu, Layout, Space, Input, Button } from 'antd';
import Searchbar from "../searchbar/searchbar";
const { Header, Footer, Content } = Layout;
import { PlusOutlined } from '@ant-design/icons';


const Navbar = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" className="menu" style={{ flex: "auto" }} >
        <Menu.Item key="logo" className="logo">
          <Link to="/">Logo</Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Searchbar />
        </Menu.Item>
        <Menu.Item key="products" className="products">
          <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="account" className="account">
          <Link to="/account">Account</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/add" >
            <Button type="primary" shape="circle">
              <PlusOutlined />
            </Button>
          </Link>
        </Menu.Item>
      </Menu>
    </Header >
  );
};

export default Navbar;
