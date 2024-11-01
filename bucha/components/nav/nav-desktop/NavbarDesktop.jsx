import { useCart } from '@/context/CartContext';
import styles from './NavbarDesktop.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    SheetTrigger
} from "@/components/ui/sheet";
import { getLinkFromName } from '@/helper/helper';
import { useEffect, useState } from 'react';
import { mainCurrency } from '@/pages/_app';
import LinkButton from '@/components/buttons/LinkButton';

export default function NavbarDesktop() {
    const { cartItemCount, cartItems, updateQuantity, removeFromCart, change, setChange } = useCart();
    const [isSheetOpen, setIsSheetOpen] = useState(false);  // State to control Sheet visibility

    // Automatically open Sheet when cartItems change
    useEffect(() => {
        if (cartItems.length > 0 && change) {
            setChange(false);
            setIsSheetOpen(true);
        }
    }, [cartItems]);

    return (
        <>
            <nav role="navigation" className={styles.nav}>
                <div className={styles.items}>
                    <Link className={styles.logo} href='/'>
                        <Image src={'/images/bucha_logo.png'} width={228} height={63} alt='bucha icon' />
                    </Link>
                    <Link style={{ marginTop: 8 }} href='/prodaja'>PRODAJA</Link>
                    <Link style={{ marginTop: 8 }} href='/uputstva/priprema-kombuhe'>RECEPTI</Link>
                    <a style={{ marginTop: 8 }} href='https://www.instagram.com/bucha.rs/' target='_blank'>MREŽE</a>
                </div>
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <button style={{ marginTop: 8 }} className={styles.cart}>
                            <Image src={'/images/cart_new.webp'} width={41} height={32} alt='Cart' />
                            <div>{cartItemCount}</div>
                        </button>
                    </SheetTrigger>
                    <SheetContent className='w-96'>
                        <SheetHeader>
                            <SheetTitle className='text-2xl m-0 mb-2'>Korpa</SheetTitle>
                            <SheetDescription>
                                Hej, super izbor proizvoda 👍
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col mt-6">
                            {cartItemCount === 0 ? (
                                <p className="text-center text-xl">Vaša korpa je prazna.</p>
                            ) : (
                                <div>
                                    {cartItems.map(item => (
                                        <div className={styles.cartItem} key={item.name}>
                                            <Image className={styles.productImage} src={`/images/products/${getLinkFromName(item.name)}.webp`} width={96} height={96} alt={`${item.name} je u korpi`} />
                                            <div className={styles.productInfo}>
                                                <Link href={`/proizvodi/${getLinkFromName(item.name)}`}>{item.name}</Link>
                                                <div>
                                                    <div className={styles.quantitySelectorSmall}>
                                                        <button disabled={item.quantity == 1} onClick={() => updateQuantity(item.name, item.quantity - 1)}>-</button>
                                                        <input type="text" value={item.quantity} onChange={(e) => updateQuantity(item.name, +e.target.value)} />
                                                        <button style={{ paddingBottom: 2 }} disabled={item.quantity >= 10} onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
                                                    </div>
                                                    <p className='pr-1'>{`${item.price}${mainCurrency.toLowerCase()}`}</p>
                                                </div>
                                            </div>
                                            <button className='flex align-top' onClick={() => removeFromCart(item.name)}>
                                                <Image className={styles.removeIcon} src={'/images/close.png'} width={12} height={12} alt='Remove' />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <SheetFooter className='mt-9 flex flex-col gap-10 sm:flex-col'>
                            <div className={styles.cartTotal}>
                                <p className={styles.subtotal}>Ukupno:</p>
                                <p className={styles.price}>{`${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)} ${mainCurrency}`}</p>
                            </div>
                            <div className={styles.cartButtonContainer}>
                                <LinkButton buttonText={'Naruči'} link="/porucivanje" />
                            </div>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>
        </>
    );
}
