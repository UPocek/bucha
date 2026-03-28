import Link from 'next/link';
export default function TableOfContents({ sections }) {
    return (
        <ol className="mt-8 text-[20px] leading-[1.9] [&_a]:text-(--MainAccentColor) [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-100 [&_a]:ease-in-out [&_a:hover]:text-(--MainAccentColorHover)">
            {sections.map((section, idx) => (
                <li key={section}>
                    <strong>
                        <Link href={`#s${idx + 1}`}>{section}</Link>
                    </strong>
                </li>
            ))}
        </ol>
    );
}
