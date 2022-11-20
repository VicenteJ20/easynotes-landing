import Link from "next/link";
import style from '../styles/Navbar.module.css';

export function Navbar () {
  return (
    <header className={style.Navbar}>
      <div className={style.brand}>
        <h2><Link href='/'>Easy<span className={style.colorBrand}>Notes</span></Link></h2>
      </div>
      <div>
        <ul className={style.ulNav}>
            <li><Link href='/'>Características</Link></li>
            <li><Link href='/'>Precios</Link></li>
            <li><Link href='/about'>Acerca de</Link></li>
          </ul>
      </div>
      <div>
        <button className={style.signUpBtn}>Registrarse</button>
      </div>
    </header>
  )
}
