import styles from '@/styles/Card.module.css'
import Image from 'next/image'
import MainButton from './MainButton'
import { useEffect, useState } from 'react';

export default function Card({ title, text, buttons, bgColor, lightBgColor, order, imgUrl, imgAlt }) {
    const [screenWidth, setScreenWidth] = useState(1920);

    useEffect(() => {
        window && setScreenWidth(window.innerWidth);
    }, []);

    return <div>
        <div className={styles.card}>
            <div className={styles.container} style={{ background: bgColor }}>
                <div className={`${styles.left} ${screenWidth > 720 ? (order == 1 ? styles.order1 : styles.order2) : styles.order1}`} style={{ background: lightBgColor }}>
                    <Image src={imgUrl} width={screenWidth > 1400 ? 720 : (screenWidth > 1200 ? 691 : (screenWidth > 720 ? 720 : 390))} height={screenWidth > 1400 ? 625 : (screenWidth > 1200 ? 599.83 : (screenWidth > 720 ? 625 : 338.54))} alt={imgAlt} />
                </div>
                <div className={`${styles.right} ${screenWidth > 720 ? (order == 1 ? styles.order2 : styles.order1) : styles.order2}`}>
                    <div>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <div className={styles.buttons}>
                            {buttons.map(button => <MainButton key={button['btnText']} buttonText={button['btnText']} link={button['btnUrl']} color={'whiteOut'} />)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}