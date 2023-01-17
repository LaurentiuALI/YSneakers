import React from "react";
import Template from "../templates/template";
import axios from "axios";
import "./home.css";
import { useState, useEffect } from "react";
import ProductCard from "../productCard/productCard";

const Home = () => {
  const [products, getProducts] = useState([]);
  const url = "http://localhost:8000/api/v1/product";

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allProducts = response.data;
        getProducts(allProducts.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const show = products.map((product) => <ProductCard key ={product.id} prod={product} />)

  return (

    <Template>
      <div className="container">
        {products != null && show}
      </div>
    </Template>

  );
};

export default Home;
