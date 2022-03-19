import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../img/logowhite.svg'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

export default function Navbar() {
  return (
    <div className={styles.NavBar}>
        <div className={styles.NavLinks}>
          <h1><a href="/">Nosotros</a></h1>
          <h1><a href="/">Ciudades</a></h1>
          <img src={logo} alt="Triveneco"/>
          <h1><a href="/">Hoteles</a></h1>
          <a href="/"><button>Sign Up</button></a>
        </div>
          <BurgerMenu />
    </div>
  )
}
