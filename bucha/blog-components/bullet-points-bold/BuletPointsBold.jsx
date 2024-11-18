import styles from './BulletPoints.module.css'
export default function BulletPointsBold({ points }) {
    return <ul className={styles.bulletList}>
        {points.map(point => <li key={point}><strong>{point['title']}</strong>
            {point['text']}
        </li>)}
    </ul>
}