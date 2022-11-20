import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import style from '../styles/Footer.module.css'

export function Footer () {
  return (
    <section className={style.Footer}>
      <div className={style.bannerFooter}>
        <h2>Haz crecer tus proyectos personales<br />bajo tus propias reglas</h2>
        <Link className={style.buttonFooter} href='/'>Registrarme</Link>
      </div>
      <div className={style.FullFooter}>
        <div className={style.FirstDiv}>
          <h3>Easy<span className={style.colorBrand}>Notes</span></h3>
          <p>App de notas personalizable, potente y eficiente al alcance de todos.</p>
          <ul>
            <li><a href='https://www.twitter.com/jvicente_20/'><FaTwitter /></a></li>
            <li><a href='https://www.instagram.com/jvicente_20/'><FaInstagram /></a></li>
            <li><a href="https://www.facebook.com/"><FaFacebook /></a></li>
          </ul>
        </div>
        <div className={style.divInternalFooter}>
          <h3>Soporte</h3>
          <ul>
            <li><Link href='/'>Centro de ayuda</Link></li>
            <li><Link href='/'>Comunidad</Link></li>
            <li><Link href='/'>Legal</Link></li>
            <li><Link href='/'>Términos y condiciones</Link></li>
          </ul>
        </div>
        <div className={style.divInternalFooter}>
          <h3>Recursos</h3>
          <ul>
            <li><Link href='/'>Blog</Link></li>
            <li><Link href='/'>Guías</Link></li>
            <li><Link href='/'>FAQ</Link></li>
            <li><Link href='/'>Tutoriales</Link></li>
          </ul>
        </div>
        <div className={style.divInternalFooter}>
          <h3>¿Quiénes somos?</h3>
          <ul>
            <li><Link href='/'>Sobre nosotros</Link></li>
            <li><Link href='/'>Contáctanos</Link></li>
          </ul>
        </div>
      </div>
      <footer className={style.FooterElement}>&copy; Copyright 2022, EasyNotes. Todos los derechos reservados.</footer>
    </section>
  )
}