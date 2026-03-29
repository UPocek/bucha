export default function Meta({ metaTag1, metaTag2, metaTag3 }) {
    const metaItems = [metaTag1, metaTag2, metaTag3].filter(Boolean);

    if (!metaItems.length) {
        return null;
    }

    return (
        <div className="mt-[1em] mb-[1.5em] flex flex-row flex-wrap items-center text-[1rem] leading-normal font-medium tracking-[2px] uppercase max-[900px]:mx-auto max-[900px]:my-[1em] max-[900px]:text-[0.9rem] max-[900px]:tracking-[1px] max-[768px]:mx-auto max-[768px]:my-[0.5em] max-[768px]:text-[0.8rem] max-[768px]:tracking-[0px] max-[550px]:flex-col max-[550px]:text-[1rem]">
            {metaItems.map((item, index) => (
                <span key={`${index}-${item}`} className="flex items-center max-[550px]:m-2.5">
                    {index > 0 ? (
                        <span
                            aria-hidden="true"
                            className="mx-[0.6em] shrink-0 tracking-normal text-(--MainAccentColor) max-[550px]:hidden">
                            {'·'}
                        </span>
                    ) : null}
                    <span>{item}</span>
                </span>
            ))}
        </div>
    );
}
