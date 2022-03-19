import React from 'react'
import styles from './BurgerMenu.module.css'

export default function Menu() {
  return (
    <div className={styles.Menu}>
        <ul>
            <li className={styles.MenuElement}>Home</li>
            <li  className={styles.MenuElement}>Hotels</li>
            <li  className={styles.MenuElement}>Cities</li>
            <li  className={styles.MenuElement}>Account</li>
            <li  className={styles.MenuElement}>About us</li>
        </ul>
    </div>
  )
}
