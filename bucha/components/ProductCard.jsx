import Image from "next/image";
import styles from "@/styles/ProductCard.module.css"
import MainButton from "./MainButton";

export default function ProductCard({ image, alt, productName, productPrice, link }) {
    return (
        <div className={styles.card}>
            <Image src={image} width={250} height={310} alt={alt} />
            <div className={styles.cardInfo}>
                <strong>{productName}</strong>
                <p>{productPrice}</p>
                <MainButton className={styles.correct} buttonText={"Poručite sada"} link={link} color={'blackOut'} />
            </div>
        </div>
    );
}