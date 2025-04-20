import { API_BASE_URL } from '@utils/constants/constants'
import { LoginValues } from '@utils/validations/login.schema'
import { SignupValues } from '@utils/validations/signup.schema'

const LOGIN_URL = `${API_BASE_URL}/auth/login`
const REGISTER_URL = `${API_BASE_URL}/auth/register`
const CHECK_TOKEN_URL = `${API_BASE_URL}/auth/profile`

export class AuthService {
  static async login(loginValues: LoginValues) {
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginValues),
    })
    if (!response.ok) throw await response.json()
    const result = await response.json()
    this.saveToken(result.access_token)
    return result
  }
  static async signup(registerValues: SignupValues) {
    const response = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerValues),
    })
    if (!response.ok) throw await response.json()
    const result = await response.json()
    return result
  }
  static async checkToken() {
    const token = this.getAuthToken()
    const response = await fetch(CHECK_TOKEN_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) throw await response.json()
    return await response.json()
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
