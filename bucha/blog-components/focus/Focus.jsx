import styles from './Focus.module.css'

export default function Focus({ title, text }) {
    return <div className={styles.important}>
        <strong>{title}</strong>
        <div>
            <p>{text}</p>
        </div>
    </div>
}