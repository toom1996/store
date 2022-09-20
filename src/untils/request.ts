import axios from "axios";
// import qs from "qs";

axios.defaults.timeout = 30000

axios.interceptors.request.use(
    (config) => {
        config.url = `${config.url}`
        return config
    }
)

axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error)
    }
)

export function get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}