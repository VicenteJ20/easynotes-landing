import Head from 'next/head'
import styles from '../styles/Home.module.css'
import homeImg from '../public/assets/homeImg.png'
import Image from 'next/image'
import Link from 'next/link'
import { WhatCanIdo } from '../components/whatCanIdo'
import { Subscriptions } from '../components/Subscriptions'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head><title>EasyNotes - Home</title></Head>
      <section className={styles.Home}>
        <div className={styles.gridLeft}>
          <div>
            <h1>Organízate en todo momento<br />y lugar.<br /><span className={styles.colorText}>El límite lo pones tú.</span></h1>
          </div>
          <div>
            <p className={styles.subtitle}>Crea notas, recibe notificaciones, agenda reservaciones y obtén acceso en cualquiera de tus dispositivos con nuestro servicio basado en la nube.</p>
          </div>
          <div>
            <Link className={styles.buttonLogIn} href='/'>Acceder</Link>
          </div>
        </div>
        <div className={styles.gridRight}>
          <Image src={homeImg} alt='' />
        </div>
      </section>
      <WhatCanIdo />
      <Subscriptions />
      <Footer />
    </>
  )
}
