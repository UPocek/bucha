import styles from '@/styles/Card.module.css'
import Image from 'next/image'
import MainButton from './MainButton'
import { useEffect, useState } from 'react';

export default function Card({ title, text, btnText, btnUrl, bgColor, lightBgColor, order, imgUrl, imgAlt }) {
    const [screenWidth, setScreenWidth] = useState(1920);

    useEffect(() => {
        window && setScreenWidth(window.innerWidth);
    }, []);

    return <div>
        <div className={styles.card}>
            <div className={styles.container} style={{ background: bgColor }}>
                <div className={`${styles.left} ${order == 1 ? styles.order1 : styles.order2}`} style={{ background: lightBgColor }}>
                    <Image src={imgUrl} width={screenWidth > 1400 ? 720 : (screenWidth > 1200 ? 540 : 432)} height={screenWidth > 1400 ? 625 : (screenWidth > 1200 ? 468.75 : 375)} alt={imgAlt} />
                </div>
                <div className={`${styles.right} ${order == 1 ? styles.order2 : styles.order1}`}>
                    <div>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <MainButton buttonText={btnText} link={btnUrl} color={'white'} />
                    </div>
                </div>
            </div>

        </div>
    </div>
}