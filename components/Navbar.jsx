import Link from "next/link";
import style from '../styles/Navbar.module.css';
import { useState } from "react";

export function Navbar () {
  const [active, setActive] = useState(false)

  const setupMenu = () => {
    setActive(!active)
  }

  return (
    <header className={style.Navbar}>
      <div className={style.brand}>
        <h2><Link href='/'>Easy<span className={style.colorBrand}>Notes</span></Link></h2>
      </div>
      <div className={`${style.navContent} ${active ? style.isActive : ''}`}>
        <div>
            <ul className={style.ulNav}>
              <li onClick={setupMenu}><Link href='/'>Características</Link></li>
              <li onClick={setupMenu}><Link href='/'>Precios</Link></li>
              <li onClick={setupMenu}><Link href='/about'>Acerca de</Link></li>
            </ul>
        </div>
        <div>
          <span onClick={setupMenu}><Link href='/login' className={style.signUpBtn}>Registrarse</Link></span>
        </div>
      </div>
      <div className={style.buttonMobile} onClick={setupMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  )
}
