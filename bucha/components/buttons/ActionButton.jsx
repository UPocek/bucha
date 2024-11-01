import styles from './MainButton.module.css'

export default function ActionButton({ buttonText, action, main = true }) {
    return (
        <button onClick={action} className={`${styles.btn} ${main ? styles.main : styles.sub}`}>{buttonText}</button>
    );
}