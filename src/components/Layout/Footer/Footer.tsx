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
          This app is created with the objective of learning and demonstration,
          ADD COPYRGIHT
        </dd>
      </dl>
    </footer>
  )
}
export default Footer
