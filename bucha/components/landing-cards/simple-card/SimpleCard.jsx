import styles from './SimpleCard.module.css'
import Image from 'next/image'
import LinkButton from '../../buttons/LinkButton'
import { useEffect, useState } from 'react';

export default function Card({ title, text, buttons, bgColor, lightBgColor, order, imgUrl, imgAlt }) {
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
                            {buttons.map(button => <LinkButton key={button['btnText']} buttonText={button['btnText']} link={button['btnUrl']} main={false} />)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}