import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { mainCurrency } from '@/pages/_app';
import LinkButton from '@/components/buttons/LinkButton';
import { getProductFallbackName, getProductImagePath, getProductRoutePath } from '@/lib/catalog';
import LocaleSwitcher from '@/components/i18n/LocaleSwitcher';

export default function NavbarDesktop() {
    const { cartItemCount, cartItems, updateQuantity, removeFromCart, change, setChange } = useCart();
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const t = useTranslations('navigation');
    const productNameTranslations = useTranslations('products.names');
    const isCartSheetOpen = change || isSheetOpen;

    const handleSheetOpenChange = (open) => {
        setIsSheetOpen(open);

        if (!open && change) {
            setChange(false);
        }
    };

    const handleCheckoutClick = () => {
        setChange(false);
    };

    return (
        <nav
            role="navigation"
            className="sticky top-0 left-0 z-11 flex items-center justify-between bg-[rgba(255,255,255,0.98)] px-[10%] py-2 shadow-[0_0_0.125rem_rgba(0,0,0,0.12),0_0.125rem_0.25rem_rgba(0,0,0,0.14)]">
            <div className="flex items-center gap-6 [&_a]:cursor-pointer [&_a]:text-[16px] [&_a]:font-bold [&_a]:text-(--Primary) [&_a]:no-underline">
                <Link className="mr-2 flex items-center justify-center" href="/">
                    <Image src={'/images/bucha_logo.png'} width={228} height={63} alt="kombucha icon" />
                </Link>
                <Link className="mt-2" href="/prodaja">
                    {t('shop')}
                </Link>
                <Link className="mt-2" href="/uputstva/priprema-kombuhe">
                    {t('recipes')}
                </Link>
                <a className="mt-2" href="https://www.instagram.com/bucha.rs/" target="_blank">
                    {t('social')}
                </a>
            </div>
            <div className="flex items-center gap-3">
                <LocaleSwitcher variant="nav" />
                <Sheet open={isCartSheetOpen} onOpenChange={handleSheetOpenChange}>
                    <SheetTrigger asChild>
                        <button className="relative mt-2 cursor-pointer">
                            <Image src={'/images/cart_new.webp'} width={41} height={32} alt="Cart" />
                            <div className="absolute top-0 -right-2.5 flex h-6.25 w-6.25 items-center justify-center rounded-full bg-[#f3c76a] text-[12px]">
                                {cartItemCount}
                            </div>
                        </button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="m-0 mb-2 text-2xl">{t('cart.title')}</SheetTitle>
                            <SheetDescription>
                                {cartItemCount > 0 ? t('cart.descriptionFilled') : t('cart.descriptionEmpty')}
                            </SheetDescription>
                        </SheetHeader>
                        <div className="mt-6 flex flex-col">
                            {cartItemCount === 0 ? (
                                <p className="text-center text-xl">{t('cart.empty')}</p>
                            ) : (
                                <div>
                                    {cartItems.map((item) => (
                                        <div
                                            className="flex gap-5 border-b border-(--PrimaryHover) py-8"
                                            key={item.productId || item.fallbackName}>
                                            {(() => {
                                                const productName = item.productId
                                                    ? productNameTranslations(item.productId)
                                                    : item.fallbackName || getProductFallbackName(item.productId);

                                                return (
                                                    <>
                                                        <Image
                                                            className="aspect-square rounded-(--BorderRadius)"
                                                            src={getProductImagePath(item.productId)}
                                                            width={96}
                                                            height={96}
                                                            alt={`${productName} ${t('cart.itemInCart')}`}
                                                        />
                                                        <div className="flex flex-col justify-between">
                                                            <Link
                                                                className="text-[16px] leading-[1.2] font-semibold tracking-[-0.025em] transition-colors duration-250 hover:text-(--MainAccentColor)"
                                                                href={getProductRoutePath(item.productId)}>
                                                                {productName}
                                                            </Link>
                                                            <div className="flex items-center justify-between gap-2">
                                                                <div className="flex w-25 items-center justify-between rounded-(--BorderRadius) border border-(--Primary) text-[1rem]">
                                                                    <button
                                                                        className="w-7.5 cursor-pointer rounded-(--BorderRadius) border-0 bg-(--BG) text-[22px] leading-[1.3] transition-colors duration-250 hover:bg-(--BGHover)"
                                                                        disabled={item.quantity == 1}
                                                                        onClick={() =>
                                                                            updateQuantity(
                                                                                item.productId,
                                                                                item.quantity - 1,
                                                                            )
                                                                        }>
                                                                        -
                                                                    </button>
                                                                    <input
                                                                        className="w-[2em] border-0 text-center text-[16px] outline-none"
                                                                        type="text"
                                                                        value={item.quantity}
                                                                        onChange={(e) =>
                                                                            updateQuantity(
                                                                                item.productId,
                                                                                +e.target.value,
                                                                            )
                                                                        }
                                                                    />
                                                                    <button
                                                                        className="w-7.5 cursor-pointer rounded-(--BorderRadius) border-0 bg-(--BG) pb-0.5 text-[22px] leading-[1.3] transition-colors duration-250 hover:bg-(--BGHover)"
                                                                        disabled={item.quantity >= 10}
                                                                        onClick={() =>
                                                                            updateQuantity(
                                                                                item.productId,
                                                                                item.quantity + 1,
                                                                            )
                                                                        }>
                                                                        +
                                                                    </button>
                                                                </div>
                                                                <p className="pr-1 text-[14px] leading-none font-bold">{`${item.price}${mainCurrency.toLowerCase()}`}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button
                                                                className="flex cursor-pointer align-top"
                                                                onClick={() => removeFromCart(item.productId)}>
                                                                <Image
                                                                    className="aspect-square opacity-40"
                                                                    src={'/images/close.png'}
                                                                    width={12}
                                                                    height={12}
                                                                    alt="Remove"
                                                                />
                                                            </button>
                                                        </div>
                                                    </>
                                                );
                                            })()}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <SheetFooter className="mt-9 flex flex-col gap-10 sm:flex-col">
                            <div className="flex w-full items-center justify-between [&_p]:m-0">
                                <p className="text-[15px] font-bold tracking-widest text-(--PrimaryHover) uppercase">
                                    {t('cart.totalLabel')}
                                </p>
                                <p className="text-[32px] font-bold uppercase">{`${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} ${mainCurrency}`}</p>
                            </div>
                            <div className="ml-0 w-full [&>a]:w-full">
                                <LinkButton
                                    buttonText={t('cart.checkout')}
                                    link="/porucivanje"
                                    onClick={handleCheckoutClick}
                                />
                            </div>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
