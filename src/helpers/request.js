import axios from 'axios'
import { Message } from 'element-ui';


axios.defaults.baseURL = '//blog-server.hunger-valley.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



export default function request(type='GET', url, data={}) {
  return new Promise((resolve, reject) => {
    let option = {
      url, 
      method: type,
    }
    if(type.toLowerCase() === 'get') {
      option.params = data
    }else {
      option.data = data
    }
    if(localStorage.token) {
      axios.defaults.headers.common['Authorization']  = localStorage.token
    }
    axios(option)
      .then(res => {
        console.log(res)
        if(res.status === 'ok') {
          localStorage.token = res.data.token
          resolve(res.data)
        } else {
          Message.error(res.msg)
          reject(res.data)
        }
      })    
      .catch(
        err => {
          Message.error('网络异常')
          console.log(err)
        })
  })
}

