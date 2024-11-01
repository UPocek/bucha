import ExternalLinkButton from '@/components/buttons/ExternalLinkButton';
import styles from './GridCard.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import LinkButton from '@/components/buttons/LinkButton';

export default function GridCard({ title, text, buttons, bgColor, lightBgColor, order, imgs }) {
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
                                    <ExternalLinkButton key={button['btnText']} buttonText={button['btnText']} link={button['btnUrl']} main={false} /> :
                                    <LinkButton key={button['btnText']} buttonText={button['btnText']} link={button['btnUrl']} main={false} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}