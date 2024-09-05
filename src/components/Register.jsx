import Form from './Form'
import loginIMG from '../assets/login_google.png'
function Register() {
  return (
    <Form action='player'>
      <fieldset>
        <legend>Login</legend>
        <label>
          username
          <input
            type='text'
            name='username'
            placeholder='type your username'
            autoComplete='on'
          />
        </label>
        <label>
          Email
          <input
            type='text'
            name='email'
            placeholder='example@email.com'
            autoComplete='on'
          />
        </label>
        <label>
          password
          <input
            type='password'
            name='password'
            autoComplete='on'
            placeholder='type the password'
          />
        </label>
        <label>
          Repeat the password
          <input
            type='password'
            name='re-password'
            autoComplete='on'
            placeholder='repeat password'
          />
        </label>
        <button>Sign Up</button>
        <>OR</>
        <img
          src={loginIMG}
          alt='imagen del boton de google'
          style={{ width: '100px', height: '25px', borderRadius: '10px' }}
        />
      </fieldset>
    </Form>
  )
}
export default Register
