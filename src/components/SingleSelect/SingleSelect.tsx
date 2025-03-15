import { title } from 'process'
import { useId } from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri'
import css from './SingleSelect.module.css'
//TO DO
interface Option {
  id: string
  value: string | number
}

interface SingleSelectProps {
  selectedOption: Option
  options: Option[]
  label?: string
  name: string
  onSelectedOption: (option: Option) => void
}
function SingleSelect({
  selectedOption,
  options,
  onSelectedOption,
  label = 'select items',
  name,
}: SingleSelectProps) {
  const localID = useId()
  return (
    <div className={css.dropdown} role='list'>
      {label}
      <label className={css.dropdownTitle}>
        {`${selectedOption.value}`}
        <RiArrowDropDownFill size={30} />
        <input type='checkbox' className={css.dropdownButton} name={localID} />
      </label>
      <div className={css.dropdownList} role='listbox'>
        {options.map((option) => (
          <label key={option.id} className={css.dropdownItem} role='listitem'>
            <input
              type='radio'
              className={css.itemCheckbox}
              name={name}
              defaultValue={''}
              defaultChecked={selectedOption.value === option.value}
              onChange={() => onSelectedOption(option)}
            />
            {option.value}
          </label>
        ))}
      </div>
    </div>
  )
}
export default SingleSelect
