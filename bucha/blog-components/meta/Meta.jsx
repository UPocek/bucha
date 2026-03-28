export default function Meta({ metaTag1, metaTag2, metaTag3 }) {
    return (
        <div className="mt-[1em] mb-[1.5em] flex flex-row items-center text-[1rem] leading-normal font-medium tracking-[2px] uppercase max-[900px]:mx-auto max-[900px]:my-[1em] max-[900px]:text-[0.9rem] max-[900px]:tracking-[1px] max-[768px]:mx-auto max-[768px]:my-[0.5em] max-[768px]:text-[0.8rem] max-[768px]:tracking-[0px] max-[550px]:flex-col max-[550px]:text-[1rem] [&>span]:after:mr-[0.45em] [&>span]:after:ml-[0.2em] [&>span]:after:text-(--MainAccentColor) [&>span]:after:content-(--meta-list-decoration-unicode) max-[550px]:[&>span]:m-2.5 max-[550px]:[&>span]:after:hidden">
            <span>{metaTag1}</span>
            <span>{metaTag2}</span>
            <span>{metaTag3}</span>
        </div>
    );
}
