import React, { Component } from "react";
import { Layout } from "antd";
import footer from "../styles/footer.module.scss";

const { Footer } = Layout;
export default class index extends Component {
  render() {
    return (
      <Footer className={footer.container}>
        <div className={footer.title}>
          <span>Copyright © 2012-2022 React Admin. All Rights Reserved.</span>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001"
            target="_blank"
          >
            <img
              src="https://www.2345.com/images/index/renzheng_gab.png"
              alt=""
            />
            京公网安备11000002000001号
          </a>
        </div>
      </Footer>
    );
  }
}
