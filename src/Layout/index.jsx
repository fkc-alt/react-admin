import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

import WithRouter from '@/hooks/WithRouter'
import Sider from "./components/Sider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
class index extends Component {
  static propTypes = {
    onOpenChange: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
    view: PropTypes.object.isRequired
  }
  static defaultProps = {
    onOpenChange: () => { },
    router: {},
    view: {}
  }
  render() {
    return (
      <Layout style={{ height: "100vh" }} >
        <Sider {...this.props.router} onOpenChange={this.props.onOpenChange} />
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
