import ProductCard from '@/components/product-catalog-card/ProductCard'
import styles from './RelatedItems.module.css'

export default function RelatedItems({ items = [] }) {
    return (
        <div role="list" className={styles.realtedItems}>
            <p>Povezani proizvodi</p>
            <div className={styles.itemsGrid}>
                {items.map((item) => (
                    <ProductCard key={item.name} productName={item.name} productPrice={item.price} image={item.image} alt={item.name} link={item.link} />
                ))}
            </div>
        </div>
    )
}