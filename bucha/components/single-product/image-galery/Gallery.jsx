import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Gallery.module.css"

export default function Gallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

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
        <div role="group" className={styles.gallery}>
            <div className={styles.mainImage}>
                <Image priority={true} role="img" aria-label="Main product image" src={selectedImage} width={screenWidth > 1200 ? 600 : screenWidth > 1069 ? 400 : 350} height={screenWidth > 1200 ? 600 : screenWidth > 1069 ? 400 : 350} alt={"Glavna slika proizvoda"} />
            </div>
            <div className={styles.other}>
                {images.filter(image => image != selectedImage).map((image) => <Image onClick={() => setSelectedImage(image)} key={image} src={image} width={screenWidth > 1200 ? 100 : screenWidth > 1069 ? 70 : 60} height={screenWidth > 1200 ? 100 : screenWidth > 1069 ? 70 : 60} alt={image} />)}
            </div>
        </div>
    );
}