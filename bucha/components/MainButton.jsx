import Link from "next/link";
import styles from '@/styles/MainButton.module.css'

export default function MainButton({ buttonText, link }) {
    return (
        <Link href={link} className={styles.btn}>{buttonText}</Link>
    );
}