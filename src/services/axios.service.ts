import axios from 'axios'
import { getAuthToken } from './auth.service'
import { API_BASE_URL } from '../utils/constants/constants'

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
