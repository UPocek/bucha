import Footer from "@/components/footer/Footer";
import NavWrapper from "@/components/nav/Navbar";
import Head from "next/head";
import styles from "@/styles/Checkout.module.css"
import { Arimo } from 'next/font/google'
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { getLinkFromName } from "@/helper/helper";
import { mainCurrency, shippingPrice, supportedCountries } from "../_app";
import ActionButton from "@/components/buttons/ActionButton";
import { Input } from "@/components/ui/input"
import { SelectSearch } from "@/components/ui/SelectSearch";
import { Textarea } from "@/components/ui/textarea"


const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap'
});

export default function Checkout() {
    const router = useRouter();
    const { cartItemCount, cartItems, updateQuantity } = useCart();

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('RS')
    const [note, setNote] = useState('')

    useEffect(() => {
        if (cartItemCount == 0) {
            router.push('/prodaja');
        }
    }, [])

    function createOrder() {

    }

    return (
        <>
            <Head>
                <title>Poručivanje | bucha.rs</title>
                <meta name="robots" content="noindex" />
                <meta name="description" content="Još samo korak te deli od zdravlja. Kompletiraj svoju porudžbinu." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta property="og:title" content="Poručivanje | bucha.rs" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Još samo korak te deli od zdravlja. Kompletiraj svoju porudžbinu." />
                <meta property="og:url" content="https://www.bucha.rs/porucivanje" />
                <meta property="og:site_name" content="bucha.rs" />
            </Head>
            <NavWrapper />
            <main role="main" className={`${styles.main} ${arimo.className}`}>
                <form className={styles.form}>
                    <p style={{ marginTop: 0 }} className={styles.sectionLabel}>Kontakt</p>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Telefon" />
                    <p className={styles.sectionLabel}>Podaci</p>
                    <div className={styles.grid2}>
                        <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Ime" />
                        <Input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" placeholder="Prezime" />
                    </div>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Adresa" />
                    <Input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Grad" />
                    <Input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type="text" placeholder="Poštanski broj" />
                    <SelectSearch items={supportedCountries} selectedItem={'RS'} onChange={(c) => setCountry(c)} text="Država" />
                    <p className={styles.sectionLabel}>Napomena (opciono)</p>
                    <Textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Zahtevi za narudžbinu" />
                </form>
                <div className={styles.placeOrder}>
                    <div className={styles.itemsOverview}>
                        {cartItems.map((item, index) => (
                            <div key={index} className={styles.item}>
                                <div>
                                    <Image src={`/images/products/${getLinkFromName(item.name)}.webp`} width={64} height={64} />
                                    <div className={styles.itemInfo}>
                                        <div className={styles.itemName}>{item.name}</div>
                                        <div className={styles.itemQuantity}>{`x${item.quantity}`}</div>
                                    </div>
                                </div>
                                <p className={styles.itemTotal}>{`${item.price * item.quantity}${mainCurrency.toLowerCase()}`}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.priceOverview}>
                        <div>
                            <p className={styles.label}>Ukupno</p>
                            <p className={styles.value}>{`${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}${mainCurrency.toLowerCase()}`}</p>
                        </div>
                        <div>
                            <p className={styles.label}>Poštarina</p>
                            <p className={styles.value}>{`${shippingPrice != 0 ? `${shippingPrice}${mainCurrency.toLowerCase()}` : 'Standardna kurirska taksa'}`}</p>
                        </div>
                        <div>
                            <p className={styles.labelBig}>Ukupno</p>
                            <p className={styles.valueBig}>{`${cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + shippingPrice} ${mainCurrency}`}</p>
                        </div>
                    </div>
                    <div className={styles.actionsOverview}>
                        <ActionButton buttonText='Poruči' action={createOrder} />
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}