/**
 * mockjs
 * @module member
 * @author Feng kaichao
 * @param { Object } _ mockjs的内置对象
 * @param { Object } config request的配置对象
 * @param { Object } params request的参数对象
 */

 export default [
    {
        url: '/user/login',
        method: 'post',
        response: (_, config) => {
            return { 
                token: _.mock('@id'), 
                code: 200, 
                msg: 'success'
            }
        }
    },
    {
        url: '/getUserInfo',
        response: (_, config) => {
            return {
                name: '冯凯超',
                code: 200,
                msg: 'success'
            };
        }
    }
]