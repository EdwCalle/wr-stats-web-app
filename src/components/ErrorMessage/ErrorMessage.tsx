import css from './ErrorMessage.module.css'
function ErrorMessage({
  message = 'wrError, please reload the page or retry more later',
}) {
  return <div className={css.errorMessage}>{message}</div>
}

export default ErrorMessage
