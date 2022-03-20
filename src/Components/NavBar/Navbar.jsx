import React ,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button'
import styles from './Navbar.module.css'
import {UserContext} from "../../Context/Context" 
import { auth} from "../../utils/firebaseConfig";

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
    <section>
    <div className={styles.NavBar}>
      <Link to="/">Nosotros</Link>
      <Link to="/CityView" >Ciudades</Link>
      <div className={styles.Navlinks}>
        <Link to="/"><h2>Triveneco</h2></Link>
      </div>
      <Link to="/HotelView">Hoteles</Link>
      {!user ? (<div>
        <Button className={styles.Navbutton} onClick={toLog}>Log in</Button>
        <Button className={styles.Navbutton} onClick={toRegister}>Register</Button>
      </div>
        ):(
        <Button className={styles.Navbutton} onClick={handleLogout}>Log Out</Button>
        )}
    </div>
    <div className={styles.CityAdminBackground}>
      <Link to="/CityViewPageAdmin" className={styles.CityAdmin}> Ciudades-Admin</Link>
      <br/>
      <Link to="/HotelViewPageAdmin" className={styles.CityAdmin}> Hotel-Admin</Link>
    </div>
    </section>
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