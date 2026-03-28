import Image from 'next/image';
export default function BlogImage({ src, alt, priority = true }) {
    return (
        <div className="mx-auto my-[2em] w-full text-center">
            <Image
                priority={priority}
                src={src}
                width={510}
                height={371}
                alt={alt}
                decoding="async"
                className="mx-auto w-full rounded-(--BorderRadius) max-[900px]:w-[90%]"
            />
        </div>
    );
}
