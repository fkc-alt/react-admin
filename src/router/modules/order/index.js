import { GithubFilled } from '@ant-design/icons'
import Order from '../../../pages/Order';

const OrderRouter = [
    {
        sort: 2,
        path: '/order',
        key: 'Order',
        label: '订单',
        title: '订单',
        icon: <GithubFilled />,
        element: <Order/>,
    }
]

export default  OrderRouter