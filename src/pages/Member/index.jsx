import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "@/api/dashboard";
import { getParams } from '@/utils';

// 获取redux中的settings中的state
const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

// 获取redux中的settings中的action
const mapDispatchToProps = (dispatch) => {
  return {
    setToken(value = '') {
      dispatch({ type: "user/setToken", value });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class index extends Component {
  logout = () => {
    this.props.setToken();
  }
  componentDidMount() {
    getList(getParams(this.props.location.search))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>Member
      <b onClick={this.logout}> 退出登录</b>
    </div>;
  }
}

export default index;
