import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import MainButton from './MainButton'
import Link from 'next/link'

export default function Navbar() {
    return <nav className={styles.nav}>
        <div className={styles.wrapper}>
            <div className={styles.navContent}>
                <div>
                    <Link href='../'>
                        <div className={styles.icon}>
                            <Image src={'/images/bucha_logo.png'} width={228} height={63} alt='bucha icon' />
                        </div>
                    </Link>
                    <ul>
                        <li>
                            <Link href='why_poolplanner'>SETOVI</Link>
                        </li>
                        <li>
                            <Link href='pricing'>KOMBUHA</Link>
                        </li>
                        <li>
                            <Link href='resources'>UPUTSTVO</Link>
                        </li>
                        <li>
                            <Link href='contactus'>MREŽE</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <MainButton buttonText='Get free trial' link='#' />
                    <div className={styles.marginLeft}>
                        <Link href='#'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}