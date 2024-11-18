import styles from './HighlightedSection.module.css'
export default function HighlightedSection({ text }) {
    return <p>
        <span className={styles.hl}>
            {text}
        </span>
    </p>
}