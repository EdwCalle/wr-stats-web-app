import { useForm } from 'react-hook-form'
// import loginIMG from '../../../assets/login_google.png'
import Form from '../../../components/Form/Form'
import InputForm from '../../../components/InputForm/InputForm'
import {
  registerSchema,
  RegisterValues,
} from '../../../utils/validations/register-schema'
import { zodResolver } from '@hookform/resolvers/zod'
function Register() {
  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <Form action='player' onSubmit={onSubmit}>
      <fieldset>
        <legend>Register</legend>
        <InputForm
          control={control}
          label='username'
          name='username'
          error={errors.username}
        />
        <InputForm
          control={control}
          label='email'
          name='email'
          error={errors.email}
        />
        <InputForm
          control={control}
          label='password'
          name='password'
          error={errors.password}
        />
        <InputForm
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
  )
}
export default Register
