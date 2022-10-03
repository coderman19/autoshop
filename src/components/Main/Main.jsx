import React from 'react'
import styles from './Main.module.scss'
import Sliders from '../Sliders/Sliders'

import img from '../../img/icons/icon-1.svg'
import img2 from '../../img/icons/icon-2.svg'
import img3 from '../../img/icons/pic-3.svg'
import img4 from '../../img/icons/car.svg'

import Box from '../Box/Box'

export default function Main() {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.content}>
        <h2>Дай шанс своему железному другу</h2>
          <p>
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Знаках, алфавит снова? Переулка имени безопасную взобравшись. 
          </p>
        </div>
      </div>
        <section className={styles.section}>
        {/* <h2>Наши возможности</h2> */}
          <Box img={img}/>
          <Box img={img2}/>
          <Box img={img3}/>
          <Box img={img4}/>
          <Box img={img}/>
          <Box img={img2}/>
          <Box img={img3}/>
          <Box img={img4}/>
        </section>
        <div className="container">
          <Sliders />
        </div>
      
    </div>
  )
}
