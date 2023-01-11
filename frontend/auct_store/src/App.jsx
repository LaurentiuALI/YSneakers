import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Products from "./components/products/products";
import Account from "./components/account/account";
import Register from "./components/Register/Register";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="products" element={<Products />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
