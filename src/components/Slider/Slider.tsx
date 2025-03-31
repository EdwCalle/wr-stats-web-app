import css from './Slider.module.css'

interface SliderProps {
  min: number | null
  max: number | null
  defaultValue: number
  label?: string
  onChange: (value: string) => void
}

function Slider({ min, max, defaultValue, label, onChange }: SliderProps) {
  if (min == null || max == null)
    return <>something wrongs happens to input mark</>
  else
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
  // else return <>something wrongs happens in input marks</>
}

export default Slider
