import React from "react"
import styles from "./Navbar.module.css"



export default function Hero({imagencita,hijo}) {
    return (<div><img src={imagencita} className={styles.Hero} alt="imagen alternativa">
        </img>
        {hijo}
    </div>)
}
