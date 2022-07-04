import React, { Component } from 'react'

import WithRouter from '../../hooks/WithRouter'
import { getUserInfo } from '../../api';

class index extends Component {
  componentDidMount() {
    console.log(this);
    getUserInfo({ name: 'fkc' }).then(res => {}).catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div>
        Member
      </div>
    )
  }
}

export default WithRouter(index)