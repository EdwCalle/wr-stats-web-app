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
  const [isLoading, setIsLoading] = useState(true)
  const login = async (loginValues: LoginValues) => {
    try {
      setIsLoading(true)

      await AuthService.login(loginValues)
      const userProfile = await AuthService.checkToken()

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
      await AuthService.signup(registerValues)
      await AuthService.login({
        credential: registerValues.username, // or registerValues.username based on your logic
        password: registerValues.password,
      })
      const userProfile = await AuthService.checkToken()

      setCurrentUser(userProfile)
    } catch (error) {
      setCurrentUser(undefined)
      showError(error, 'error on signup')
      // setAuthErrors(error as Error)
      // throw error
    } finally {
      setIsLoading(false)
    }
  }
  const autoLogin = async () => {
    try {
      const userProfile = await AuthService.checkToken()
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
