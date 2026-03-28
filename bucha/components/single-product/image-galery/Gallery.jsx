import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Gallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const t = useTranslations('accessibility');

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
        <div role="group" className="max-[1069px]:m-auto">
            <div>
                <Image
                    className="aspect-square rounded-(--BorderRadius) object-cover"
                    priority={true}
                    role="img"
                    aria-label={t('mainProductImage')}
                    src={selectedImage}
                    width={screenWidth > 1200 ? 600 : screenWidth > 1069 ? 400 : 350}
                    height={screenWidth > 1200 ? 600 : screenWidth > 1069 ? 400 : 350}
                    alt={t('mainProductImage')}
                />
            </div>
            <div className="mt-5 grid grid-cols-5 place-items-center gap-5 max-[1200px]:mt-2.5 max-[1200px]:gap-2.5">
                {images.map((image) => (
                    <Image
                        className="aspect-square cursor-pointer rounded-(--BorderRadius) object-cover"
                        onClick={() => setSelectedImage(image)}
                        key={image}
                        src={image}
                        width={screenWidth > 1200 ? 100 : screenWidth > 1069 ? 70 : 60}
                        height={screenWidth > 1200 ? 100 : screenWidth > 1069 ? 70 : 60}
                        alt={image}
                    />
                ))}
            </div>
        </div>
    );
}
