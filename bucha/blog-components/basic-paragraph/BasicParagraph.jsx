import styles from './BasicParagraph.module.css'
export default function BasicParagraph({ text }) {
    return <p className={styles.paragraph}>
        {text}
    </p>
}