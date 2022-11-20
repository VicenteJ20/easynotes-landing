import { FeaturesHome } from './FeaturesHome'
import { Header } from './Header'
import style from '../styles/WhatCanIdo.module.css'

export function WhatCanIdo () {
  return (
    <section className={style.WhatCanIdo}>
      <Header title='Qué puedo hacer con' description='Con EasyNotes puedes crear notas, recordatorios y recibir notificaciones. Utilizando nuestro servicio para organizar tu vida personal y laboral puedes sacar tu máximo potencial y disfrutar cada minuto de tu tiempo libre.' question={true} />
      <FeaturesHome />
    </section>
  )
}