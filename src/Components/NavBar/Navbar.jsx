import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.NavBar}>
            <h1><a href="/">Nosotros</a></h1>
            <h1><a href="/">Ciudades</a></h1>
        <nav>
          <div className={styles.Navlinks}>
        <a href="/"><h2>Triveneco</h2></a>
          </div>
        </nav>
        <h1><a href="/">Hoteles</a></h1>
        <a href="/"><button>Sign Up</button></a>
    </div>
  )
}
