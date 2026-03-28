export default function OrderedList({ items }) {
    return (
        <ol className="mb-8 list-decimal text-[20px] leading-[1.9] [&_a]:text-(--MainAccentColor) [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-100 [&_a]:ease-in-out [&_a:hover]:text-(--MainAccentColorHover)">
            {items.map((item) => (
                <li key={item}>
                    <strong>{item}</strong>
                </li>
            ))}
        </ol>
    );
}
