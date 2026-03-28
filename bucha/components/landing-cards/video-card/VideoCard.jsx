import LinkButton from '@/components/buttons/LinkButton';
import { useEffect, useState } from 'react';

export default function VideoCard({ title, text, buttons, bgColor, lightBgColor, order, videoUrl = '' }) {
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
        <div className="mt-8 max-[1069px]:mt-26">
            <div className="mx-auto mb-8 max-w-360">
                <div
                    className="flex text-(--BG) shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] max-[1069px]:flex-col"
                    style={{ background: bgColor }}>
                    <div
                        className={`flex w-1/2 items-center justify-center max-[1069px]:w-auto max-[1200px]:[&>video]:overflow-hidden ${order == 1 ? 'order-1' : 'order-2'}`}
                        style={{ background: lightBgColor }}>
                        {videoUrl && (
                            <video
                                src={videoUrl}
                                autoPlay
                                loop
                                muted
                                controls
                                webkit-playsinline="true"
                                playsInline
                                style={{
                                    width:
                                        screenWidth > 1400
                                            ? 720
                                            : screenWidth > 1200
                                              ? 691
                                              : screenWidth > 720
                                                ? 720
                                                : 360,
                                    height:
                                        screenWidth > 1400
                                            ? 625
                                            : screenWidth > 1200
                                              ? 599.83
                                              : screenWidth > 720
                                                ? 625
                                                : 312.5,
                                }}
                            />
                        )}
                    </div>
                    <div
                        className={`flex w-1/2 items-center justify-center px-16 py-8 text-center max-[1069px]:w-auto max-[769px]:px-[5%] max-[769px]:py-[10%] ${order == 1 ? 'order-2' : 'order-1'}`}>
                        <div>
                            <h2 className="mb-4 text-[50px] leading-[1.2] font-bold max-[1400px]:text-[40px] max-[1069px]:text-[28px]">
                                {title}
                            </h2>
                            <p className="text-[20px] font-normal max-[1200px]:text-[18px]">{text}</p>
                            <div className="mt-8 flex items-center justify-center gap-4 [&>a]:m-0">
                                {buttons.map((button) => (
                                    <LinkButton
                                        key={button['btnText']}
                                        buttonText={button['btnText']}
                                        link={button['btnUrl']}
                                        main={false}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
