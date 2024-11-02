import LinkButton from '@/components/buttons/LinkButton';
import styles from './VideoCard.module.css'
import { useEffect, useState } from 'react';

export default function VideoCard({ title, text, buttons, bgColor, lightBgColor, order, videoUrl }) {
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

    return <div className={styles.first}>
        <div className={styles.card}>
            <div className={styles.container} style={{ background: bgColor }}>
                <div className={`${styles.left} ${order == 1 ? styles.order1 : styles.order2}`} style={{ background: lightBgColor }}>
                    <video src={videoUrl} autoPlay loop muted controls webkit-playsinline playsinline style={{ width: (screenWidth > 1400 ? 720 : (screenWidth > 1200 ? 691 : (screenWidth > 720 ? 720 : 360))), height: (screenWidth > 1400 ? 625 : (screenWidth > 1200 ? 599.83 : (screenWidth > 720 ? 625 : 312.5))) }} />
                </div>
                <div className={`${styles.right} ${order == 1 ? styles.order2 : styles.order1}`}>
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