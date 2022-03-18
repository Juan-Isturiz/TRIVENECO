import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  const history = useNavigate();

  const toLog = () => {
    history("/Login")
  }

  return (
    <div className={styles.NavBar}>
      <Link to="/">Nosotros</Link>
      <Link to="/" >Ciudades</Link>
      <div className={styles.Navlinks}>
        <Link to="/"><h2>Triveneco</h2></Link>
      </div>
      <Link to="/">Hoteles</Link>
      <Button className={styles.Navbutton} onClick={toLog}>Sign in</Button>
    </div>
  )
}
export default Navbar

//
//      <Link to="/" >Ciudades</Link>
//      <nav>
//        <div className={styles.Navlinks}>
//          <a href="/"><h2>Triveneco</h2></a>
//        </div>
//      </nav>
//     