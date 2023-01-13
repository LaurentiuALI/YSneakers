import React from "react";
import Navbar from "../navbar/navbar";
import { Layout } from 'antd';
import "./template.css";
const { Header, Footer, Content } = Layout;

const Template = (props) => {
  return (
    <Layout style={{ height: "100vh" }}>

      <Navbar />

      <Content style={{ overflow: "scroll" }}>
        {props.children}
      </Content>

      <Footer >YSneakers ©2023 Created by WE</Footer>
    </Layout>
  );
};

export default Template;


