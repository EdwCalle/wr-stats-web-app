import css from './Slider.module.css'

interface SliderProps {
  min: number | null
  max: number | null
  defaultValue: number
  label?: string
  disabled?: boolean
  onChange: (value: string) => void
}

function Slider({
  min,
  max,
  defaultValue,
  label,
  onChange,
  disabled = false,
}: SliderProps) {
  if (min == null || max == null)
    return <>something wrongs happens to input mark</>
  return (
    <div className={css.slider}>
      {label && <>{label}</>}
      <label>
        <input
          type='range'
          min={min}
          max={max}
          disabled={disabled}
          value={defaultValue}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      <output>{defaultValue}</output>
    </div>
  )
  // else return <>something wrongs happens in input marks</>
}

export default Slider
