import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Layout, Menu, Button, Input } from "antd";
const { Header, Footer, Content } = Layout;
import ProductCard from "../productCard/productCard";
import "./products.css";
import { PlusOutlined } from "@ant-design/icons";
import logo from "./logo.png";

const Products = () => {
  const url = "http://localhost:8000/";

  const [input, setinput] = useState("");

  const [sneaker, setSneaker] = useState([]);

  const [products, getProducts] = useState([]);

  const handleInput = (e) => {
    setinput(e.target.value.toLowerCase());
  };

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
  const show = products
    .filter((product) => {
      if (input === "") {
        return true;
      } else {
        return (
          product.brand.toLowerCase().includes(input) ||
          product.model.toLowerCase().includes(input) ||
          product.gender.toLowerCase().includes(input)
        );
      }
    })
    .map((product) => <ProductCard prod={product} />);

  const items = [
    {
      label: (
        <Link to="/">
          <img src={logo} style={{ width: 40 }} />
        </Link>
      ),
    },
    {
      label: <Link to="/products">Products</Link>,
    },
    {
      label: (
        <>
          <Input placeholder="Search" onChange={handleInput} />
          <Button type="primary" style={{ height: 40, marginLeft: "10px" }}>
            Search
          </Button>
        </>
      ),
    },
    {
      label: <Link to="/account">Account</Link>,
    },
    {
      label: (
        <Link to="/add">
          <Button type="primary" shape="circle">
            <PlusOutlined />
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          className="menu"
          items={items}
          style={{ flex: "auto" }}
        ></Menu>
      </Header>

      <Content style={{ overflow: "scroll" }}>
        <div className="wrapper">{products[0] != null && show}</div>
      </Content>

      <Footer>YSneakers ©2023 Created by WE</Footer>
    </Layout>
  );
};

export default Products;
