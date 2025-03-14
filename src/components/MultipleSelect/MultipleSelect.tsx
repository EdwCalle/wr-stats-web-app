import { useState } from 'react'
import css from './MultipleSelect.module.css'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { Scales } from '../../utils/interfaces/scales.interface'
type MultipleSelectProps = {
  filters: Scales[]
  title: string
}
function MultipleSelect({ filters, title = 'items' }: MultipleSelectProps) {
  const [items, setItems] = useState<Scales[]>([])
  const onClick = (event: React.ChangeEvent<HTMLInputElement>, obj: Scales) => {
    if (event.target.checked) {
      setItems([...items, obj])
    } else {
      setItems(items.filter((item) => item !== obj))
    }
  }

  return (
    <div className={css.dropdown} role='list'>
      <label className={css.dropdownTitle}>
        {`${title} (${items.length})`}
        <RiArrowDropDownFill size={30} />
        <input type='checkbox' className={css.dropdownButton} />
      </label>
      <div className={css.dropdownList} role='listbox'>
        {filters.map((obj) => (
          <label key={obj.value} className={css.dropdownItem} role='listitem'>
            <input
              type='checkbox'
              className={css.itemCheckbox}
              name={obj.label}
              defaultChecked={items.includes(obj)} // this works if options has no values selected by default
              onChange={(event) => onClick(event, obj)}
            />
            {obj.label}
          </label>
        ))}
      </div>
    </div>
  )
}
export default MultipleSelect
