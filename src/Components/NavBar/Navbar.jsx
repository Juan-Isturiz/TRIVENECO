import React ,{useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './Navbar.module.css';
import {UserContext} from "../../Context/Context" ;
import { auth } from "../../utils/firebaseConfig";
import logo from '../../img/logowhite.svg';
import { MdOutlineMenu } from 'react-icons/md';
// import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Menu from './Menu';




const Navbar = () => {
  const history = useNavigate();

  const toLog = () => {
    history("/Signin")
  }
  const { isLogged,loggerOut} = useContext(UserContext);

  const [open, setOpen] = useState(false)  

  return (
    <nav className={styles.NavBar}>
      <MdOutlineMenu className={styles.BurgerButton} size="2em" color="white" onClick={() => setOpen(!open)}/>
        {open && <Menu />}

      
      <Link to="/CityView" className={styles.DesktopOnly}>Ciudades</Link>
      <Link to="/"><img src={logo} alt="Triveneco"/></Link>
      <Link to="/HotelView" className={styles.DesktopOnly}>Hoteles</Link>
      {!isLogged ? (
        <Button className={styles.Navbutton} onClick={toLog}>Log in</Button>
        
        ):(
          <div>
        <Button className={styles.Navbutton} onClick={loggerOut}>Log Out</Button>
      </div>
        )}
      
      </nav>
        
   
  
  )
}
export default Navbar