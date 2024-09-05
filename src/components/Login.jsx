import css from '../css/Form.module.css'
import Card from './Card'
function Login() {
  return (
    <Card title='testting'>
      <form action='/player' className={css.form}>
        <fieldset>
          <legend>Login</legend>
          <label>
            username/email
            <input
              type='text'
              name='username'
              placeholder='put your email@email.com'
              autoComplete='on'
            />
          </label>
          <label>
            password
            <input
              type='password'
              name='password'
              autoComplete='on'
              placeholder='put the password'
            />
          </label>
          <button>Login</button>
        </fieldset>
      </form>
    </Card>
  )
}
export default Login
