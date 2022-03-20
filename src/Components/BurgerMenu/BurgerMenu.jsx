import styles from './BurgerMenu.module.css';
import { FiMenu } from 'react-icons/fi';
// import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import Menu from './Menu';

const BurgerMenu = (props) => {

    const [open, setOpen] = useState(false)

    return(
        <nav className={styles.BurgerMenu}>
        <FiMenu color="white" size="2em" className={styles.BurgerIcon} onClick={() => setOpen(!open)}/>
            {open && <Menu />}
        </nav>

    )};

export default BurgerMenu;
