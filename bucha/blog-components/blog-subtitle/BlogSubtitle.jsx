import styles from './BlogSubtitle.module.css'
export default function BlogSubtitle({ text, id }) {
    return <h2 id={`#s${id}`} className={styles.subtitle}>{text}</h2>
}