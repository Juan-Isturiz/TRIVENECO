import styles from './BurgerMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import Menu from './Menu';

const BurgerMenu = (props) => {

    const [open, setOpen] = useState(false)

    return(
        <div>
        <FontAwesomeIcon icon={['fas', 'bars']} className="fa-5x"  onClick = {()=> setOpen(!open)}/>
            {open && <Menu />}
        </div>

    )};

export default BurgerMenu;
