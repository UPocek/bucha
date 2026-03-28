export default function FloatingNav({ title, sections }) {
    return (
        <aside className="absolute top-0 -right-67.5 h-full max-[1400px]:-right-57.5 max-[1200px]:hidden">
            <div className="sticky top-45 max-h-[50vh] w-55 overflow-y-scroll border-y-4 border-(--SecundaryAccentColor) px-1.25 py-2.5 [&_a]:text-[1rem] [&_a]:leading-[1.1] [&_a]:font-bold [&_a]:tracking-[-0.02em] [&_a]:text-(--MainAccentColorHover) [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-100 [&_a]:ease-in-out [&_a:hover]:text-(--Primary) [&_li]:mb-[0.5em] [&_ol]:leading-normal [&_p]:m-0 [&_p]:text-[1.2em] [&_p]:leading-[1.2] [&_p]:font-bold [&_p]:tracking-[-0.02em]">
                <p>{title}</p>
                <ol>
                    {sections.map((section, idx) => (
                        <li key={section}>
                            <a href={`#s${idx + 1}`}>{section}</a>
                        </li>
                    ))}
                </ol>
            </div>
        </aside>
    );
}
