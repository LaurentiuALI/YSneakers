import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";
import Searchbar from "../searchbar/searchbar";
import { Menu, Input } from 'antd';

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
  // <nav className="navbar">
  //   <div className="logo">
  //     <Link to="/">LOGO</Link>
  //   </div>
  //   <div className="nav-items">
  //     <div className="searchbar">
  //       <Searchbar />
  //     </div>

  //     <div className="products">
  //       <Link to="/products">Browse</Link>
  //     </div>
  //     <div className="account">
  //       <Link to="/account">Account</Link>
  //     </div>
  //   </div>
  // </nav>
  return <Menu mode="horizontal" items={items} />;
};

export default Navbar;
