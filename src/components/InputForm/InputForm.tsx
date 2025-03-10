import { Control, Controller, FieldError } from 'react-hook-form'
import css from './InputForm.module.css'
type InputFromProps = {
  name: string
  //TO DO
  //fix any problems
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  label: string
  type?: string
  error?: FieldError
}

function InputForm({ name, control, label, type, error }: InputFromProps) {
  const className = error ? `${css.span} ${css.error}` : `${css.span}`
  return (
    //TO DO
    //fix default value
    <>
      <label className={css.label}>
        {label}
        <Controller
          defaultValue={''}
          name={name}
          control={control}
          render={({ field }) => (
            <input type={type} {...field} className={css.input} />
          )}
        />
        <span className={className}>{error?.message}</span>
      </label>
    </>
  )
}
export default InputForm
