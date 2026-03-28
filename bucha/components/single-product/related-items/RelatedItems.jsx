import ProductCard from '@/components/product-catalog-card/ProductCard';
import { useTranslations } from 'next-intl';

export default function RelatedItems({ items = [] }) {
    const t = useTranslations('relatedItems');

    return (
        <div role="list" className="my-24 max-[1069px]:px-[5%]">
            <p className="mb-8 border-b-2 border-(--OutOfFocus) pb-8 text-[2rem] leading-[1.2] font-bold">
                {t('title')}
            </p>
            <div className="mx-auto grid grid-cols-4 gap-8 max-[1280px]:gap-4 max-[1069px]:grid-cols-3 max-[1069px]:gap-x-8 max-[1069px]:gap-y-16 max-[900px]:grid-cols-2 max-[769px]:grid-cols-1 max-[769px]:place-items-center max-[600px]:grid-cols-1">
                {items.map((item) => (
                    <ProductCard
                        key={item.productId || item.name}
                        productId={item.productId}
                        productName={item.name}
                        productPrice={item.price}
                    />
                ))}
            </div>
        </div>
    );
}
