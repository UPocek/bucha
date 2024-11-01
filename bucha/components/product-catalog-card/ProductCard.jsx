import Image from "next/image";
import styles from "./ProductCard.module.css"
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import ActionButton from "../buttons/ActionButton";
import { getLinkFromName } from "@/helper/helper";
import { mainCurrency } from "@/pages/_app";

export default function ProductCard({ productName, productPrice }) {
    const { addToCart } = useCart();

    return (
        <div aria-labelledby="productName" className={styles.card}>
            <Link href={`/proizvodi/${getLinkFromName(productName)}`}>
                <Image src={`/images/products/${getLinkFromName(productName)}.webp`} width={250} height={310} alt={productName} />
            </Link>
            <div className={styles.cardInfo}>
                <div>
                    <Link id="productName" aria-label="Product Name" href={`/proizvodi/${getLinkFromName(productName)}`}>{productName}</Link>
                    <p role='text' aria-label="Product price">{`${productPrice}${mainCurrency}`}</p>
                </div>
                <ActionButton aria-label="Add to cart" buttonText={"Dodaj u korpu"} action={() => addToCart({ 'name': productName, 'quantity': 1, 'price': productPrice })} />
            </div>
        </div>
    );
}