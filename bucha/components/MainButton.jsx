import Link from "next/link";
import styles from '@/styles/MainButton.module.css'

export default function MainButton({ buttonText, link, color }) {
    return (
        <Link href={link} className={`${styles.btn} ${color == 'whiteOut' ? styles.btnWhiteOut : (color == 'blackOut' ? styles.btnBlackOut : styles.btnBlack)}`}><span>{buttonText}</span></Link>
    );
}