import { React, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const response = await axios
      .post("http://localhost:8000/auth/jwt/create/", values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        sessionStorage.setItem("user", JSON.stringify(response.data));
        navigate("/", { replace: true });
      })
      .catch((error) => {
        seterror(error.response.data.detail);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo.errorFields[0].errors[0]);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onChange={() => seterror("")}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      {error != "" && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <p>Don't have an account? </p>
        <Link to="/register"> Register now</Link>
      </div>
    </Form>
  );
};

export default Login;
