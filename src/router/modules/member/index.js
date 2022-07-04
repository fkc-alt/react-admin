import { GithubFilled } from '@ant-design/icons'
import Member from '../../../pages/Member';
import MemberList from '../../../pages/Member/MemberList';

const MemberRouter = [
    {
        sort: 1,
        key: 'Member',
        label: '会员管理',
        icon: <GithubFilled />,
        children: [
            {
                path: '/memberInfo',
                key: 'MemberInfo',
                label: '会员信息',
                icon: <GithubFilled />,
                element: <Member/>,
            },
            {
                path: '/memberList',
                key: 'MemberList',
                label: '会员列表',
                icon: <GithubFilled />,
                element: <MemberList/>,
            }    
        ]
    }
]

export default  MemberRouter