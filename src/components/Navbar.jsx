import Link from 'next/link'
import React from 'react'
import styles from "./Navbar.module.css";
import {ActiveLink} from './ActiveLink';


const Navbar = () => {
  return (
    <nav className={styles['main-container']}>
        <ActiveLink text="Home" href='/' /> 
        <ActiveLink text="About" href='/about' />
        <ActiveLink text="Contacto" href='/contact' />
    </nav>
  )
}

export default Navbar