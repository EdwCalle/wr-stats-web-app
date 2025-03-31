import { API_BASE_URL } from '../utils/constants/constants'
import { LoginValues } from '../utils/validations/login-schema'
import { RegisterValues } from '../utils/validations/register-schema'

const LOGIN_URL = `${API_BASE_URL}/auth/login`
const REGISTER_URL = `${API_BASE_URL}/auth/register`
const CHECK_TOKEN_URL = `${API_BASE_URL}/auth/profile`
export async function loginRequest(loginValues: LoginValues) {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginValues),
  })
  if (!response.ok) throw await response.json()
  const result = await response.json()
  saveToken(result.access_token)
  return result
}
export async function registerRequest(registerValues: RegisterValues) {
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
export async function checkTokenRequest() {
  const token = getAuthToken()
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

async function saveToken(token: string) {
  localStorage.setItem('authToken', token)
}

export function getAuthToken(): string | null {
  return localStorage.getItem('authToken')
}

export function removeToken() {
  localStorage.removeItem('authToken')
}
