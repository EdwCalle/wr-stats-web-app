import css from './Select.module.css'
//TO DO
export interface Option {
  value: string | number
  label: string | number
}

interface SelectProps {
  selectedOption: Option
  options: Option[]
  label?: string
  name: string
  onSelectedOption: (id: string) => void
}

function Select({
  selectedOption,
  options,
  onSelectedOption,
  label = 'select items',
  name,
}: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value
    onSelectedOption(id)
  }
  return (
    <label className={css.label}>
      {label}
      <select
        name={name}
        className={css.select}
        value={selectedOption.value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
export default Select
