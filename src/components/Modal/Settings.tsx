import useAuth from '@/context/AuthContext'
import { CiUser } from 'react-icons/ci'
import Form from '../Form/Form'
import Modal from './Modal'

function Settings() {
  const { currentUser } = useAuth()
  return (
    <Modal elementID={'settings'} title='Settings'>
      <Form>
        <fieldset>
          <legend>Profile info</legend>
          <CiUser size={100} />
          <span>Username</span>
          <span>{currentUser?.username}</span>
          <span>email</span>
          <span>{currentUser?.email}</span>
        </fieldset>
        {/* <fieldset>
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
        </fieldset> */}
      </Form>
    </Modal>
  )
}
export default Settings
