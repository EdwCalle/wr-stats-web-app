import css from './Slider.module.css'

interface SliderProps {
  min: number
  max: number
  defaultValue: number
  label?: string
  onChange: (value: string) => void
}

function Slider({ min, max, defaultValue, label, onChange }: SliderProps) {
  return (
    <div className={css.slider}>
      {label}
      <label>{defaultValue}</label>
      <label>
        <input
          type='range'
          min={min}
          max={max}
          value={defaultValue}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  )
}

export default Slider
