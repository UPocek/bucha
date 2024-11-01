import styles from './Step.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Step({ number, title, text, order, link, linkTxt, image }) {
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
            <div className={screenWidth > 769 ? (order == '1' ? styles.order1 : styles.order2) : styles.order1}>
                <div className={styles.title}>
                    <div className={styles.number}>{number}</div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <p>{text}{link && <Link className={styles.link} href={link}>{linkTxt}</Link>}</p>
                </div>
            </div>
            <div className={screenWidth > 769 ? (order == '1' ? styles.order2 : styles.order1) : styles.order2}>
                <Image src={image} width={screenWidth > 1580 ? 501 : 301} height={screenWidth > 1580 ? 501 : 301} alt={`Priprema kombuhe korak ${number}`} />
            </div>
        </div>
    </div>
}