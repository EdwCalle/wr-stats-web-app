import css from './SingleSelect.module.css'

function SingleSelect({
  data,
  valueSelected,

  name = 'radio',
}) {
  // const handleRadioChange = (event) => {
  //   setSelectedOption(event.target.value)
  // }
  return (
    <div className={css.filterContainer}>
      {data.map(({ label, value }) => {
        return (
          <label className={css.filterLabel} key={value}>
            {label}
            <input
              type='radio'
              name={name}
              className={css.filterRadio}
              defaultChecked={valueSelected === value}
              // onChange={handleRadioChange}
              // radioGroup={name}
            />
          </label>
        )
      })}
    </div>
  )
}
export default SingleSelect
