export default function BulletPointsBold({ items }) {
    return (
        <ul className="mb-8 list-none text-[20px] leading-[1.9] [&_a]:text-(--MainAccentColor) [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-100 [&_a]:ease-in-out [&_a:hover]:text-(--MainAccentColorHover) [&>li]:before:mr-1 [&>li]:before:text-(--MainAccentColor) [&>li]:before:content-(--bullet-list-decoration-unicode)">
            {items.map((point) => (
                <li key={point['title']}>
                    <strong>{point['title']}: </strong>
                    {point['text']}
                </li>
            ))}
        </ul>
    );
}
