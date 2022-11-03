import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="nav-items">
        <div className="products">
          <Link to="/products">Browse</Link>
        </div>
        <div className="account">
          <Link to="/account">Account</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
