// import loginIMG from './../../../assets/login_google.png'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoginValues, loginSchema } from '../../utils/validations/login-schema'
import InputForm from '../../components/InputForm/InputForm'
import { useForm } from 'react-hook-form'
import Form from '../../components/Form/Form'
import { toast, ToastContainer } from 'react-toastify'
import useAuth from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function LoginPage() {
  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  })
  const { signin, currentUser, authErrors } = useAuth()
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    console.log('from submit:', data)
    signin(data)
  })
  //TO DO
  //add auto login, fix the user cannot get loging if he is logged
  //add loading
  useEffect(() => {
    if (authErrors) {
      toast.error(authErrors.message.toString())
    }
  }, [authErrors])
  useEffect(() => {
    if (currentUser) navigate('/player')
  }, [currentUser])

  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
        <legend>Login</legend>
        <InputForm
          name='email'
          control={control}
          label='username/email'
          type='text'
          error={errors.email}
        />
        <InputForm
          name='password'
          control={control}
          label='password'
          type='password'
          error={errors.password}
        />

        <button>Log In</button>
        {/* <>OR</>
        <img
          src={loginIMG}
          alt='imagen del boton de google'
          style={{ width: '100px', height: '25px', borderRadius: '10px' }}
        /> */}
      </fieldset>

      <ToastContainer
        position='bottom-center'
        theme='colored'
        pauseOnHover={false}
      />
    </Form>
  )
}
export default LoginPage
