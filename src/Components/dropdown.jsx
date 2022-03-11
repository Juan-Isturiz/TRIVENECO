import React,{useState} from 'react'
import {Link} from "react-router-dom"
import{FaAlignRight} from "react-icons/fa"
import styles from "./Navbar.module.css";

export default function dropdown() {
    const[isActive,setIsActive]= useState(false)
    return (
        <div className={styles.manita} >
            <FaAlignRight onClick={(e)=>setIsActive(!isActive) }>
            </FaAlignRight>
            {isActive && ( 
            <div className={styles.navbarContainerdis}>
                <li>
          <Link to="/Rooms/:link" className={styles.link}>
            SingleRoom
          </Link>
        </li>
          <li className={styles.rightSide}>
            <div className={styles.container}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </div>
  
            <div className={styles.container}>
              <Link to="/Rooms" className={styles.link}>
                Rooms
              </Link>
            </div>
          </li>
            </div>
            )}
        </div>
    )
}
