import useAuth from '@/context/AuthContext'
import Button from '@components/Button/Button'
import Form from '@components/Form/Form'
import Input from '@components/Input/Input'
import Loader from '@components/Loader/Loader'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema, SignupValues } from '@utils/validations/signup.schema'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
  })
  const { signup, currentUser, isLoading } = useAuth()
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async (data) => {
    console.log('from submit:', data)
    await signup(data)
  })
  // useEffect(() => {
  //   if (authErrors) {
  //     toast.error(authErrors.message.toString())
  //   }
  // }, [authErrors])
  useEffect(() => {
    if (currentUser) navigate('/player')
  }, [currentUser])
  if (isLoading) return <Loader label='loading page...' />

  return (
    <>
      <Form onSubmit={onSubmit}>
        <fieldset>
          <legend>Register</legend>
          <Input
            control={control}
            label='username'
            name='username'
            error={errors.username}
          />
          <Input
            control={control}
            label='email'
            name='email'
            type='email'
            error={errors.email}
          />
          <Input
            control={control}
            label='password'
            name='password'
            type='password'
            error={errors.password}
          />
          <Input
            control={control}
            label='confirm Password'
            name='confirmPassword'
            type='password'
            error={errors.confirmPassword}
          />

          {isLoading ? (
            <Loader label='register...' />
          ) : (
            <Button type='submit'>Sign Up</Button>
          )}
          {/* <>OR</>
        <img
          src={loginIMG}
          alt='imagen del boton de google'
          style={{ width: '100px', height: '25px', borderRadius: '10px' }}
        /> */}
        </fieldset>
      </Form>
    </>
  )
}
export default RegisterPage
