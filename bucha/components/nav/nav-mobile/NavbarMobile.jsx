import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from '@/components/ui/sheet';
import { mainCurrency } from '@/pages/_app';
import LinkButton from '@/components/buttons/LinkButton';
import { getProductFallbackName, getProductImagePath, getProductRoutePath } from '@/lib/catalog';
import LocaleSwitcher from '@/components/i18n/LocaleSwitcher';

export default function NavbarMobile() {
    const [active, setActive] = useState(false);
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
        <nav role="navigation" className="fixed top-0 left-0 z-1 h-0 w-0">
            <div className="flex h-20 w-screen items-center justify-between bg-(--BG) px-[4%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <Link href="/">
                    <div>
                        <Image
                            className="h-auto w-[8.9rem] sm:w-[10.7rem]"
                            src={'/images/bucha_logo.png'}
                            width={171}
                            height={47.25}
                            alt="bucha icon"
                        />
                    </div>
                </Link>
                <div className="flex items-center gap-2.5">
                    <LocaleSwitcher variant="nav" compact />
                    <Sheet open={isCartSheetOpen} onOpenChange={handleSheetOpenChange}>
                        <SheetTrigger asChild>
                            <button className="relative cursor-pointer">
                                <Image src={'/images/cart_new.webp'} width={41} height={32} alt="Cart" />
                                <div className="absolute top-0 -right-2.5 flex h-6.25 w-6.25 items-center justify-center rounded-full bg-[#f3c76a] text-[12px]">
                                    {cartItemCount}
                                </div>
                            </button>
                        </SheetTrigger>
                        <SheetContent>
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
                                                className="flex gap-2.5 border-b border-(--PrimaryHover) py-8"
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
                                                                    <div className="flex w-20 items-center justify-between rounded-(--BorderRadius) border border-(--Primary) text-[1rem]">
                                                                        <button
                                                                            className="w-6.25 cursor-pointer rounded-(--BorderRadius) border-0 bg-(--BG) text-[22px] leading-[1.3] transition-colors duration-250 hover:bg-(--BGHover)"
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
                                                                            className="w-6.25 cursor-pointer rounded-(--BorderRadius) border-0 bg-(--BG) pb-0.5 text-[22px] leading-[1.3] transition-colors duration-250 hover:bg-(--BGHover)"
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
                                                            <button
                                                                className="flex cursor-pointer align-top"
                                                                onClick={() => removeFromCart(item.productId)}>
                                                                <Image
                                                                    className="opacity-40"
                                                                    src={'/images/close.png'}
                                                                    width={12}
                                                                    height={12}
                                                                    alt="Remove"
                                                                />
                                                            </button>
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
                    <svg
                        onClick={() => setActive(!active)}
                        className={cn(
                            'cursor-pointer transition-[transform] duration-400 select-none [-webkit-tap-highlight-color:transparent]',
                            active && 'rotate-45',
                        )}
                        viewBox="0 0 100 100"
                        width="72">
                        <path
                            className={cn(
                                'fill-none stroke-black stroke-[5.5] transition-[stroke-dasharray,stroke-dashoffset] duration-400 [stroke-dasharray:40_121] [stroke-linecap:round]',
                                active && '[stroke-dashoffset:-68px]',
                            )}
                            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                        />
                        <path
                            className="fill-none stroke-black stroke-[5.5] transition-[stroke-dasharray,stroke-dashoffset] duration-400 [stroke-linecap:round]"
                            d="m 70,50 h -40"
                        />
                        <path
                            className={cn(
                                'fill-none stroke-black stroke-[5.5] transition-[stroke-dasharray,stroke-dashoffset] duration-400 [stroke-dasharray:40_121] [stroke-linecap:round]',
                                active && '[stroke-dashoffset:-68px]',
                            )}
                            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                        />
                    </svg>
                </div>
            </div>
            <div
                className={cn(
                    'my-px h-screen w-75 -translate-x-[200%] bg-(--BG) transition-transform duration-500 ease-in-out [&>ul]:list-none [&>ul]:p-[2rem_1rem] [&>ul]:font-normal [&>ul>li]:my-[1.2rem] [&>ul>li>a]:cursor-pointer [&>ul>li>a]:text-[20px] [&>ul>li>a]:font-bold [&>ul>li>a]:text-(--Primary) [&>ul>li>a]:no-underline',
                    active && 'translate-x-0',
                )}>
                <ul>
                    <li>
                        <Link href="/prodaja">{t('shop')}</Link>
                    </li>
                    <li>
                        <Link href="/uputstva/priprema-kombuhe">{t('instructions')}</Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/bucha.rs/" target="_blank" rel="noreferrer">
                            {t('social')}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
