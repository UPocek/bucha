import Link from "next/link"
import styles from './InstructionsIntro.module.css'

export default function InstructionsIntro({ title, text1, link, linkText, text2 }) {
    return <div className={styles.container}>
        <div>
            <h1>{title}</h1>
            <p>{text1}<Link className={styles.link} href={link}>{linkText}</Link>{text2}</p>
        </div>
    </div>
}