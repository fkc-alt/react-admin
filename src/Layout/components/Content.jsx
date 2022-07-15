import React, { Component } from "react";
import { Layout } from "antd";

import { MapRoutes as RouterView} from "@/router";
import content from "../styles/content.module.scss";

const { Content } = Layout;
export default class index extends Component {
  render() {
    return (
      <Content className={content.container}>
        <RouterView />
      </Content>
    );
  }
}
