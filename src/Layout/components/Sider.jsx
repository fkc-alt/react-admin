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
        children: !!route.children?.length ? this.handleRoutes(route.children) : void 0,
        label: route.path ? <Link to={route.path}>{route.label}</Link> : route.label
      };
    });
  };
  render() {
    const { settings: { isCollapsed }, location, openKeys, onOpenChange } = this.props;
    const attribute = {
      theme: "dark",
      mode: "inline",
      style: {
        width: isCollapsed ? 80 : 200
      },
      openKeys,
      onOpenChange,
      selectedKeys: [location.pathname],
      items: this.handleRoutes(routes),
    };
    return (
      <Sider style={{ overflowX: 'hidden' }} collapsed={isCollapsed}>
        <div style={{ textAlign: "center" }}>
          <span className={menu[isCollapsed ? "menu-title_collapsed" : "menu-title"]}>Admin</span>
        </div>
        <Menu {...attribute} />
      </Sider>
    );
  }
}

export default connect(mapStateToProps)(index);
