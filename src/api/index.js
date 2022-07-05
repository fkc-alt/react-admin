import request from '@/axios/request';

export const getUserInfo = (data) => {
    return request({
        url: 'user/login',
        method: 'post',
        data
    })
}