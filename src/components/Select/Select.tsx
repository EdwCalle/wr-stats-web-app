import css from './Select.module.css'
//TO DO
export interface Option {
  id: string
  value: string | number
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
        value={selectedOption.id}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    </label>
  )
}
export default Select
