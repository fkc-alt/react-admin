import React, { Component } from "react";
import { Layout } from "antd";
import footer from "../styles/footer.module.css";

const { Footer } = Layout

export default class index extends Component {
  render() {
    return (
      <Footer className={footer.container}>
        <span className={footer.title}>footer</span>
      </Footer>
    );
  }
}
