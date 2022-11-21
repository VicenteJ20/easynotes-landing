import style from '../styles/FeaturesHome.module.css'
import featuresJson from '../json/featuresHome.json'
import Image from 'next/image'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={style.FeatureCard}>
      <header>
        <Image src={`/icons/${icon}`} alt="" width={42} height={42}/>
      </header>
      <div className={style.titleDiv}>
        <h3>{title}</h3>
      </div>
      <div className={style.pDiv}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export function FeaturesHome () {

  return (
    <div className={style.FeaturesHome}>
      {
        featuresJson.map((x, index) => <FeatureCard key={index} icon={x.iconName} title={x.title} description={x.description} />)
      }
    </div>
  )
}