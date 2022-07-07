import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";

import WithRouter from "@/hooks/WithRouter";
import { setToken } from "@/utils";

// 获取redux中的settings中的action
const mapDispatchToProps = (dispatch) => {
  return {
    setToken(payload) {
      dispatch({ type: "user/setToken", payload });
    },
  };
};

class index extends Component {
  form = createRef();
  onFinish = (values) => {
    console.log("Success:", values);
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  login = () => {
    this.form.current.validateFields().then(() => {
      const { navigate } = this.props.router;
      this.props.setToken(123);
      setToken(123);
      navigate("/");
    }).catch((info) => {
      console.log("Validate Failed:", info);
    })
  };
  render() {
    return (
      <Form
        ref={this.form}
        style={{paddingTop: "100px"}}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={this.login}>
            Login
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default WithRouter(connect(null, mapDispatchToProps)(index));
