import css from './FilterSelect.module.css'
function FilterSelect({ options, title = 'select something' }) {
  return (
    <div className={css.container}>
      <label className={css.selectButton}>
        {title}
        <input type='checkbox' name='select' className={css.test} />
      </label>
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
    </div>
  )
}
export default FilterSelect
