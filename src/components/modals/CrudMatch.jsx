import { TIER, DIVISION } from '@/constants'
import Range from '../Range'
import Counter from '../Counter'
import Modal from './Modal'
import Form from '../Form'
function CrudMatch() {
  return (
    <Modal id={'crudMatch'}>
      <Form>
        <fieldset className='modal-form-fieldset'>
          <legend>Match info</legend>
          <h3>Season 14</h3>
          <span>12/12/2024</span>
        </fieldset>
        <fieldset>
          <legend>
            from date: <strong>12/12/24</strong>
          </legend>
          <Counter />
          {/* <Range isRangeForm={true} > */}
          <label>
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
          <label>
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
          <label>
            <input type='number' name='marks' placeholder='marks' />
          </label>
          {/* </Range> */}
          <button>Save Match</button>
        </fieldset>
      </Form>
    </Modal>
  )
}
export default CrudMatch
