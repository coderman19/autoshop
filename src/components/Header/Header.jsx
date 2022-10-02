import React from 'react'
import styles from './Header.module.scss'
import logo from '../../img/icons/logo.svg'
import Nav from '../Nav/Nav'

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className="container">
        <Nav logo={logo}/>
        
        
      </div>
    </div>
  )
}
