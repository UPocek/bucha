import styles from './BulletPoints.module.css'
export default function BulletPoints({ items }) {
    return <ul className={styles.bulletList}>
        {items.map(point => <li key={point}>
            {point}
        </li>)}
    </ul>
}