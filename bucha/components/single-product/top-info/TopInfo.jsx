import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useCart } from '@/context/CartContext';
import ActionButton from '@/components/buttons/ActionButton';
import { mainCurrency } from '@/pages/_app';
import Variant from '../variant/Variant';

function renderShortDescription(description) {
    if (typeof description === 'string') {
        return description;
    }

    return (
        <>
            {description.textBefore}
            <Link
                href={description.href}
                className="underline underline-offset-2 transition-colors duration-250 hover:text-(--PrimaryHover)">
                {description.linkText}
            </Link>
            {description.textAfter}
        </>
    );
}

export default function TopInfo({ selectedVariant, setSelectedVariant, shortDescription, variants }) {
    const { addToCart } = useCart();
    const t = useTranslations('products');
    const a11y = useTranslations('accessibility');

    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <h1
                className="mt-4 mb-0 text-[32px] tracking-[-0.02em] max-[1069px]:text-[28px] max-[769px]:text-[24px]"
                aria-label={a11y('productName')}>
                {selectedVariant.name}
            </h1>
            <p
                role="text"
                aria-label={a11y('productPrice')}
                className="my-5 text-[24px] font-semibold text-(--PrimaryHover) max-[1069px]:text-[22px] max-[769px]:text-[20px]">{`${selectedVariant.price}${mainCurrency}`}</p>
            {shortDescription.map((description, index) =>
                index == 0 ? (
                    <h2 className="m-0 mb-[1em] text-[18px] leading-[1.67] wrap-break-word" key={index}>
                        {renderShortDescription(description)}
                    </h2>
                ) : (
                    <p
                        className="m-0 mb-[1em] text-[18px] leading-[1.67] wrap-break-word max-[769px]:text-[16px]"
                        key={index}>
                        {renderShortDescription(description)}
                    </p>
                ),
            )}

            {variants.length > 1 && (
                <>
                    <p className="mt-8 mb-2 text-[24px] font-semibold">{t('chooseOption')}</p>
                    <div className="flex flex-col">
                        {variants.map((variant) => (
                            <Variant
                                productId={variant.productId}
                                key={variant.name}
                                name={variant.name}
                                price={variant.price}
                                procentageDiscount={variant.procentageDiscount}
                                selectedVariant={selectedVariant}
                                setSelectedVariant={setSelectedVariant}
                            />
                        ))}
                    </div>
                </>
            )}

            <div className="mt-8 flex gap-8 max-[769px]:gap-4">
                <div className="flex w-37.5 items-center justify-between rounded-(--BorderRadius) border border-(--Primary) text-[1rem]">
                    <button
                        className="w-12.5 cursor-pointer rounded-(--BorderRadius) border-0 bg-(--BG) text-[35px] transition-colors duration-250 hover:bg-(--BGHover)"
                        disabled={quantity == 1}
                        onClick={() => setQuantity((prev) => prev - 1)}>
                        -
                    </button>
                    <input
                        className="w-[2em] border-0 text-center text-[18px] outline-none"
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                        className="w-12.5 cursor-pointer rounded-(--BorderRadius) border-0 bg-(--BG) text-[35px] transition-colors duration-250 hover:bg-(--BGHover)"
                        disabled={quantity >= 10}
                        onClick={() => setQuantity((prev) => prev + 1)}>
                        +
                    </button>
                </div>
                <ActionButton
                    buttonText={t('addToCartUppercase')}
                    action={() => {
                        addToCart({
                            productId: selectedVariant.productId,
                            name: selectedVariant.name,
                            quantity: quantity,
                            price: selectedVariant.price,
                        });
                        setQuantity(1);
                    }}
                />
            </div>
        </div>
    );
}
