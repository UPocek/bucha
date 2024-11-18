import styles from './ReadMore.module.css'
export default function ReadMore({ title, relatedTopics }) {
    return <section className={styles.readMore}>
        <h3>{title}</h3>
        {relatedTopics.map(relatedTopic => <div key={relatedTopic['title']} className={styles.relatedBig}>
            <img src={relatedTopic['src']} loading="lazy" decoding="async"
                alt={relatedTopic['alt']} />
            <div>
                <strong><a href={relatedTopic['href']}>{relatedTopic['title']}</a></strong>
                <p>
                    {relatedTopic['text']}
                </p>
            </div>
        </div>)}
    </section>
}