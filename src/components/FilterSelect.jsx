import css from '../css/FilterSelect.module.css'
function FilterSelect({ options }) {
  return (
    <section className={css.selectContent}>
      {options.map((value, index) => (
        <label key={index} className={css.selectTitle}>
          <input
            type='checkbox'
            className={css.selectItem}
            name={`season-${value}`}
          />
          {value}
        </label>
      ))}
    </section>
  )
}
export default FilterSelect
