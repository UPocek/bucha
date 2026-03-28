import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getLinkFromName } from '@/helper/helper';
import { mainCurrency } from '@/pages/_app';
import { cn } from '@/lib/utils';
import { getProductImagePath } from '@/lib/catalog';

export default function Variant({
    productId,
    name,
    price,
    selectedVariant,
    setSelectedVariant,
    procentageDiscount = undefined,
}) {
    const t = useTranslations('products');
    const productImage = productId ? getProductImagePath(productId) : `/images/products/${getLinkFromName(name)}.webp`;

    return (
        <button
            className={cn(
                'my-3 flex h-28 w-full cursor-pointer gap-5 rounded-(--BorderRadius) border border-(--OutOfFocus) p-2 transition-[border] duration-250 hover:border-(--MainAccentColor)',
                selectedVariant.name == name && 'border-(--MainAccentColor)',
            )}
            onClick={() => setSelectedVariant({ productId, name: name, price: price })}>
            <Image
                className="aspect-square rounded-(--BorderRadius)"
                src={productImage}
                alt={name}
                width={96}
                height={96}
            />
            <div className="m-0 flex h-full flex-col justify-between">
                <div>
                    <p className="m-0 mb-1 p-0 text-left text-[16px] leading-[1.2] font-semibold tracking-[-0.025em]">
                        {name}
                    </p>
                    <p className="m-0 p-0 text-left text-[14px] text-(--PrimaryHover)">
                        {price}
                        {mainCurrency.toLowerCase()}
                    </p>
                </div>
                {procentageDiscount && (
                    <p className="m-0 p-0 text-left text-[16px] font-extrabold text-(--MainAccentColor)">
                        {t('savePercent', { percent: procentageDiscount })}
                    </p>
                )}
            </div>
        </button>
    );
}
