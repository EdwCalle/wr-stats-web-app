import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  checkTokenRequest,
  loginRequest,
  registerRequest,
  removeToken,
} from '../services/auth.service'
import { User } from '../utils/interfaces/user.interface'
import { delay } from '../utils/modules/TimeWR'
import { LoginValues } from '../utils/validations/login-schema'
import { RegisterValues } from '../utils/validations/register-schema'

export interface AuthContextType {
  signin: (user: LoginValues) => void
  signup: (user: RegisterValues) => void
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
  const [authErrors, setAuthErrors] = useState<Error | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const signin = async (loginValues: LoginValues) => {
    try {
      setIsLoading(true)

      const authCredentials = await loginRequest(loginValues)
      const userProfile = await checkTokenRequest()

      console.log('from signin, authCredentials:', authCredentials)
      console.log('from signin, userProfile', userProfile)
      setCurrentUser(userProfile)
    } catch (error) {
      setCurrentUser(undefined)
      setAuthErrors(error as Error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }
  const signup = async (registerValues: RegisterValues) => {
    try {
      setIsLoading(true)

      const registerUser = await registerRequest(registerValues)
      const authCredentials = await loginRequest(registerValues)
      const userProfile = await checkTokenRequest()
      console.log('from register, registerUser:', registerUser)
      console.log('from register, authCredentials', authCredentials)
      console.log('from register, userProfile', userProfile)
      setCurrentUser(userProfile)
    } catch (error) {
      setCurrentUser(undefined)
      setAuthErrors(error as Error)
    } finally {
      setIsLoading(false)
    }
  }
  const autoLogin = async () => {
    try {
      await delay(2000)
      const userProfile = await checkTokenRequest()
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
    removeToken()
  }
  useEffect(() => {
    console.log('first time: authcontext')
    autoLogin()
  }, [])
  return (
    <AuthContext.Provider
      value={{
        signin,
        signup,
        logout,
        currentUser,
        authErrors,
        isLoading: isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
