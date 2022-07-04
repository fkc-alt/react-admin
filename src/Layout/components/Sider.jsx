import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { connect } from 'react-redux'
import { routes } from "@/router";
import menu from "../styles/menu.module.css";

const { Sider } = Layout

// 获取redux中的settings中的state
const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}

// 获取redux中的settings中的action
const mapDispatchToProps = (dispatch) => {
  return {
    setDefaultSelectedKeys(value){
      dispatch({
        type: 'settings/setDefaultSelectedKeys',
        value
      })
    }
  }
}

class index extends Component {
  handleRoutes = (routes) => {
    return routes.map((route) => {
      return {
        key: route.key,
        icon: route.icon,
        children: route.children ? this.handleRoutes(route.children) : undefined,
        label: route.path ? <Link to={route.path}>{route.label}</Link> : route.label
      };
    });
  };
  handleClick = ({ key }) => {
    this.props.setDefaultSelectedKeys(key);
  }
  render() {
    const { settings: { isCollapsed }, location } = this.props
    return (
      <Sider style={{overflowX: 'hidden'}} collapsed={isCollapsed}>
        <div style={{ textAlign: "center" }}>
          <span className={menu[isCollapsed ? "menu-title_collapsed" : "menu-title"]}>Admin</span>
        </div>
        <Menu
          onClick={this.handleClick}
          style={{ width: isCollapsed ? 80 : 200}}
          mode="inline"
          theme="dark"
          defaultSelectedKeys={[location.key]} 
          items={this.handleRoutes(routes)}
        ></Menu>
      </Sider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
