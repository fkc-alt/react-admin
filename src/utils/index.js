/**
 * @module mock_utils
 * @author Feng kaichao
 * @param { * } url 
 * @returns { Object } 返回GET请求的数据
 */

 export const getParams = url => {
    const search = url.split('?')[1];
    if (!search) return {};
    return search.split('&').reduce((prev, next) => {
        const [key, value] = next.split('=');
        prev[key] = value;
        return prev;
    }, {})
}