import '../../css/Modal.css'
import { CiUser } from 'react-icons/ci'
import { IoIosCloseCircle } from 'react-icons/io'
function Settings() {
  return (
    <dialog id='settings' className='modal'>
      <header className='modal-header'>
        <h3 className='modal-header-title'>Settings</h3>
        <button className='modal-header-exitButton'>
          <IoIosCloseCircle className='icon' size={48} />
        </button>
      </header>
      <article className='modal-content'>
        <form action='dialog' className='modal-form'>
          <fieldset className='modal-form-fieldset'>
            <legend>Profile info</legend>
            <CiUser size={100}></CiUser>
            <span>Username</span>
            <span>edwinvc12@gmail.com</span>
          </fieldset>
          <fieldset className='modal-form-fieldset'>
            <legend>Change Password</legend>
            {/* <label>First name: <input type="text" /></label> */}
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
            <button type='submit'>Reset Password</button>
          </fieldset>
        </form>
      </article>
      {/* <footer></footer> */}
    </dialog>
  )
}
export default Settings
