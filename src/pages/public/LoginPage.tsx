// import loginIMG from './../../../assets/login_google.png'

import useAuth from '@/context/AuthContext'
import Button from '@components/Button/Button'
import Form from '@components/Form/Form'
import Input from '@components/Input/Input'
import Loader from '@components/Loader/Loader'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginValues } from '@utils/validations/login.schema'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  })
  const { login, currentUser, isLoading } = useAuth()
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async (data) => {
    console.log('from submit:', data)
    await login(data)
  })
  //TO DO
  //add auto login, fix the user cannot get loging if he is logged
  //add loading
  // useEffect(() => {
  //   if (authErrors) {
  //     toast.error(authErrors.message.toString())
  //     console.log('fui yo')
  //   }
  // }, [authErrors])
  useEffect(() => {
    if (currentUser) navigate('/player')
  }, [currentUser])
  if (isLoading) return <Loader label='loading page...' />

  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
        <legend>Login</legend>
        <Input
          name='email'
          control={control}
          label='username/email'
          type='text'
          autoComplete='username'
          error={errors.email}
        />
        <Input
          name='password'
          control={control}
          label='password'
          type='password'
          autoComplete='current-password'
          error={errors.password}
        />
        <Button type='submit'>Log IN</Button>

        {/* <>OR</>
        <img
          src={loginIMG}
          alt='imagen del boton de google'
          style={{ width: '100px', height: '25px', borderRadius: '10px' }}
        /> */}
      </fieldset>
    </Form>
  )
}
export default LoginPage
