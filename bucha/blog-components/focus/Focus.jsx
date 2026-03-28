export default function Focus({ title, text }) {
    return (
        <div className="mx-auto mt-[0.6em] mb-[2em] max-w-120 rounded-[8px] border-0 p-[2em] shadow-[0_10px_60px_rgba(188,210,213,0.3)] [&_p]:font-normal [&_p]:text-(--Primary) [&_strong]:uppercase [&>div]:m-0 [&>div]:p-0 [&>div]:text-[24px] [&>div]:leading-[1.4] [&>div]:font-light [&>div]:tracking-[0.05em]">
            <strong>{title}</strong>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
}
