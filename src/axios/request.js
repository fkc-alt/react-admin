import axios from "axios";
import { message } from "antd";
import store from '@/store'
import { BASE_URL, TIMEOUT } from "./config";

const Interface = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 请求拦截器
Interface.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

Interface.interceptors.response.use(
  (res) => {
    const code = res.data.code;
    if (code === 200) {
      return res.data;
    } else if (code === 400) {
      store.dispatch({ type: 'user/setToken', value: '' })
    } else {
      message.error("This is an error message");
      return Promise.reject();
    }
  },
  (error) => {
    console.log("err" + error);
    message.error(error.message);
    return error;
  }
);

export default Interface;
