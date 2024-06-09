
import Link from "next/link"
import Image from "next/image"
import logoImg from '@/assets/logo.png'
import MainHeaderBackground from "./main-header-background"
import classes from './main-header.module.css'
import NavLink from "./nav-link"


export default function MainHeader(){
 
    return <>
    <MainHeaderBackground></MainHeaderBackground>
    
     <header className={classes.header}>
    <Link className={classes.logo} href="/">

        <Image src={logoImg} alt="a plate of food on it"  priority/>
        next level food 
    </Link>

    <nav className={classes.nav}>
        <ul>
            <li><NavLink href="/meals">Browse the meals</NavLink></li>
            <li><NavLink href="/community">Foodies community</NavLink></li>
        </ul>
    </nav>
    </header>

    </>
}