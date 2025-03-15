import { Ranged } from '@/models/match.model'
import MultipleSelect from '@components/MultipleSelect/MultipleSelect'
import { DIVISION, SEASONS, TIER } from '@utils/constants/constants'
interface RangeFormProps {
  range: Ranged
}
function RangeForm({ range }: RangeFormProps) {
  return (
    <div>
      <MultipleSelect values={SEASONS} title='seasons' />
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
        <input
          type='number'
          name='marks'
          placeholder='marks'
          value={range.marks}
        />
      </label>
    </div>
  )
}
export default RangeForm
