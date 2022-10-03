import React from 'react'
import styles from './Box.module.scss'
// import pic from '../../img/icons/icon-1.svg'

export default function Box(props) {
  return (
    <div className={styles.box}>
      <a href="#">
      <div className={styles.boxCard}>
        <img src={props.img} alt="" />
        <h3>Ремонт машин молотком, с закрытыми глазами</h3>
      </div>
      </a>
    </div>
  )
}
