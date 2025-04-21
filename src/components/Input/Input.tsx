import { HTMLInputAutoCompleteAttribute } from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import css from './Input.module.css'
type InputProps = {
  name: string
  //TO DO
  //fix any problems
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  label: string
  type?: string
  error?: FieldError
  defaultValue?: string | number
  autoComplete?: HTMLInputAutoCompleteAttribute | undefined
}

function Input({
  name,
  control,
  label,
  type,
  defaultValue = '',
  autoComplete,
  error,
}: InputProps) {
  const cssError = error ? `${css.span} ${css.error}` : `${css.span}`
  const cssInput = type === 'number' ? `${css.input} ${css.number}` : css.input
  return (
    //TO DO
    //fix default value
    <>
      <label className={css.label}>
        {label}
        <Controller
          defaultValue={defaultValue}
          name={name}
          control={control}
          render={({ field }) => (
            <input
              type={type}
              {...field}
              className={cssInput}
              autoComplete={autoComplete}
            />
          )}
        />
        <span className={cssError}>{error?.message}</span>
      </label>
    </>
  )
}
export default Input
