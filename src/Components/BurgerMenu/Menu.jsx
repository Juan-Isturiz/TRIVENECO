import React from 'react'
import styles from './BurgerMenu.module.css'

const Menu = (props) => {
  return (
    <div className={styles.Menu}>
        <ul className={styles.MenuList}>
            <li className={styles.MenuElement}>Home</li>
            <li  className={styles.MenuElement}>Hotels</li>
            <li  className={styles.MenuElement}>Cities</li>
            <li  className={styles.MenuElement}>Account</li>
            <li  className={styles.MenuElement}>About us</li>
        </ul>
    </div>
  )
}

export default Menu