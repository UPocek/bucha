import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useCart } from '@/context/CartContext';
import ActionButton from '../buttons/ActionButton';
import { getLinkFromName } from '@/helper/helper';
import { getProductImagePath, getProductRoutePath } from '@/lib/catalog';
import { mainCurrency } from '@/pages/_app';

export default function ProductCard({ productId, productName, productPrice }) {
    const { addToCart } = useCart();
    const t = useTranslations('products');
    const a11y = useTranslations('accessibility');
    const resolvedProductName = productName || (productId ? t(`names.${productId}`) : '');
    const productHref = productId ? getProductRoutePath(productId) : `/proizvodi/${getLinkFromName(productName)}`;
    const productImage = productId
        ? getProductImagePath(productId)
        : `/images/products/${getLinkFromName(productName)}.webp`;

    return (
        <div aria-labelledby="productName" className="m-auto flex min-h-125 w-62.5 flex-col">
            <Link href={productHref}>
                <Image
                    className="rounded-(--BorderRadius)"
                    src={productImage}
                    width={250}
                    height={310}
                    alt={resolvedProductName}
                />
            </Link>
            <div className="flex flex-col pt-4 pb-2.5">
                <div className="min-h-27.5">
                    <Link
                        className="text-[20px] leading-[1.2] font-extrabold text-[#312c2c] no-underline"
                        id="productName"
                        aria-label={a11y('productName')}
                        href={productHref}>
                        {resolvedProductName}
                    </Link>
                    <p
                        className="my-2 mb-4 text-[16px] font-medium text-[#555]"
                        role="text"
                        aria-label={a11y('productPrice')}>{`${productPrice}${mainCurrency}`}</p>
                </div>
                <div className="m-auto">
                    <ActionButton
                        aria-label={a11y('addToCart')}
                        buttonText={t('addToCart')}
                        action={() => addToCart({ productId, quantity: 1, price: productPrice })}
                    />
                </div>
            </div>
        </div>
    );
}
