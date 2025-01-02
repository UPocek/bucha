import { useState } from 'react'
import styles from './TopInfo.module.css'
import { useCart } from '@/context/CartContext';
import ActionButton from '@/components/buttons/ActionButton';
import { mainCurrency } from '@/pages/_app';
import Variant from '../variant/Variant';

export default function TopInfo({ selectedVariant, setSelectedVariant, shortDescription, variants }) {
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    return (
        <div className={styles.top}>
            <h1 aria-label="Product Name">{selectedVariant.name}</h1>
            <p role='text' aria-label="Product price" className={styles.price}>{`${selectedVariant.price}${mainCurrency}`}</p>
            {shortDescription.map((description, index) => index == 0 ? <h2 key={description}>{description}</h2> : <p key={description}>{description}</p>)}

            {
                variants.length > 1 && (
                    <>
                        <p className={styles.variantsTitle}>Izaberi opciju</p>
                        <div className={styles.variants}>
                            {variants.map(variant => <Variant key={variant.name} name={variant.name} price={variant.price} procentageDiscount={variant.procentageDiscount} selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant} />)}
                        </div>
                    </>
                )
            }

            <div className={styles.actions}>
                <div className={styles.quantitySelector}>
                    <button style={{ paddingBottom: 8 }} disabled={quantity == 1} onClick={() => setQuantity(prev => prev - 1)}>-</button>
                    <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    <button disabled={quantity >= 10} onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <ActionButton buttonText={"DODAJ U KORPU"} action={() => { addToCart({ 'name': selectedVariant.name, 'quantity': quantity, 'price': selectedVariant.price }); setQuantity(1); }} />
            </div>
        </div>
    )
}