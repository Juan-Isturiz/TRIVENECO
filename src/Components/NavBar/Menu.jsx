import React from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Menu = (props) => {
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
        <Link to="/"><li>
          Sign in
        </li></Link>
        <Link to="/"><li>
          Sign out
        </li></Link>
        {/* {!user ? (<li>
          Log in
        </li>) : (<li>Log out</li>)} */}

      </ul>
    </div>

  )
}

export default Menu