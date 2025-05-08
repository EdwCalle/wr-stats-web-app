import { API_BASE_URL } from '@utils/constants/constants'
import { LoginValues } from '@utils/validations/login.schema'
import { SignupValues } from '@utils/validations/signup.schema'
import api, { authApi } from './axios.service'

const LOGIN_URL = `${API_BASE_URL}/auth/login`
const SIGNUP_URL = `${API_BASE_URL}/auth/register`
const CHECK_TOKEN_URL = `${API_BASE_URL}/auth/profile`

export class AuthService {
  static async login(loginValues: LoginValues) {
    const response = await authApi.post(LOGIN_URL, loginValues)
    const result = response.data
    this.saveToken(result.access_token)
    return result
  }
  static async signup(signupValues: SignupValues) {
    const response = await authApi.post(SIGNUP_URL, {
      ...signupValues,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    })
    const result = response.data
    return result
  }
  static async checkToken() {
    const response = await api.get(CHECK_TOKEN_URL)
    return response.data
  }

  static saveToken(token: string) {
    localStorage.setItem('authToken', token)
  }

  static getAuthToken(): string | null {
    return localStorage.getItem('authToken')
  }

  static removeToken() {
    localStorage.removeItem('authToken')
  }
}
