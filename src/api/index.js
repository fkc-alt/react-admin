import request from '@/axios/request';

export const login = (data) => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}