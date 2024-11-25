import styles from "./Footer.module.css"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

const BUCHA_LOGO_WIDTH = 300;
const BUCHA_LOGO_HEIGHT = 83.57;
export default function Footer() {
    const [screenWidth, setScreenWidth] = useState(1920);

    useEffect(() => {
        function handleWindowResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function changeLanguage() { }

    return (
        <div role="contentinfo" className={styles.footerOuter}>
            <div className={styles.footerContent}>
                <div className={styles.upperSection}>
                    <div>
                        <Image className={styles.logo} src={'/images/bucha_logo.png'} width={screenWidth > 875 ? BUCHA_LOGO_WIDTH : BUCHA_LOGO_WIDTH / 2} height={screenWidth > 875 ? BUCHA_LOGO_HEIGHT : BUCHA_LOGO_HEIGHT / 2} alt='bucha.rs logo'></Image>
                    </div>
                    <div>
                        <strong className={styles.columnHeading}>Prodavnica</strong>
                        <ul>
                            <li>
                                <Link href='/setovi'>Svi setovi</Link>
                            </li>
                            <li>
                                <Link href='/kombuha'>Svi ukusi</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className={styles.columnHeading}>Dodatne stranice</strong>
                        <ul>
                            <li>
                                <Link href='/uslovi/o-nama'>O nama</Link>
                            </li>
                            <li>
                                <Link href='/uslovi/politika-privatnosti'>Politika privatnosti</Link>
                            </li>
                            <li>
                                <Link href='/uslovi/prava-potrosaca'>Prava potrošača</Link>
                            </li>
                            <li>
                                <Link href='/uslovi/nacin-isporuke'>Način isporuke</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className={styles.columnHeading}>Uputstva</strong>
                        <ul>
                            <li>
                                <Link href='/uputstva/priprema-kombuhe'>Kako se pravi kombuha</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/druga-fermentacija'>Druga fermentacija i ukusi</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/kako-se-pravi-kombuha'>Jednostavan recept za pripremu kombuhe</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/sta-je-kombuha'>Šta je kombuha?</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/zdravstveni-benefiti-kombuhe'>10 zdravstvenih benefita kombuhe</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/da-li-kombuha-sadrzi-alkohol'>Da li kombuha sadrži alkohol?</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/kako-prepoznati-dobru-kombuhu'>Kako da prepoznate da li je vaša kombuha dobra?</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/kako-se-cuva-kombuha'>Kako se čuva kombuha?</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/da-li-je-braon-boja-kombuhe-uredu'>Da li je braon boja kombuhe uredu?</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/koliko-kombuhe-treba-piti'>Koliko kombuhe treba piti?</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/kombucha-dijeta'>Kombucha i različite ishrane</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/mehurici-u-kombuhi'>Šta su mehurići u kombuhi</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/moze-li-svako-praviti-kombuhu'>Može li svako praviti kombuhu?</Link>
                            </li>
                            <li>
                                <Link href='/uputstva/nuspojave-kombuhe'>Nuspojave kombuhe</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className={styles.columnHeading}>Kontakt</strong>
                        <ul>
                            <li>
                                <a href="tel:063/427-280">063/427-280</a>
                            </li>
                            <li>
                                <a href="tel:060/6337-280">060/6337-280</a>
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
                            <label htmlFor="language">Jezik:</label>
                            <select id="language" name="language" value="rs" onChange={changeLanguage}>
                                <option value="rs">Srpski</option>
                            </select>
                        </div>
                        <div>
                            <ul className={styles.social}>
                                <li>
                                    <a href='https://twitter.com/rs_bucha' target="_blank">
                                        <Image src={'/images/x.png'} width={24} height={24} alt='bucha.rs x icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.facebook.com/kombuha.bucha.rs/' target="_blank">
                                        <Image src={'/images/facebook.png'} width={24} height={24} alt='bucha.rs facebook icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/@bucha_rs' target="_blank">
                                        <Image src={'/images/youtube.png'} width={24} height={24} alt='bucha.rs youtube icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.instagram.com/bucha.rs/' target="_blank">
                                        <Image src={'/images/instagram.png'} width={24} height={24} alt='bucha.rs instagram icon' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>© 2024 bucha.rs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}