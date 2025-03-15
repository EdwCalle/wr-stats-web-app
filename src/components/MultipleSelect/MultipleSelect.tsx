import { useState } from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri'
import css from './MultipleSelect.module.css'
//TO DO
//in (backend) make unique index for tierName, because,
export interface options {
  id: string
  value: string | number
}
export enum SelectType {
  single,
  multiple,
}
interface MultipleSelectProps {
  selectedValue: options
  options: options[]
  title: string
  type?: SelectType
  name?: string
}
function MultipleSelect({
  options,
  title = 'select items',
  type = SelectType.single,
  name = 'dropdown',
}: MultipleSelectProps) {
  const [items, setItems] = useState<options[]>(selectOptions)
  const onClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    selectOption: options,
  ) => {
    if (event.target.checked) {
      setItems([...items, selectOption])
    } else {
      setItems(items.filter((item) => item !== selectOption))
    }
  }
  const getSingleSelect = () => {
    return (
      <input
        type='checkbox'
        className={css.itemCheckbox}
        name={name}
        defaultChecked={false} // this works if options has no values selected by default
        onChange={(event) => onClick(event, options)}
      />
    )
  }

  return (
    <div className={css.dropdown} role='list'>
      <label className={css.dropdownTitle}>
        {`${title} (${items.length})`}
        <RiArrowDropDownFill size={30} />
        <input type='checkbox' className={css.dropdownButton} />
      </label>
      <div className={css.dropdownList} role='listbox'>
        {options.map((options) => (
          <label key={options.id} className={css.dropdownItem} role='listitem'>
            <input
              type='checkbox'
              className={css.itemCheckbox}
              name={options.id}
              defaultChecked={items.includes(options)} // this works if options has no values selected by default
              onChange={(event) => onClick(event, options)}
            />
            {options.value}
          </label>
        ))}
      </div>
    </div>
  )
}
export default MultipleSelect
