import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Products from "./components/products/products";
import Account from "./components/account/account";
import Register from "./components/Register/Register";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoutes";
import AddProduct from "./components/addItem/addProduct";
import ProductPage from "./components/productpage/productPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } />
        <Route path="/account" element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>} />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={<ProductPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
