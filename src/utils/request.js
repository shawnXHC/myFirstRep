import axios from 'axios'

// 封装一个axios对象
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// request 拦截器
service.interceptors.request.use(
    config => {
        // 写一些待请求头的处理
        return config
    },
    error => {
        // 对请求错误进行处理
        console.log(error)
        return Promise.reject(errror)
    }
)


// 此处再写一些响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        return res
            // 进行相应的处理
    },
    error => {
        return Promise.reject(error)
    }
)


export default service