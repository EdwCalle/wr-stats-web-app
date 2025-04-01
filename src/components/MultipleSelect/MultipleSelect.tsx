import { Option } from '@components/Select/Select'
import { useState } from 'react'
import css from './MultipleSelect.module.css'
interface MultipleSelectProps {
  options: Option[]
  name: string
  label?: string
  onChange?: (selectedValues: string[]) => void
}

function MultipleSelect({
  options,
  onChange,
  name,
  label = 'select items',
}: MultipleSelectProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (id: string) => {
    const updatedValues = selectedValues.includes(id)
      ? selectedValues.filter((v) => v !== id)
      : [...selectedValues, id]

    setSelectedValues(updatedValues)
    if (onChange) onChange(updatedValues)
  }
  return (
    <>
      <div
        className={css.selectView}
        tabIndex={-1}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false)
          }
        }}
      >
        {label}
        <label className={css.selectButton}>
          {`${selectedValues.length} items`}
          <input
            type='checkbox'
            checked={isOpen}
            onChange={() => setIsOpen((prev) => !prev)}
          />
        </label>
        <div className={isOpen ? css.select : `${css.select} ${css.hidden}`}>
          {options.map((option) => (
            <label key={option.id} className={css.optionView}>
              <input
                type='checkbox'
                name={name}
                value={option.id}
                checked={selectedValues.includes(option.id)}
                onChange={() => handleChange(option.id)}
                className={css.option}
              />
              {option.value}
            </label>
          ))}
        </div>
      </div>
    </>
  )
}

export default MultipleSelect
