import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import useAuth from '../../context/AuthContext'
import {
  registerSchema,
  RegisterValues,
} from '../../utils/validations/register-schema'
function RegisterPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
  })
  const { signup, currentUser, authErrors } = useAuth()
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    console.log('from submit:', data)
    signup(data)
  })
  useEffect(() => {
    if (authErrors) {
      toast.error(authErrors.message.toString())
    }
  }, [authErrors])
  useEffect(() => {
    if (currentUser) navigate('/player')
  }, [currentUser])

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
            error={errors.confirmPassword}
          />

          <button>Sign Up</button>
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
