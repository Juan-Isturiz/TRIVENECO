import React from 'react'
import Logos from "../images/Logo.jpg"
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"

export default function Logo() {
    return (
        <div className={styles.contenedorsito}>
            <div >
            <Link to="/">
                <img src={Logos} className={styles.logo}/>
            </Link>
            </div>
            <Link to="/">
            <div className={styles.letra}>BIENVENIDO</div>
            </Link>
        </div>   
    )
}
