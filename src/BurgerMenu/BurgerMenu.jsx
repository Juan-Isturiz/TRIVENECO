import classes from './BurgerMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BurgerMenu = (props) => {
    return(
        <div className="burgerMenu">
            <button className = "burgerButton">
                
            </button>
            <FontAwesomeIcon icon={['fas', 'bars']} />
            <FontAwesomeIcon icon={['fas', 'magnifying-glass']} size = "xl" />
        </div>
    )};

export default BurgerMenu;
