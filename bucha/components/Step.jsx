import styles from '@/styles/Step.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Step({ number, title, text, order, link, linkTxt }) {
    return <div className={styles.section}>
        <div className={styles.container}>
            <div className={order == '1' ? styles.order1 : styles.order2}>
                <div className={styles.title}>
                    <div className={styles.number}>{number}</div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <p>{text}{link && <Link className={styles.link} href={link}>{linkTxt}</Link>}</p>
                </div>
            </div>
            <div className={order == '1' ? styles.order2 : styles.order1}>
                <Image src={'/images/elipse.png'} width={501} height={501} alt="team picture" />
            </div>
        </div>
    </div>
}