import React, { Component } from "react";
import { Layout } from "antd";

import WithRouter from '@/hooks/WithRouter'
import Sider from "./components/Sider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

class index extends Component {
  render() {
    return (
      <Layout
        style={{ height: "100vh"}}
      >
        <Sider {...this.props.router} />
        <Layout>
          <Header />
          <Content view={this.props.view} {...this.props.router} />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
export default WithRouter(index)
