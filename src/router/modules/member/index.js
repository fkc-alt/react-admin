import { UserOutlined, UsergroupAddOutlined, UserDeleteOutlined } from '@ant-design/icons'
import Member from '@/pages/Member';
import MemberList from '@/pages/Member/MemberList';

import {
    Owner, // 店主
    Admin, // 超级管理员
    OP, // 运营人员
} from '@/router/role/roleMap';

const MemberRouter = [
    {
        sort: 1,
        key: '/member',
        label: '会员管理',
        icon: <UserOutlined />,
        children: [
            {
                hidden: false,
                path: '/member/info',
                key: '/member/info',
                label: '会员信息',
                role: [Owner, Admin, OP],
                icon: <UserDeleteOutlined />,
                Component: (props) =>  <Member {...props} />,
            },
            {
                hidden: false,
                path: '/member/list',
                key: '/member/list',
                label: '会员列表',
                role: [Owner, Admin, OP],
                icon: <UsergroupAddOutlined />,
                Component: (props) =>  <MemberList {...props} />,
            }
        ]
    }
]

export default MemberRouter