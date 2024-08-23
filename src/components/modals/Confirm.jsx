import { IoIosCloseCircle } from 'react-icons/io'

function Confirm({ titleMessage }) {
  return (
    <dialog id='confirm' className='modal'>
      <header className='modal-header'>
        <h3 className='modal-header-title'>{titleMessage}</h3>
        <button className='modal-header-exitButton'>
          <IoIosCloseCircle className='icon' size={40} />
        </button>
      </header>
      <article className='modal-content'>
        <form className='modal-form'>
          {/* <fieldset className='modal-form-fieldset'>
              <legend>Match info</legend>
              <h3>Season 14</h3>
              <span>12/12/2024</span>
            </fieldset> */}
          <fieldset className='modal-form-fieldset'>
            <legend>{/* from date: <strong>12/12/24</strong> */}</legend>
            <button>Ok</button>
            <button>Cancel</button>
          </fieldset>

          {/* <button type='submit'>cancel</button> */}
        </form>
      </article>
    </dialog>
  )
}
export default Confirm
