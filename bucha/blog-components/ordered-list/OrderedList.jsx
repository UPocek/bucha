import styles from './OrderedList.module.css'

export default function OrderedList({ items }) {
    return <ol className={styles.orderedList}>
        {items.map(item => <li key={item}>
            <strong>
                {item}
            </strong>
        </li>)}
    </ol>
}