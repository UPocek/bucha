import { getLinkFromName } from '@/helper/helper'
import styles from './Variant.module.css'
import { mainCurrency } from '@/pages/_app'

export default function Variant({ name, price, selectedVariant, setSelectedVariant, procentageDiscount = undefined }) {
    return (
        <button className={`${styles.variant} ${selectedVariant.name == name && styles.selected}`} onClick={() => setSelectedVariant({ 'name': name, 'price': price })}>
            <img src={`/images/products/${getLinkFromName(name)}.webp`} alt={name} width={96} height={96} />
            <div className={styles.info}>
                <div>
                    <p className={styles.title}>{name}</p>
                    <p className={styles.price}>{price}{mainCurrency.toLowerCase()}</p>
                </div>
                {procentageDiscount && <p className={styles.save}>{`Uštedi ${procentageDiscount}%`}</p>}
            </div>
        </button>
    )
}