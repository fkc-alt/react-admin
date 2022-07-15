import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { DesktopOutlined } from "@ant-design/icons";

import store from '@/store';
import Layout from "@/Layout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import modules from './modules';

export const routes = [
  {
    hidden: false,
    key: "/",
    label: "首页",
    path: "/",
    icon: <DesktopOutlined />,
    element: <Dashboard />,
    render: (props) => <Dashboard {...props} />,
  },
  ...modules,
];

export const RootSubmenuKeys = (routes) => {
  return routes.reduce((prev, next) => {
    if (next.children?.length) {
      return [...prev, next.key, ...RootSubmenuKeys(next.children)]
    }
    return prev;
  }, [])
}

export const FilterRouterMenu = (routes, type = void 0) => {
  return routes.filter((route) => {
    if (route.children?.length) {
      route.children = FilterRouterMenu(route.children, type);
      return !!route.children.length;
    }
    if (route.role?.length) {
      const condition = store.getState().user.roleList.some(role => route.role.includes(role));
      return type ? condition && !route.hidden : condition;
    }
    return type ? !route.hidden : true;
  })
}

export const FlattenRouter = (routes) => {
  return routes.reduce((prev, next) => {
    if (next.children?.length) {
      return [...prev, ...FlattenRouter(next.children)];
    }
    return [...prev, next];
  }, []);
};

export const MapRoutes = (props) =>{
  return (
    <Routes>
      {FlattenRouter(FilterRouterMenu(routes)).map((route) => mapRoute(route, props))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

const mapRoute = (route, props) => {
 return  <Route {...route} element={route.render ? route.render(props) : route.element} />
}

// 获取redux中的settings中的state
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const RouterView = (props) => {
  function Render(){
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route key="/" path="/" element={<Navigate to='/login' replace />}></Route>
        <Route key="/login" path="/login" element={<Login />}></Route>
      </Routes>
    );
  }
  return props.user.token ? <Layout /> : <Render />;
}

RouterView.propTypes = {
  user: PropTypes.object.isRequired,
}

RouterView.defaultProps = {
  user: {},
}

class index extends Component {
  render() {
    return (
      <HashRouter>
        <RouterView {...this.props} />
      </HashRouter>
    );
  }
}

export default connect(mapStateToProps)(index);
