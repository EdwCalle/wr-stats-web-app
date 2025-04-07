import css from './Loader.module.css'
function Loader({ label = 'loading resources' }) {
  return (
    <div className={css.loaderView}>
      <div className={css.loader}>{label}</div>
    </div>
  )
}
export default Loader
