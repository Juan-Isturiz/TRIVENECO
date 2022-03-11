import React from "react"
import styles from "./Navbar.module.css"



export default function Hero({imagencita}) {
    return (<div><img src={imagencita} className={styles.Hero} alt="imagen alternativa">
        </img>
            <div className={styles.heroine}>
            <h1 className={styles.huno}>
                Habitaciones de Lujo
            </h1>
            <div>

            </div>
            <h4 className={styles.hcuatro}>
                Solo por $200 la noche
            </h4>
            <button className={styles.botonCont}>
                <h4 className={styles.botonHero}>
                    Vea ya
                </h4>
            </button>
            </div>
    </div>)
}
