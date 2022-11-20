import style from '../styles/Subscriptions.module.css'
import { Header } from './Header'
import { FaCheckSquare } from 'react-icons/fa'

export function Subscriptions () {
  return (
    <section className={style.Subscriptions}>
      <Header title='Planes disponibles en' description='¡Escoge el plan perfecto para ti!' question={false} />
      <div className={style.gridSubscription}>
        <div>
          <header>Plan básico</header>
          <div className={style.price}>
            <h2>FREE</h2>
            <p>Gratis para siempre<br />No se requiere tarjeta de crédito.</p>
          </div>
          <div className={style.middleHeader}>
            <h3>¿Qué incluye este plan?</h3>
          </div>
          <div className={style.ulDivSubscription}>
            <ul>
              <li><FaCheckSquare /> Crea Notas</li>
              <li><FaCheckSquare /> Crea recordatorios</li>
              <li><FaCheckSquare /> Crea alertas personalizadas</li>
              <li><FaCheckSquare /> Reserva horarios</li>
              <li><FaCheckSquare /> Soporte técnico</li>
            </ul>
          </div>
        </div>
        <div>
          <header>Plan Profesional</header>
          <div className={style.price}>
            <h2>$7.99 USD <span>/mes</span></h2>
            <p>Disponible en pago mensual o Anual con 10% de descuento el primero año.</p>
          </div>
          <div className={style.middleHeader}>
            <h3>¿Qué incluye este plan?</h3>
          </div>
          <div className={style.ulDivSubscription}>
          <ul>
              <li><FaCheckSquare /> Todo lo que incluye el plan básico</li>
              <li><FaCheckSquare /> Soporte 24/7</li>
              <li><FaCheckSquare /> Conecta hasta 5 dispositivos</li>
              <li><FaCheckSquare /> Papelera hasta por 7 días</li>
              <li><FaCheckSquare /> 100Mb de Almacenamiento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
