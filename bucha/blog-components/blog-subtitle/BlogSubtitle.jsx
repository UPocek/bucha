export default function BlogSubtitle({ text, id }) {
    return (
        <h2
            id={`#s${id}`}
            className="mt-[1em] mb-[0.8em] text-[2em] leading-[1.2] font-bold tracking-[-0.02em] max-[900px]:text-[1.8em] max-[768px]:text-[1.6em] max-[450px]:text-[1.4em]">
            {text}
        </h2>
    );
}
