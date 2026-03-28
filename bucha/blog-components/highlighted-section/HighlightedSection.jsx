export default function HighlightedSection({ text, link }) {
    return (
        <p className="mb-[1.3rem] max-[900px]:mb-[1.2rem]">
            <mark className="bg-(--SecundaryAccentColor) px-[0.35em] py-[0.15em]">
                {text}
                {link ? <span className="text-(--Primary)! underline underline-offset-2"> {link}</span> : null}
            </mark>
        </p>
    );
}
