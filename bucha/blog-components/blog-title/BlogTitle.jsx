export default function BlogTitle({ title }) {
    return (
        <h1 className="text-[2.8em] leading-[1.2] font-bold tracking-[-0.02em] max-[900px]:text-[2.2em] max-[768px]:text-[2em] max-[450px]:text-[1.6em]">
            {title}
        </h1>
    );
}
