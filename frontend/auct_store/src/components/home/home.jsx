import React from "react";
import Template from "../templates/template";
import axios from "axios";
import "./home.css";
import { useState, useEffect } from "react";
import { FloatButton } from "antd";

const Home = () => {
  const [products, getProducts] = useState("");
  const url = "http://localhost:8000/";

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get(`${url}api/v1/product`)
      .then((response) => {
        const allProducts = response.data[0];
        getProducts(allProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Template>
        {products != null && <h1>Model: {products.model}</h1>}
        {products != null && <p>Brand: {products.brand}</p>}
        {products != null && <p>Price: {products.starting_price} $</p>}
        <FloatButton />
      </Template>
    </div>
  );
};

export default Home;
