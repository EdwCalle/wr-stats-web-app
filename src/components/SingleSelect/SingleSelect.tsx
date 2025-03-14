import { Scales } from '../../utils/interfaces/scales.interface'
import css from './SingleSelect.module.css'
type SingleSelectProps = {
  scales: Scales[]
  scaleSelected: string | number
  name: string
}
function SingleSelect({
  scales,
  scaleSelected: valueSelected,
  name = 'radio',
}: SingleSelectProps) {
  return (
    <div className={css.filterContainer}>
      {scales.map(({ label, value }) => {
        return (
          <label className={css.filterLabel} key={value}>
            {label}
            <input
              type='radio'
              name={name}
              className={css.filterRadio}
              defaultChecked={valueSelected === value}
              // onChange={handleRadioChange}
              // radioGroup={name}
            />
          </label>
        )
      })}
    </div>
  )
}
export default SingleSelect
