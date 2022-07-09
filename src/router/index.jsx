import React, { Component } from "react";
import { connect } from 'react-redux';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { DesktopOutlined } from "@ant-design/icons";

import store from '@/store';
import Layout from "@/Layout";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import modules from './modules';

export const routes = [
  {
    hidden:false,
    key: "/",
    label: "首页",
    path: "/",
    icon: <DesktopOutlined />,
    element: <Dashboard />,
  },
  ...modules,
];

export const RootSubmenuKeys = (routes) => {
  return routes.reduce((prev, next) => {
    if(next.children){
      return [...prev, next.key, ...RootSubmenuKeys(next.children)]
    }
    return prev;
  }, [])
}

export const FilterRouterMenu = (routes, type = void 0) => {
  return routes.filter((route) => {
    if(route.children){
      route.children = FilterRouterMenu(route.children);
      return !!route.children.length;
    }
    if(route.role && route.role.length){
      const condition = store.getState().user.roleList.some(role => route.role.includes(role));
      return type ? condition && !route.hidden : condition;
    }
    return type ? !route.hidden : true;
  }, [])
}

// 获取redux中的settings中的state
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

// 获取redux中的settings中的action
const mapDispatchToProps = (dispatch) => {
  return {
    setToken(){
      dispatch({ type: 'user/setToken' })
    }
  }
}
class index extends Component {
  handleRoute = (routes) => {
    return routes.reduce((prev, next) => {
      if (next.children) {
        return [...prev, ...this.handleRoute(next.children)];
      }
      return [...prev, next];
    }, []);
  };
  renderComponent = () => {
    if(this.props.user.token){
      return (
        <Layout
          view={
            <Routes>
              {this.handleRoute(FilterRouterMenu(routes)).map((route) => (<Route {...route} />))}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          }
        />
      )
    }
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route key="/" path="/" element={<Navigate to='/login' replace />}></Route>
        <Route key="/login" path="/login" element={<Login/>}></Route>
      </Routes>
    )
  }
  render() {
    return (
      <HashRouter>
        {this.renderComponent()}
      </HashRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
