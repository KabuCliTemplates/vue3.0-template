import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    withCredentials: true,
    timeout: 1000
})

const http = function (url = '', method: 'get' | 'post' = 'get', ...arg: any): any {
    // return new Promise((resolve, reject) => {
    instance[method](url, ...arg)
        .then((res) => {
            // resolve(res)
            return res
        })
        .catch((err) => {
            // reject(err)
            return err
        })
    // })
}

export default http
