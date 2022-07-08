import React, { Component } from "react";
import { connect } from "react-redux";
import WithRouter from "@/hooks/WithRouter";
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
class index extends Component {
  logout = (pathname) => {
    this.props.setToken();
    this.props.router.navigate(`/login?redirect=${pathname}`);
  }
  componentDidMount() {
    getList(getParams(this.props.router.location.search))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>Member
      <b onClick={() => this.logout(this.props.router.location.pathname)}> 退出登录</b>
    </div>;
  }
}

export default WithRouter(connect(mapStateToProps, mapDispatchToProps)(index));
