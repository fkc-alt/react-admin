import request from '../axios/request';

export const getUserInfo = (params) => {
    return request({
        url: '/user/info',
        method: 'get',
        params
    })
}