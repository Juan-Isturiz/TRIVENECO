import React ,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button'
import styles from './Navbar.module.css'
import {UserContext} from "../../Context/Context" 
import { auth} from "../../utils/firebaseConfig";
import logo from '../../img/logowhite.svg'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Navbar = () => {
  const history = useNavigate();

  const toLog = () => {
    history("/Login")
  }
  const toRegister = () => {
    history("/Register")
  }
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <div className={styles.NavBar}>
      <Link to="/">Nosotros</Link>
      <Link to="/" >Ciudades</Link>
      <div className={styles.Navlinks}>
      <img src={logo} alt="Triveneco"/>
      </div>
      <Link to="/">Hoteles</Link>
      {!user ? (<div>
        <Button className={styles.Navbutton} onClick={toLog}>Log in</Button>
        <Button className={styles.Navbutton} onClick={toRegister}>Register</Button>
      </div>
        ):(
        <Button className={styles.Navbutton} onClick={handleLogout}>Log Out</Button>
        )}
        <BurgerMenu />

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