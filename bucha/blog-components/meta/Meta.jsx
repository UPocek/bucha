import styles from './Meta.module.css'

export default function Meta({ metaTag1, metaTag2, metaTag3 }) {
    return <div className={styles.meta}>
        <span>{metaTag1}</span>
        <span>{metaTag2}</span>
        <span>{metaTag3}</span>
    </div>
}