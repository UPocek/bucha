import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Step({ number, title, text, order, links, linkTxts, textAfter, image }) {
    const [screenWidth, setScreenWidth] = useState(1920);
    const t = useTranslations('tutorial');

    useEffect(() => {
        function handleWindowResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div id={`step${number}`} className="mx-auto max-w-360 px-0">
            <div className="flex items-center justify-center gap-16 px-[5%] py-8 max-[769px]:flex-col">
                <div className={screenWidth > 769 ? (order == '1' ? 'order-1' : 'order-2') : 'order-1'}>
                    <div className="flex items-center gap-4">
                        <div className="text-[96px] leading-[1.2] font-normal text-[#EF896D] max-[1580px]:text-[82px] max-[769px]:text-[40px] max-[769px]:font-bold">
                            {number}
                        </div>
                        <h2 className="text-[50px] leading-[1.2] font-normal max-[1580px]:text-[40px] max-[769px]:text-[24px]">
                            {title}
                        </h2>
                    </div>
                    <div>
                        <p className="text-[20px] leading-[1.6] font-normal max-[1580px]:text-[18px] max-[769px]:text-justify">
                            {text}
                        </p>
                        {links?.map((link, i) => (
                            <Link
                                key={link}
                                className="text-[20px] font-bold text-[#EF896D] no-underline hover:underline"
                                href={link}>
                                {i != 0 && ', '}
                                {`${linkTxts?.[i]}`}
                            </Link>
                        ))}
                        {textAfter ? (
                            <span className="text-[20px] leading-[1.6] font-normal max-[1580px]:text-[18px] max-[769px]:text-justify">
                                {textAfter}
                            </span>
                        ) : null}
                    </div>
                </div>
                <div className={screenWidth > 769 ? (order == '1' ? 'order-2' : 'order-1') : 'order-2'}>
                    {image && (
                        <Image
                            src={image}
                            width={screenWidth > 1580 ? 501 : 301}
                            height={screenWidth > 1580 ? 501 : 301}
                            alt={t('stepImageAlt', { number })}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
