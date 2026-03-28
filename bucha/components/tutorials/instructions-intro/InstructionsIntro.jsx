import Link from 'next/link';

function renderIntroText(text) {
    if (typeof text === 'string') {
        return text;
    }

    return (
        <>
            {text.textBefore}
            <Link className="text-[20px] font-bold text-[#EF896D] no-underline hover:underline" href={text.href}>
                {text.linkText}
            </Link>
            {text.textAfter}
        </>
    );
}

export default function InstructionsIntro({ title, text1, link, linkText, text2 }) {
    return (
        <div className="mx-auto mt-32 mb-16 max-w-360 px-[5%] max-[769px]:mt-28">
            <div>
                <h1 className="mb-8 text-[50px] font-bold text-[#171321] max-[1580px]:text-[40px] max-[1580px]:leading-[1.2] max-[769px]:text-[28px]">
                    {title}
                </h1>
                <p className="text-[20px] leading-[1.6] font-normal max-[1580px]:text-[18px] max-[769px]:text-justify">
                    {renderIntroText(text1)}
                    <Link className="text-[20px] font-bold text-[#EF896D] no-underline" href={link}>
                        {linkText}
                    </Link>
                    {text2}
                </p>
            </div>
        </div>
    );
}
