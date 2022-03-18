import styles from './BurgerMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BurgerMenu = (props) => {

    const DeployMenu = () => {
        return (
            <div>hola</div>
        )
        }

    return(
        <div className="BurgerMenu">
            <button className = {styles.BurgerButton} onClick={DeployMenu}>
                <FontAwesomeIcon icon={['fas', 'bars']} className="fa-5x"  />                
            </button>

        </div>
    )};

export default BurgerMenu;
