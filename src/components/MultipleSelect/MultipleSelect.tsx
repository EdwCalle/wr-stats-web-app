import { useState } from 'react'
import css from './MultipleSelect.module.css'
import { RiArrowDropDownFill } from 'react-icons/ri'

function MultipleSelect({ data, title = 'items', name = 'select' }) {
  const [items, setItems] = useState([])
  const onClick = (event, obj) => {
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
        {data.map((obj) => (
          <label key={obj.value} className={css.dropdownItem} role='listitem'>
            <input
              type='checkbox'
              className={css.itemCheckbox}
              name={obj.label}
              defaultChecked={items.includes(obj.value)} // this works if options has no values selected by default
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
