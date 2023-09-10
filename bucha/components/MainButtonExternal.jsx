import styles from '@/styles/MainButton.module.css'

export default function MainButtonExternal({ buttonText, link, color }) {
    return (
        <a href={link} target="_blank" className={`${styles.btn} ${color == 'whiteOut' ? styles.btnWhiteOut : (color == 'blackOut' ? styles.btnBlackOut : styles.btnBlack)}`}><span>{buttonText}</span></a>
    );
}