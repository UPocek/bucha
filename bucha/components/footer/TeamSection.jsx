import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function TeamSection() {
    const [screenWidth, setScreenWidth] = useState(1920);
    const t = useTranslations('teamSection');

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
        <div className="mx-auto my-12 max-w-360 px-[5%]">
            <div className="flex items-center justify-center gap-16 max-[769px]:flex-col max-[769px]:gap-4">
                <div className={screenWidth > 769 ? 'order-1' : 'order-2'}>
                    <Image
                        src={'/images/bucha_team.png'}
                        width={screenWidth > 1580 ? 400 : 300}
                        height={screenWidth > 1580 ? 400 : 300}
                        alt={t('imageAlt')}
                    />
                </div>
                <div className={screenWidth > 769 ? 'order-2' : 'order-1'}>
                    <div className="flex items-center gap-4 max-[769px]:flex-col max-[769px]:gap-2">
                        <h2 className="my-8 text-[50px] font-bold max-[1580px]:text-[40px] max-[1580px]:leading-[1.2] max-[769px]:mt-0 max-[769px]:mb-0 max-[769px]:text-[28px]">
                            {t('headingPrefix')}
                        </h2>
                        <div>
                            <Image
                                src={'/images/bucha_logo.png'}
                                width={screenWidth > 1580 ? 215.378 : screenWidth > 769 ? 161.534 : 215.378}
                                height={screenWidth > 1580 ? 60 : screenWidth > 769 ? 45 : 60}
                                alt={t('logoAlt')}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="mt-0 text-[20px] leading-[1.67] font-normal max-[1580px]:text-[18px] max-[769px]:mt-8 max-[769px]:text-center max-[769px]:text-[18px]">
                            {t('body')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
