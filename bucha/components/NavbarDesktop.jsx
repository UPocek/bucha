import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import MainButton from './MainButton'
import Link from 'next/link'

export default function NavbarDesktop() {
    return <nav className={styles.nav}>
        <div className={styles.wrapper}>
            <div className={styles.navContent}>
                <div>
                    <Link href='/'>
                        <div className={styles.icon}>
                            <Image src={'/images/bucha_logo.png'} width={228} height={63} alt='bucha icon' />
                        </div>
                    </Link>
                    <ul>
                        <li>
                            <Link href='/setovi'>SETOVI</Link>
                        </li>
                        <li>
                            <Link href='/kombuha'>KOMBUHA</Link>
                        </li>
                        <li>
                            <Link href='/uputstva/priprema-kombuhe'>UPUTSTVO</Link>
                        </li>
                        <li>
                            <Link href='https://www.instagram.com/bucha.rs/'>MREŽE</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <MainButton buttonText='Ponovite se kombuhom' link='/setovi' color={'black'} />
                </div>
            </div>
        </div>
    </nav>
}