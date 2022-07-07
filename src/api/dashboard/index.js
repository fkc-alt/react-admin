import request from '@/axios/request';

export const getList = (params) => {
    return request({
        url: '/dashboard/List',
        method: 'get',
        params
    })
}