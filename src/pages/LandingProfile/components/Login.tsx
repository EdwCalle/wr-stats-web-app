import loginIMG from "./../../../assets/login_google.png";
import Form from "../../../components/Form";
function Login() {
  return (
    <Form action="player">
      <fieldset>
        <legend>Login</legend>
        <label>
          username/email
          <input
            type="text"
            name="username"
            placeholder="put your email@email.com"
            autoComplete="on"
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            autoComplete="on"
            placeholder="put the password"
          />
        </label>
        <button>Log In</button>
        <>OR</>
        <img
          src={loginIMG}
          alt="imagen del boton de google"
          style={{ width: "100px", height: "25px", borderRadius: "10px" }}
        />
      </fieldset>
    </Form>
  );
}
export default Login;
