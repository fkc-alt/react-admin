import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Layout, Menu } from "antd";

import { routes, FilterRouterMenu } from "@/router";
import menu from "../styles/menu.module.scss";

const { Sider } = Layout;

// 获取redux中的settings中的state
const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
class index extends Component {
  handleRoutes = (routes) => {
    return FilterRouterMenu(routes, true).map((route) => {
      return {
        key: route.key,
        icon: route.icon,
        children: route.children ? this.handleRoutes(route.children) : void 0,
        label: route.path ? <Link to={route.path}>{route.label}</Link> : route.label
      };
    });
  };
  render() {
    const { settings: { isCollapsed }, location, openKeys } = this.props;
    return (
      <Sider style={{overflowX: 'hidden'}} collapsed={isCollapsed}>
        <div style={{textAlign: "center"}}>
          <span className={menu[isCollapsed ? "menu-title_collapsed" : "menu-title"]}>Admin</span>
        </div>
        <Menu
          style={{width: isCollapsed ? 80 : 200}}
          mode="inline"
          theme="dark"
          openKeys={openKeys}
          selectedKeys={[location.pathname]}
          items={this.handleRoutes(routes)}
          onOpenChange={this.props.onOpenChange}
        ></Menu>
      </Sider>
    );
  }
}

export default connect(mapStateToProps)(index);
