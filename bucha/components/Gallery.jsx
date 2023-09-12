import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/Gallery.module.css"

export default function Gallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [screenWidth, setScreenWidth] = useState(1920);

    useEffect(() => {
        window && setScreenWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <div className={styles.mainImage}>
                <Image src={selectedImage} width={screenWidth > 768 ? 600 : 300} height={screenWidth > 768 ? 744 : 372} alt={"slika proizoda glavna"} />
            </div>
            <div className={styles.other}>
                {images.filter(imageName => imageName != selectedImage).map((image) => <Image onClick={() => setSelectedImage(image)} key={image} src={image} width={screenWidth > 768 ? 130 : 71.5} height={screenWidth > 768 ? 161.2 : 88.66} alt={image} />)}
            </div>
        </div>
    );
}