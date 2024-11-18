import styles from './FloatingNav.module.css'
export default function FloatingNav({ title, sections }) {
    return <aside className={styles.floatingNav}>
        <div>
            <p>{title}</p>
            <ol>
                {sections.map((section, idx) => <li key={section}>
                    <a href={`#s${idx + 1}`}>{section}</a>
                </li>)}
            </ol>
        </div>
    </aside>
}