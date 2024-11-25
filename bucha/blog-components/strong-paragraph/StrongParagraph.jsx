import styles from './StrongParagraph.module.css'
export default function StrongParagraph({ text }) {
    return (
        <>
            <strong className={styles.paragraph}>
                {text}
            </strong >
        </>
    )
}