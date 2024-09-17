import css from './MultipleSelect.module.css'
import { RiArrowDropDownFill } from 'react-icons/ri'

function MultipleSelect({ data, title = 'selecting' }) {
  return (
    <div className={css.dropdown} role='list'>
      <label className={css.dropdownTitle}>
        {title}
        <RiArrowDropDownFill size={30} />
        <input type='checkbox' name='select' className={css.dropdownButton} />
      </label>
      <div className={css.dropdownList} role='listbox'>
        {data.map(({ label, value }) => (
          <label key={value} className={css.dropdownItem} role='listitem'>
            <input type='checkbox' className={css.itemCheckbox} name={label} />
            {label}
          </label>
        ))}
      </div>
    </div>
  )
}
export default MultipleSelect
