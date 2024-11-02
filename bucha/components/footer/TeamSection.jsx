import Image from "next/image"
import styles from './TeamSection.module.css'
import { useEffect, useState } from 'react';

export default function TeamSection() {
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

    return <div className={styles.section}>
        <div className={styles.container}>
            <div className={screenWidth > 769 ? styles.order1 : styles.order2}>
                <Image src={'/images/bucha_team.png'} width={screenWidth > 1580 ? 400 : 300} height={screenWidth > 1580 ? 400 : 300} alt="kombuha team picture" />
            </div>
            <div className={screenWidth > 769 ? styles.order2 : styles.order1}>
                <div className={styles.title}>
                    <h2>Hejj, ovo je tima iza</h2>
                    <div>
                        <Image src={'/images/bucha_logo.png'} width={screenWidth > 1580 ? 215.378 : (screenWidth > 769 ? 161.534 : 215.378)} height={screenWidth > 1580 ? 60 : (screenWidth > 769 ? 45 : 60)} alt="bucha.rs logo large" />
                    </div>
                </div>
                <div>
                    <p>Tri studenta na misiji da ljudima u Srbiji donesu flašu zabave i zdravlja. Ukoliko se nismo još upoznali, dobar dan mi smo Tamara (devojka sa šeširom), Ivana (devojka koja spontano gleda u stranu) i Uroš (momak u plavom) i upoznaćete se sa nama preko naših društvnih mreža gde svaki dan postavljamo neku novu anegdotu vezanu za kombuhu, ali voleli bismo i mi vas da upoznamo, tako da ukoliko ste kupili neki od naših proizvoda pišite nam vaša iskustva, šaljite slike i budite deo pozitivne energije.</p>
                </div>
            </div>
        </div>
    </div>
}