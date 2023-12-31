import styles from '@/styles/GridCard.module.css'
import Image from 'next/image'
import MainButton from './MainButton'
import { useEffect, useState } from 'react';
import MainButtonExternal from './MainButtonExternal';

export default function GridCard({ title, text, buttons, bgColor, lightBgColor, order, imgs }) {
    const [screenWidth, setScreenWidth] = useState(1920);

    useEffect(() => {
        window && setScreenWidth(window.innerWidth);
    }, []);

    return <div>
        <div className={styles.card}>
            <div className={styles.container} style={{ background: bgColor }}>
                <div className={`${styles.left} ${screenWidth > 720 ? (order == 1 ? styles.order1 : styles.order2) : styles.order1}`} style={{ background: lightBgColor }}>
                    <div className={styles.grid}>
                        {imgs.map(img => <div key={img['url']}>
                            <Image src={img['url']} width={screenWidth > 1400 ? 306 : (screenWidth > 1200 ? 294 : (screenWidth > 720 ? 306 : 159))} height={screenWidth > 1400 ? 280 : (screenWidth > 1200 ? 269.23 : (screenWidth > 720 ? 306 : 145.87))} alt={img['alt']} />
                        </div>)}
                    </div>
                </div>
                <div className={`${styles.right} ${screenWidth > 720 ? (order == 1 ? styles.order2 : styles.order1) : styles.order2}`}>
                    <div>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <div className={styles.buttons}>
                            {buttons.map(button =>
                                button['btnUrl'].startsWith('http') ?
                                    <MainButtonExternal key={button['btnText']} buttonText={button['btnText']} link={button['btnUrl']} color={'blackOut'} /> :
                                    <MainButton key={button['btnText']} buttonText={button['btnText']} link={button['btnUrl']} color={'blackOut'} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}