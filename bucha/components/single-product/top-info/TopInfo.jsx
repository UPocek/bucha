import { useState } from 'react'
import styles from './TopInfo.module.css'
import { useCart } from '@/context/CartContext';
import ActionButton from '@/components/buttons/ActionButton';
import { mainCurrency } from '@/pages/_app';

export default function TopInfo({ title, shortDescription, price }) {
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    return (
        <div className={styles.top}>
            <h1 aria-label="Product Name">{title}</h1>
            <p role='text' aria-label="Product price" className={styles.price}>{`${price}${mainCurrency}`}</p>
            {shortDescription.map(description => <p key={description}>{description}</p>)}

            <div className={styles.actions}>
                <div className={styles.quantitySelector}>
                    <button style={{ paddingBottom: 8 }} disabled={quantity == 1} onClick={() => setQuantity(prev => prev - 1)}>-</button>
                    <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    <button disabled={quantity >= 10} onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <ActionButton buttonText={"DODAJ U KORPU"} action={() => { addToCart({ 'name': title, 'quantity': quantity, 'price': price }); setQuantity(1); }} />
            </div>
        </div>
    )
}