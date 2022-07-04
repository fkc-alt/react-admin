import React, { Component } from "react";
import { connect } from 'react-redux'
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import header from "../styles/header.module.scss";

const { Header } = Layout

// 获取redux中的settings中的state
const mapStateToProps = (state) => {
  return {
    isCollapsed: state.settings.isCollapsed
  }
}

// 获取redux中的settings中的action
const mapDispatchToProps = (dispatch) => {
  return {
    setCollapsed(){
      dispatch({ type: 'settings/setCollapsed' })
    }
  }
}

class index extends Component {
  render() {
    return (
      <Header className={header.container}>
        <Button type="primary" onClick={this.props.setCollapsed} style={{ marginBottom: 16 }}>
          {this.props.isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);