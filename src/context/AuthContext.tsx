import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { AuthService } from '@/services/auth.service'
import { User } from '@utils/interfaces/user.interface'
import { showError } from '@utils/modules/HandleErrors'
import { delay } from '@utils/modules/TimeWR'
import { LoginValues } from '@utils/validations/login.schema'
import { SignupValues } from '@utils/validations/signup.schema'

export interface AuthContextType {
  login: (user: LoginValues) => Promise<void>
  signup: (user: SignupValues) => Promise<void>
  logout: () => void
  isLoading: boolean
  currentUser?: User
  authErrors?: Error
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth mus be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User>()
  // const [authErrors, setAuthErrors] = useState<Error | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const login = async (loginValues: LoginValues) => {
    try {
      setIsLoading(true)

      const authCredentials = await AuthService.login(loginValues)
      const userProfile = await AuthService.checkToken()

      console.log('from signin, authCredentials:', authCredentials)
      console.log('from signin, userProfile', userProfile)
      setCurrentUser(userProfile)
    } catch (error) {
      setCurrentUser(undefined)
      // setAuthErrors(error as Error)
      // throw error
      showError(error, 'error on login')
    } finally {
      setIsLoading(false)
    }
  }
  const signup = async (registerValues: SignupValues) => {
    try {
      setIsLoading(true)

      const registerUser = await AuthService.signup(registerValues)
      const authCredentials = await AuthService.login(registerValues)
      const userProfile = await AuthService.checkToken()
      console.log('from register, registerUser:', registerUser)
      console.log('from register, authCredentials', authCredentials)
      console.log('from register, userProfile', userProfile)
      setCurrentUser(userProfile)
    } catch (error) {
      setCurrentUser(undefined)
      showError(error, 'error on signup')
      console.log('error on signup')
      // setAuthErrors(error as Error)
      // throw error
    } finally {
      setIsLoading(false)
    }
  }
  const autoLogin = async () => {
    try {
      await delay(2000)
      const userProfile = await AuthService.checkToken()
      console.log('from autoLogin, userProfile:', userProfile)
      setCurrentUser(userProfile)
    } catch (error) {
      setCurrentUser(undefined)
      throw error
      //TO DO
      // show error if the page is not login
      // setAuthErrors(error as Error)
    } finally {
      setIsLoading(false)
    }
  }
  const logout = () => {
    setCurrentUser(undefined)
    AuthService.removeToken()
  }
  useEffect(() => {
    console.log('first time: authcontext')
    autoLogin()
  }, [])
  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
        currentUser,
        // authErrors,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
