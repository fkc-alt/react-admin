import { AccountBookOutlined } from '@ant-design/icons'
import Order from '@/pages/Order';

const OrderRouter = [
    {
        sort: 2,
        hidden: false,
        path: '/order',
        key: '/order',
        label: '订单',
        icon: <AccountBookOutlined />,
        Component: (props) => <Order {...props} />,
    }
]

export default OrderRouter