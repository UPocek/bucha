import styles from './NavbarMobile.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext';
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
import { mainCurrency } from '@/pages/_app';
import LinkButton from '@/components/buttons/LinkButton';

export default function NavbarMobile() {
    const [active, setActive] = useState(false);
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
        <nav role="navigation" className={styles.nav}>
            <div className={styles.navBar}>
                <Link href='/'>
                    <div className={styles.icon}>
                        <Image src={'/images/bucha_logo.png'} width={171} height={47.25} alt='bucha icon' />
                    </div>
                </Link>
                <div className={styles.mainActionsContainer}>
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <button className={styles.cart}>
                                <Image src={'/images/cart_new.webp'} width={41} height={32} alt='Cart' />
                                <div>{cartItemCount}</div>
                            </button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className='text-2xl m-0 mb-2'>Korpa</SheetTitle>
                                <SheetDescription>
                                    {cartItemCount > 0 ? 'Hej, super izbor proizvoda 👍' : 'Idi na PRODAJA da izabereš prvi proizvod'}
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
                                                        <div className={styles.quantitySelectorExtraSmall}>
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
                    <svg onClick={() => setActive(!active)} className={`${styles.ham} ${styles.hamRotate} ${styles.ham4} ${active ? styles.active : ''}`} viewBox="0 0 100 100" width="80">
                        <path
                            className={`${styles.line} ${styles.top}`}
                            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                        <path
                            className={`${styles.line} ${styles.middle}`}
                            d="m 70,50 h -40" />
                        <path
                            className={`${styles.line} ${styles.bottom}`}
                            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                    </svg>
                </div>
            </div>
            <div className={`${styles.drawer} ${active ? styles.active : ''}`}>
                <ul>
                    <li>
                        <Link href='/prodaja'>PRODAJA</Link>
                    </li>
                    <li>
                        <Link href='/uputstva/priprema-kombuhe'>UPUTSTVO</Link>
                    </li>
                    <li>
                        <Link href='https://www.instagram.com/bucha.rs/'>MREŽE</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}