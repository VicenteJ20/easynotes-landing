import style from '../styles/Header.module.css'

export const Header = ({ title, description, question} ) => {
  return (
    <header className={style.Header}>
      <h2><span className={question ? style.active : style.hide}>¿</span>{title} Easy<span className={style.colorBrand}>Notes</span><span className={question ? style.active : style.hide}>?</span></h2>
      <p>{description}</p>
    </header>
  )
}