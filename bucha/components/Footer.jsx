import styles from "../styles/Footer.module.css"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";


const BUCHA_LOGO_WIDTH = 450.5;
const BUCHA_LOGO_HEIGHT = 125.5;
export default function Footer() {
    const [screenWidth, setScreenWidth] = useState(1920);

    useEffect(() => {
        window && setScreenWidth(window.innerWidth);
    }, []);

    function changeLanguage() { }

    return <div className={styles.footerOuter}>
        <div className={styles.footerContent}>
            <div className={styles.upperSection}>
                <div>
                    <Image className={styles.logo} src={'/images/bucha_logo.png'} width={BUCHA_LOGO_WIDTH} height={BUCHA_LOGO_HEIGHT} alt='bucha logo'></Image>
                </div>
                <div>
                    <strong className={styles.columnHeading}>Setovi</strong>
                    <ul>
                        <li>
                            <Link href='#'></Link>
                        </li>
                        <li>
                            <Link href='#'></Link>
                        </li>
                        <li>
                            <Link href='#'></Link>
                        </li>
                        <li>
                            <Link href='#'></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <strong className={styles.columnHeading}>Kombuha</strong>
                    <ul>
                        <li>
                            <Link href='#'></Link>
                        </li>
                        <li>
                            <Link href='#'></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <strong className={styles.columnHeading}>Uputstva</strong>
                    <ul>
                        <li>
                            <Link href='#'></Link>
                        </li>
                        <li>
                            <Link href='#'></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <strong className={styles.columnHeading}>Kontakt</strong>
                    <ul>
                        <li>
                            <Link href='#'></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.lowerSection}>
                <div className={styles.topLowerSec}>
                    <div className={styles.language}>
                        <div>
                            <Image src={'/images/language.png'} width={24} height={24} alt='language icon' />
                        </div>
                        <label htmlFor="language">Language:</label>
                        <select id="language" name="language" value="english" onChange={changeLanguage}>
                            <option value="english">English</option>
                        </select>
                    </div>
                    <div>
                        <ul className={styles.social}>
                            <li>
                                <Link href='#'>
                                    <Image src={'/images/x.png'} width={24} height={24} alt='x icon' />
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <Image src={'/images/facebook.png'} width={24} height={24} alt='facebook icon' />
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <Image src={'/images/youtube.png'} width={24} height={24} alt='youtube icon' />
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <Image src={'/images/linkedin.png'} width={24} height={24} alt='linkedin icon' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>© 2023 bucha.rs</p>
                </div>
            </div>
        </div>

    </div>
}