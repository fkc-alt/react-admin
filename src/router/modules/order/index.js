import { GithubFilled } from '@ant-design/icons'
import Order from '@/pages/Order';

const OrderRouter = [
    {
        sort: 2,
        hidden: false,
        path: '/order',
        key: '/order',
        label: '订单',
        title: '订单',
        icon: <GithubFilled />,
        element: <Order/>,
    }
]

export default  OrderRouter