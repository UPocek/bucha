import ExternalLinkButton from '@/components/buttons/ExternalLinkButton';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LinkButton from '@/components/buttons/LinkButton';

export default function GridCard({ title, text, buttons, bgColor, lightBgColor, order, imgs }) {
    const [screenWidth, setScreenWidth] = useState(1920);

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
        <div>
            <div className="mx-auto my-8 max-w-360 px-0 max-[1200px]:max-w-200">
                <div
                    className="flex shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] max-[1069px]:flex-col"
                    style={{ background: bgColor }}>
                    <div
                        className={`flex w-1/2 items-center justify-center max-[1069px]:w-auto max-[1069px]:px-[1.6rem] max-[1069px]:py-[3.2rem] ${screenWidth > 720 ? (order == 1 ? 'order-1' : 'order-2') : 'order-1'}`}
                        style={{ background: lightBgColor }}>
                        <div className="m-6 grid grid-cols-[2fr_2fr] gap-x-6 gap-y-2">
                            {imgs.map((img) => (
                                <div key={img['url']}>
                                    <Image
                                        src={img['url']}
                                        width={
                                            screenWidth > 1400
                                                ? 306
                                                : screenWidth > 1200
                                                  ? 294
                                                  : screenWidth > 720
                                                    ? 306
                                                    : 159
                                        }
                                        height={
                                            screenWidth > 1400
                                                ? 280
                                                : screenWidth > 1200
                                                  ? 269.23
                                                  : screenWidth > 720
                                                    ? 306
                                                    : 145.87
                                        }
                                        alt={img['alt']}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`flex w-1/2 items-center justify-center px-16 py-8 text-center max-[1069px]:w-auto max-[1069px]:px-[1.6rem] max-[1069px]:py-[3.2rem] max-[769px]:px-[5%] max-[769px]:py-[10%] ${screenWidth > 720 ? (order == 1 ? 'order-2' : 'order-1') : 'order-2'}`}>
                        <div>
                            <h2 className="mb-4 text-[50px] leading-[1.2] font-bold max-[1400px]:text-[40px] max-[1200px]:text-[40px] max-[1069px]:text-[28px]">
                                {title}
                            </h2>
                            <p className="text-[20px] font-normal max-[1200px]:text-[18px]">{text}</p>
                            <div className="mt-8 flex items-center justify-center gap-4">
                                {buttons.map((button) =>
                                    button['btnUrl'].startsWith('http') ? (
                                        <ExternalLinkButton
                                            key={button['btnText']}
                                            buttonText={button['btnText']}
                                            link={button['btnUrl']}
                                            main={false}
                                        />
                                    ) : (
                                        <LinkButton
                                            key={button['btnText']}
                                            buttonText={button['btnText']}
                                            link={button['btnUrl']}
                                            main={false}
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
