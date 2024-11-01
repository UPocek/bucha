import { useState } from 'react'
import styles from './Description.module.css'

export default function Description({ longDescription }) {

    const [section, setSection] = useState(0);

    return (
        <div className={styles.description}>
            <div className={styles.selectSection}>
                <button className={section == 0 ? styles.selected : ""} onClick={() => setSection(0)}>Opis</button>
            </div>
            {
                section == 0 &&
                <div className={styles.descriptionText}>
                    {longDescription.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            }
        </div>
    )
}