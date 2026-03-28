export default function ReadMore({ title, relatedTopics }) {
    return (
        <section className="mb-7.5 grid grid-cols-2 gap-7.5 max-[768px]:flex max-[768px]:flex-col [&_a]:text-(--Primary) [&_a]:no-underline [&>h3]:col-span-2">
            <h3>{title}</h3>
            {relatedTopics.map((relatedTopic) => (
                <div
                    key={relatedTopic['title']}
                    className="flex h-90 w-full flex-col overflow-hidden rounded-[8px] shadow-[0_10px_60px_rgba(188,210,213,0.3)] transition-shadow duration-100 ease-in-out hover:shadow-[0_10px_60px_rgba(188,210,213,0.6)] max-[768px]:h-auto max-[768px]:w-auto">
                    <img
                        src={relatedTopic['src']}
                        loading="lazy"
                        decoding="async"
                        alt={relatedTopic['alt']}
                        className="mx-auto mb-6 h-50 min-w-full overflow-hidden rounded-t-[8px] max-[768px]:mx-0 max-[768px]:mt-0 max-[768px]:mb-6 max-[768px]:max-h-75 max-[768px]:min-w-0"
                    />
                    <div>
                        <strong className="[display:-webkit-box] max-h-12 max-w-full overflow-hidden px-6 text-[20px] leading-6 font-bold text-ellipsis text-(--Primary) [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                            <a href={relatedTopic['href']}>{relatedTopic['title']}</a>
                        </strong>
                        <p className="m-0 mb-6 [display:-webkit-box] max-h-10 max-w-full overflow-hidden px-6 text-[1rem] leading-5 font-normal text-(--Primary) [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                            {relatedTopic['text']}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
