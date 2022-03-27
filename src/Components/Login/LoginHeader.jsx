import React from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import styles from './Login.module.css'

const LoginHeader = () => {
  return (
    <div className={styles.LoginHeader}>
        <MdOutlinePersonOutline size="10rem"/>
        <h1>Login</h1>
    </div>
  )
}

export default LoginHeader