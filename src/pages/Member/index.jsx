import React, { Component } from "react";
import { connect } from "react-redux";
import WithRouter from "@/hooks/WithRouter";
import { getList } from "@/api/dashboard";

// 获取redux中的settings中的state
const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

class index extends Component {
  componentDidMount() {
    getList()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>Member</div>;
  }
}

export default WithRouter(connect(mapStateToProps)(index));
