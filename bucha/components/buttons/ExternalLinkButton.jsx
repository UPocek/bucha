import styles from './MainButton.module.css'

export default function ExternalLinkButton({ buttonText, link, main = true }) {
    return (
        <a href={link} target="_blank" className={`${styles.btn} ${main ? styles.main : styles.sub}`}>{buttonText}</a>
    );
}