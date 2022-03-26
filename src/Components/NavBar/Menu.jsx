import React from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../Context/Context';
import { auth } from "../../utils/firebaseConfig";

const Menu = (props) => {

  const { isLogged,loggerOut} = useContext(UserContext);
  const history = useNavigate();

  const toLog = () => {
    history("/Signin")
  };

  return (
    <div className={styles.Menu}> 
      <ul>
        <Link to="/" onClick = {()=>setOpen(!open)}><li>
          Home
        </li></Link>
        <Link to="/CityView" onClick = {()=>setOpen(!open)}><li>
          Ciudades
        </li></Link>
        <Link to="/HotelView" onClick = {()=>setOpen(!open)}><li>
          Hoteles
        </li></Link>
        <Link to="/Feedback" onClick = {()=>setOpen(!open)}><li>Feedback</li></Link>
        
        
        {!isLogged ? (<li onClick={toLog}>
          Log in
        </li>) : (<div><li onClick={loggerOut} >
          
          Log out
        </li>
        <Link to="/CityViewPageAdmin" onClick = {()=>setOpen(!open)}><li> Ciudades-Admin</li></Link>
        <Link to="/HotelViewPageAdmin" onClick = {()=>setOpen(!open)}><li> Hotel-Admin</li></Link>
        </div>)}

      </ul>
    </div>

  )
}

export default Menu