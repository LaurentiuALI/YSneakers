import React from "react";
import Navbar from "../navbar/navbar";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Template = (props) => {
  return (
    <Layout>
      <Sider theme="light" style={{ height: "100vh" }}>Sider</Sider>
      <Layout>
        <Navbar />
        {props.children}
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <Footer> Footer </Footer>
      </Layout>
    </Layout>
  );
};

export default Template;
