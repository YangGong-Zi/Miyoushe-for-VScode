import axios, {  AxiosError ,type AxiosRequestConfig} from 'axios'

const service = axios.create({
    timeout: 60000,
    baseURL:'/api'
})
  // 请求拦截器
service.interceptors.request.use(
    (config) => {
      return config
    },
    (error: AxiosError) => {
      console.error(error);
      return Promise.reject(error)
    }
  )
  // 响应拦截器
  service.interceptors.response.use(
    // AxiosResponse
    (response) => {
      if (response.status === 200 || response.status === 201) {
        const { data } = response
        if (data.message !== 'OK'){
          console.error(response);
          return Promise.reject(data)
        }
        return data
      } else {
        console.error(response);
        return Promise.reject()
      }
    },
    (error: AxiosError) => {
        console.error(error);
      return Promise.reject(error)
    }
  )
  const http = {
    get<T = any, P = any>(url: string, params?: P, config?: AxiosRequestConfig): Promise<T> {
      return service.get(url, { params, ...config })
    },

    post<T = any, P = any>(url: string, data?: P, config?: AxiosRequestConfig): Promise<T> {
      return service.post(url, data, config)
    },
  }

  export default http