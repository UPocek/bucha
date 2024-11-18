import styles from './BlogTitle.module.css'
export default function BlogTitle({ title }) {
    return <h1 className={styles.title}>{title}</h1>
}