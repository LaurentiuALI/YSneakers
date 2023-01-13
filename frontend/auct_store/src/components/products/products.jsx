import { useState, useEffect, React } from "react";
import axios from "axios";
import ProductCard from "../productCard/productCard";
import Template from "../templates/template";
import "./products.css"


const Products = () => {
  const [products, getProducts] = useState([]);
  const url = "http://localhost:8000/";

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get(`${url}api/v1/product`)
      .then((response) => {
        const allProducts = response.data;
        getProducts(allProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const show = products.map((product) => <ProductCard prod={product} />)
  return (

    <Template>
      <div className="wrapper">
        {products[0] != null && show}
      </div>
    </Template>
  );
};

export default Products;
