import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import { BASE_URL, TIME_OUT } from './config'

class SCRequest {
  instance: AxiosInstance
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({ baseURL, timeout })

    // 返回拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      (err: AxiosError) => {
        return err
      }
    )
  }

  // request方法
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  // get方法
  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'get' })
  }

  // post方法
  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new SCRequest(BASE_URL, TIME_OUT)
