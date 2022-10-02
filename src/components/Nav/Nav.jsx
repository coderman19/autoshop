import React from 'react'
import styles from './Nav.module.scss'

export default function Nav(props) {
  return (
    <div className={styles.nav}>
      <img src={props.logo} alt="logo" />
      <div className={styles.navigation}>
        <ul>
          <li><a href="#">Главная</a></li>
        </ul>
        <ul>
          <li><a href="#">Наши работы</a></li>
        </ul>
        <ul>
          <li><a href="#">О нас</a></li>
        </ul>
        <ul>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
    </div>
  )
}
