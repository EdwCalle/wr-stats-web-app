import axios from 'axios'
import { API_BASE_URL } from '../utils/constants/constants'
import { getAuthToken } from './auth.service'

const api = axios.create({
  baseURL: API_BASE_URL,
})
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
export default api
