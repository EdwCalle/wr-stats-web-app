import css from '../css/Form.module.css'
import Card from './Card'
function Form({
  title = 'title form card',
  subtitle = 'subtitle form card',
  action = '/',
  children,
}) {
  return (
    <Card title={title} subtitle={subtitle}>
      <form action={action} className={css.form}>
        {children}
      </form>
    </Card>
  )
}
export default Form
