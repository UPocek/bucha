import styles from '@/styles/NavbarMobile.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MainButton from './MainButton'
import { useState } from 'react'

export default function NavbarMobile() {

    const [active, setActive] = useState(false);

    return <nav className={styles.nav}>
        <div className={styles.navBar}>
            <svg onClick={() => setActive(!active)} className={`${styles.ham} ${styles.hamRotate} ${styles.ham4} ${active ? styles.active : ''}`} viewBox="0 0 100 100" width="80">
                <path
                    className={`${styles.line} ${styles.top}`}
                    d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                <path
                    className={`${styles.line} ${styles.middle}`}
                    d="m 70,50 h -40" />
                <path
                    className={`${styles.line} ${styles.bottom}`}
                    d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
            </svg>
            <Link href='../'>
                <div className={styles.icon}>
                    <Image src={'/images/bucha_logo.png'} width={171} height={47.25} alt='bucha icon' />
                </div>
            </Link>
        </div>
        <div className={`${styles.drawer} ${active ? styles.active : ''}`}>
            <ul>
                <li>
                    <Link href='#'>SETOVI</Link>
                </li>
                <li>
                    <Link href='#'>KOMBUHA</Link>
                </li>
                <li>
                    <Link href='/uputstva/priprema-kombuhe'>UPUTSTVO</Link>
                </li>
                <li>
                    <Link href='#'>MREŽE</Link>
                </li>
            </ul>
        </div>
    </nav>
}