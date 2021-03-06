/**
 * 发送异步请求的模块
 * 1. 统一处理请求异常
 * 2. 异步直接得到data
 */
import axios from 'axios'
axios.defaults.headers = {
  Authorization: 'token 0bf31b5822db541a9d812119a80513c815c1c038',
  Accept: "application/vnd.github.v3+json"
}
export default function ajax (url, data = {}, method = 'GET') {

  return new Promise((resolve, reject) => {
    let promise
    // 1. 执行异步请求
    if (method === 'GET') {
      promise = axios.get(url, {
        params: data
      })
    }else if(method === 'DELETE'){
      promise = axios.delete(url,data)
    } else if(method === 'PUT'){
      promise = axios.put(url, data)
    } else if(method === 'PATCH'){
      promise = axios.patch(url,data)
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then(response => {
        // 2. 成功调用resolve
        resolve(response.data)
      })
      .catch(error => {
        console.log(error.message);
        // 3. 失败不调用reject，而是提示异常信息 
        console.log("请求出错了：" + error.message);

      })
  })


};
