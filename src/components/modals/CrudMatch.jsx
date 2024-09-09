import { IoIosCloseCircle } from 'react-icons/io'
import { TIER, DIVISION } from '@/constants'
import Range from '../Range'
import Counter from '@/components/modals/Counter'
function CrudMatch() {
  return (
    <dialog id='crudMatch' className='modal'>
      <header className='modal-header'>
        <h3 className='modal-header-title'>Crud Match</h3>
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
            <legend>
              from date: <strong>12/12/24</strong>
            </legend>
            <Counter />
            <Range isRangeForm={true}>
              <label className='modal-form-tier'>
                <select defaultValue={'DEFAULT'} name='tier'>
                  <option value='DEFAULT' disabled>
                    Tier
                  </option>
                  {TIER.map((value, i) => (
                    <option key={i} value={i}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
              <label className='modal-form-division'>
                {/* Division */}
                <select defaultValue={'DEFAULT'} name='division'>
                  <option value='DEFAULT' disabled>
                    Division
                  </option>
                  {DIVISION.map((value, i) => (
                    <option key={i} value={i}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
              <label className='modal-form-mark'>
                <input type='number' name='marks' placeholder='marks' />
              </label>
            </Range>
            <button type='submit'>Save Match</button>
          </fieldset>

          {/* <button type='submit'>cancel</button> */}
        </form>
      </article>
    </dialog>
  )
}
export default CrudMatch
