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
        <Link to="/"><li>
          Home
        </li></Link>
        <Link to="/"><li>
          Ciudades
        </li></Link>
        <Link to="/"><li>
          Hoteles
        </li></Link>
        {!isLogged ? (<li onClick={toLog}>
          Log in
        </li>) : (<li onClick={loggerOut}>Log out</li>)}

      </ul>
    </div>

  )
}

export default Menu