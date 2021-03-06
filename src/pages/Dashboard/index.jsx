import React, { Component } from 'react';
import { Divider, Radio, Table } from 'antd';
import { Link } from 'react-router-dom';

export default class index extends Component {
  state = {
    selectionType: 'checkbox',
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a href="https://github.com/" target="__blank">{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ],
    data: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      },
    ]
  }
  onChange = (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
  render() {
    const { selectionType, columns, data } = this.state;
    return (
      <div>
        <Radio.Group
          onChange={({ target: { value } }) => {
            this.setState({ selectionType: value });
          }}
          value={selectionType}
        >
          <Radio value="checkbox">Checkbox</Radio>
          <Radio value="radio">radio</Radio>
        </Radio.Group>
        <Link to={{ pathname: 'member/info', search: 'name=123&age=12' }}>去会员详情</Link> |
        <b onClick={() => this.props.navigate('/order', { state: { name: 'fkc' } })}> 去订单</b>
        <Divider />

        <Table
          rowSelection={{
            type: selectionType,
            onChange: this.onChange
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    )
  }
}