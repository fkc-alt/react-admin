/**
 * mockjs
 * @module dashboard
 * @author Feng kaichao
 * @param { Object } _ mockjs的内置对象
 * @param { Object } config request的配置对象
 * @param { Object } params request的参数对象
 */

 export default [
    {
        url: '/dashboard/List',
        method: 'get',
        response: (_, config, params) => {
            const data = _.mock({
                // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                'list|1-10': [{
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'id|+1': 1
                }]
            })
            return {
                code: 200,
                data,
            };
        }
    }
]