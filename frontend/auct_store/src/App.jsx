import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Products from "./components/products/products";
import Account from "./components/account/account";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
