import styles from "./BulletPoints.module.css"
export default function BulletPointsBold({ items }) {
    return <ul className={styles.bulletList}>
        {items.map(point => <li key={point['title']}><strong>{point['title']}: </strong>
            {point['text']}
        </li>)}
    </ul>
}