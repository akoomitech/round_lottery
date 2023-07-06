import axios from 'axios';

const OK_CODE = 1;

export function create(config) {
  config = {
    ...config,
    // validateStatus: function (status) {
    //   return (status >= 200 && status < 300) || (status >= 400 && status <= 503); 
    // },
  }
  const instance = axios.create(config);
  instance.defaults.withCredentials = false;

  instance.interceptors.request.use(config => {
    let { method, data, headers } = config;
    if (['post', 'put', 'update', 'delete', 'patch'].indexOf(method.toLowerCase()) !== -1) {
      data = data || {};
    }
    
    // const token = cookie.get('token');
    // if (token) {
    //   headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  }, error => {
    console.error(`请求错误: ${error.message}`);
    return Promise.reject(error);
  });
  
  instance.interceptors.response.use(response => {
    if (response && response.status === 404) {
      console.log(`接口请求404: ${response.request.path}`);
      return Promise.reject(new Error('请求404错误'));
    }

    // 直接 create 来处理了
    if (response.data && response.data.code) {
      if (response.data.code === OK_CODE) {
        return Promise.resolve(response.data.res);
      }

      console.error(`请求错误:[${response.data.code}]-${response.data.msg}`)

      return Promise.reject(new Error(response.data.msg));
    }

    if (response.data) {
      return Promise.resolve(response.data);
    }
    
    return response;
  }, error => {
    console.error(`请求错误: ${error.message}`);
    return Promise.reject(error);
  });

  return instance;
}