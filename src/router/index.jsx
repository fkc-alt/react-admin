import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { GithubFilled } from "@ant-design/icons";

import Layout from "@/Layout";
import Dashboard from "@/pages/Dashboard";
import modules from './modules';

export const routes = [
  {
    key: "Dashboard",
    icon: <GithubFilled />,
    label: "首页",
    path: "/",
    element: <Dashboard />,
  },
  ...modules,
];

export default class index extends Component {
  handleRoute = (routes) => {
    return routes.reduce((prev, next) => {
      if (next.children) {
        return [...prev, ...this.handleRoute(next.children)];
      }
      return [...prev, next];
    }, []);
  };
  render() {
    return (
      <HashRouter>
        <Layout
          view={
            <Routes>
              {this.handleRoute(routes).map((route) => (
                <Route {...route} />
              ))}
            </Routes>
          }
        />
      </HashRouter>
    );
  }
}
