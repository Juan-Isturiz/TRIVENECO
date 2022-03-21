import styles from './Navbar.module.css'
import { FiMenu } from 'react-icons/fi'
import NavBarLinks from './NavBarLinks'
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className={styles.NavBar}>
          <NavBarLinks />
          <FiMenu color="white" size="2em" className={styles.BurgerIcon} onClick={() => setOpen(!open)}/>
            {open && <Menu />}
    </nav>
  )
}

export default Navbar;




        {/* <div className={styles.NavLinks}>
          <h1><a href="/">Nosotros</a></h1>
          <h1><a href="/">Ciudades</a></h1>
          <img src={logo} alt="Triveneco"/>
          <h1><a href="/">Hoteles</a></h1>
          <a href="/"><button>Sign Up</button></a>
        </div> */}