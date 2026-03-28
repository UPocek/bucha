export default function BulletPoints({ items }) {
    return (
        <ul className="mb-8 list-none text-[20px] leading-[1.9] [&_a]:text-(--MainAccentColor) [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-100 [&_a]:ease-in-out [&_a:hover]:text-(--MainAccentColorHover) [&>li]:before:mr-1 [&>li]:before:text-(--MainAccentColor) [&>li]:before:content-(--bullet-list-decoration-unicode)">
            {items.map((point, idx) => (
                <li key={idx}>{point}</li>
            ))}
        </ul>
    );
}
