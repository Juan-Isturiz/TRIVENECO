import React from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../Context/Context';

const Menu = (props) => {

  const { isLogged } = useContext(UserContext);
  const handleLogout = async () => {
    await auth.signOut();
  };
  const history = useNavigate();

  const toLog = () => {
    history("/Login")
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
        {/* <Link to="/"><li>
          Sign in
        </li></Link>
        <Link to="/"><li>
          Sign out
        </li></Link> */}
        {!isLogged ? (<li onClick={toLog}>
          Log in
        </li>) : (<li onClick={handleLogout}>Log out</li>)}

      </ul>
    </div>

  )
}

export default Menu