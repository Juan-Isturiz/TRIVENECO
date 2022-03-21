import BurgerMenu from "../BurgerMenu/BurgerMenu"
import logo from '../../img/logowhite.svg'

const NavBarLinks = (props) => {
    return (
        <ul>
            <li>        
                <a href="/">Nosotros</a>
            </li>
            <li>
                <a href="/">Ciudades</a>
            </li>
            <li>
                <img src={logo} alt="Triveneco"/>
            </li>
            <li>
                <a href="/">Hoteles</a>
            </li>
            <li>
                <a href="/"><button>Sign Up</button></a>
            </li>
            <li>
                <BurgerMenu />
            </li>
        </ul>
    )
} 

export default NavBarLinks;