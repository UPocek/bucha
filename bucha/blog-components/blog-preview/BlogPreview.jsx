import Image from 'next/image';
import Link from 'next/link';
import Meta from '../meta/Meta';

export default function BlogPreview({ title, metaTag1, metaTag2, metaTag3, image, text, link, callToAction }) {
    return (
        <div className="flex w-full flex-col overflow-hidden border-t-2 border-t-(--MainAccentColorHover) px-25 py-7.5 transition-shadow duration-100 ease-in-out max-[768px]:px-[5%] max-[768px]:py-[10%]">
            <strong className="text-[2.8em] leading-[1.2] font-bold tracking-[-0.02em] text-(--Primary) max-[768px]:text-[2.2em] max-[550px]:text-[2em]">
                {title}
            </strong>
            <Meta metaTag1={metaTag1} metaTag2={metaTag2} metaTag3={metaTag3} />
            <Image
                className="mb-6 overflow-hidden rounded-lg"
                width={720}
                height={377}
                src={image}
                decoding="async"
                alt={title}
            />
            <p className="m-0 text-[1rem] leading-5 font-normal text-(--Primary)">{text}</p>
            <Link
                className="mt-5 inline-block w-full max-w-55 cursor-pointer rounded-[8px] border-0 bg-(--MainAccentColorHover) px-3 py-1.5 text-center text-[1rem] tracking-[0.15em] text-(--BG) uppercase no-underline shadow-[5px_5px_20px_rgba(0,201,224,0.2)] transition-colors duration-100 ease-in-out"
                href={link}>
                {callToAction}
            </Link>
        </div>
    );
}
