import React ,{useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './Navbar.module.css';
import {UserContext} from "../../Context/Context" ;
import { auth} from "../../utils/firebaseConfig";
import logo from '../../img/logowhite.svg';
import { MdOutlineMenu } from 'react-icons/md';
// import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Menu from './Menu';




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

  const [open, setOpen] = useState(false)  

  return (
    <div className={styles.NavBar}>
      <MdOutlineMenu className={styles.BurgerButton} size="2em" color="white" onClick={() => setOpen(!open)}/>
        {open && <Menu />}

      {/* <Link to="/">Nosotros</Link> */}
      
      <Link to="/" className={styles.DesktopOnly}>Ciudades</Link>
      <Link to="/"><img src={logo} alt="Triveneco"/></Link>
      <Link to="/" className={styles.DesktopOnly}>Hoteles</Link>
      {!user ? (<div>
        <Button className={styles.Navbutton} onClick={toLog}>Log in</Button>
        {/* <Button className={styles.Navbutton} onClick={toRegister}>Register</Button> */}
      </div>
        ):(
        <Button className={styles.Navbutton} onClick={handleLogout}>Log Out</Button>
        )}
    </div>
  )
}
export default Navbar