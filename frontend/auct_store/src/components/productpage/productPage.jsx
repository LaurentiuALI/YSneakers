import { React, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./productPage.css"
const ProductPage = () => {


  const [sneaker, getSneaker] = useState([]);
  const url = "http://localhost:8000/";


  const id = useParams();
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get(`${url}api/v1/product/${id.id}`)
      .then((response) => {
        const allProducts = response.data;
        getSneaker(allProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="productPage-wrapper">
      <img src={`http://localhost:8000/api/v1/product${sneaker.photos}`} className="image" alt={sneaker.model} />
      <h1>{sneaker.model}</h1>
      <p>Brand: {sneaker.brand}</p>
      <p>Colorway: {sneaker.color}</p>
    </div>
  )
};

export default ProductPage;