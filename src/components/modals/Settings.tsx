// import './Modal.module.css'
import { CiUser } from 'react-icons/ci'
import Form from '../Form'
import Modal from './Modal'
function Settings() {
  return (
    <Modal elementID={'settings'} title='Settings'>
      <Form action=''>
        <fieldset>
          <legend>Profile info</legend>
          <CiUser size={100}></CiUser>
          <span>Username</span>
          <span>edwinvc12@gmail.com</span>
        </fieldset>
        <fieldset>
          <legend>Change Password</legend>
          <label>
            Old Password <input type='password' name='oldPassword' />
          </label>
          <label>
            New Password
            <input type='password' name='newPassword' />
          </label>
          <label>
            Repeat new Password
            <input type='password' name='r-newPassword' />
          </label>
          <button>Reset Password</button>
        </fieldset>
      </Form>
    </Modal>
  )
}
export default Settings
