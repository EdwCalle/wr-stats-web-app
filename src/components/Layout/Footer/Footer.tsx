import css from './Footer.module.css'
function Footer() {
  return (
    <footer className={css.footer}>
      <dl>
        <dt>ABOUT US</dt>
        <dt>email:</dt>
        <dd>edwincalle95@gmail.com</dd>
        <dt>DISCLAIMER:</dt>
        <dd>
          This application was developed for learning and demonstration purposes
          only. It may contain errors or unexpected behavior.
        </dd>
      </dl>
    </footer>
  )
}
export default Footer
