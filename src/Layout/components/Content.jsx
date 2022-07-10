import React, { Component } from "react";
import { Layout } from "antd";

import content from "../styles/content.module.scss";

const { Content } = Layout;
export default class index extends Component {
  render() {
    return (
      <Content className={content.container}>
        {this.props.view}
      </Content>
    );
  }
}
