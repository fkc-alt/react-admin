import React, { Component } from "react";
import { connect } from 'react-redux';
import { HashRouter, Routes, Route } from "react-router-dom";
import { GithubFilled } from "@ant-design/icons";

import Layout from "@/Layout";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import modules from './modules';

export const routes = [
  {
    key: "/",
    label: "首页",
    path: "/",
    icon: <GithubFilled />,
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
      return <Layout
          view={
            <Routes>
              {this.handleRoute(routes).map((route) => (<Route {...route} />))}
            </Routes>
          }
        />
    }
    return (
      <Routes>
        <Route key="/" path="/" element={<Login/>}></Route>
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
