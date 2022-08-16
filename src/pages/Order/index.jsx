import React, { Component, createRef } from "react";
import { Steps } from "antd";
const { Step } = Steps;
export default class index extends Component {
  VNode = createRef()
  componentDidMount() {
    console.log(this.VNode);
  }
  render() {
    return (
      <div ref={this.VNode}>
        <Steps size="small" current={1} >
          <Step title="Finished" />
          <Step title="In Progress" />
          <Step title="Waiting" />
        </Steps>
        order
      </div>
    );
  }
}
