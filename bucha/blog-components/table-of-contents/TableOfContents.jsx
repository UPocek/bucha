import styles from './TableOfContents.module.css'
import Link from 'next/link'
export default function TableOfContents({ sections }) {
    return <ol className={styles.tableOfContents}>
        {sections.map((section, idx) => <li key={section}>
            <strong>
                <Link href={`#s${idx + 1}`}>{section}</Link>
            </strong>
        </li>)}
    </ol>
}