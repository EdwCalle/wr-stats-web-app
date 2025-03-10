// import loginIMG from './../../../assets/login_google.png'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  LoginValues,
  loginSchema,
} from '../../../utils/validations/login-schema'
import InputForm from '../../../components/InputForm/InputForm'
import { useForm } from 'react-hook-form'
import Form from '../../../components/Form/Form'

function Login() {
  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Form action='player' onSubmit={onSubmit}>
      <fieldset>
        <legend>Login</legend>
        <InputForm
          name='username'
          control={control}
          label='username/email'
          type='text'
          error={errors.username}
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
    </Form>
  )
}
export default Login
