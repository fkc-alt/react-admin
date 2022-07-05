import { GithubFilled } from '@ant-design/icons'
import Member from '@/pages/Member';
import MemberList from '@/pages/Member/MemberList';

const MemberRouter = [
    {
        sort: 1,
        key: '/member',
        label: '会员管理',
        icon: <GithubFilled />,
        children: [
            {
                path: '/member/info',
                key: '/member/info',
                label: '会员信息',
                icon: <GithubFilled />,
                element: <Member/>,
            },
            {
                path: '/member/list',
                key: '/member/list',
                label: '会员列表',
                icon: <GithubFilled />,
                element: <MemberList/>,
            }    
        ]
    }
]

export default  MemberRouter