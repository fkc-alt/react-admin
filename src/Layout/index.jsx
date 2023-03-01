import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Layout } from "antd";

import WithRouter from '@/hooks/WithRouter'
import Sider from "./components/Sider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

// 获取redux中的settings中的action
const mapDispatchToProps = (dispatch) => {
  return {
    setCollapsed(value) {
      dispatch({ type: 'settings/setCollapsed', value })
    }
  }
}

@connect(null, mapDispatchToProps)
class index extends Component {
  WIDTH = 992;
  static propTypes = {
    onOpenChange: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
  }
  static defaultProps = {
    onOpenChange: () => { },
    router: {},
  }
  $_resizeHandler = (e) => {
    if (!document.hidden) {
      this.props.setCollapsed(this.$_isMobile())
    }
  }
  $_isMobile = () => {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < this.WIDTH;
  }
  componentDidMount(){
    window.addEventListener('resize', this.$_resizeHandler);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.$_resizeHandler);
  }
  render() {
    return (
      <Layout style={{ height: "100vh" }} >
        <Sider {...this.props.router} onOpenChange={this.props.onOpenChange} />
        <Layout>
          <Header />
          <Content {...this.props.router} />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
console.log(connect(null, mapDispatchToProps)(index))
export default WithRouter(index)
