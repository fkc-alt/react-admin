/**
 * @module utils
 * @author kaichao Feng
 * @param { * } url 
 * @returns { Object } 返回query String数据
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


export const getToken = () => {
    return sessionStorage.getItem('token') || '';
}

export const setToken = (data) => {
    sessionStorage.setItem('token', data);
}