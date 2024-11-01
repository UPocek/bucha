import Link from "next/link";
import styles from './MainButton.module.css'

export default function LinkButton({ buttonText, link, main = true }) {
    return (
        <Link href={link} className={`${styles.btn} ${main ? styles.main : styles.sub}`}>{buttonText}</Link>
    );
}