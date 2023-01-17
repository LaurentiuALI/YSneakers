import React from "react";
import "./template.css";
import Navbar from "../navbar/navbar";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const Template = (props) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Navbar />

      <Content style={{ overflow: "hidden" }}>{props.children}</Content>

      <Footer style={{ display: "flex", justifyContent: "center" }}>
        YSneakers ©2023 Created by WE
      </Footer>
    </Layout>
  );
};

export default Template;
