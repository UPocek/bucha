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
import { baseUrl, mainCurrency, shippingPrice, supportedCountries } from "../_app";
import ActionButton from "@/components/buttons/ActionButton";
import { Input } from "@/components/ui/input"
import { SelectSearch } from "@/components/ui/SelectSearch";
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner";
import axios from "axios";


const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap'
});

export default function Checkout() {
    const router = useRouter();
    const { cartItemCount, cartItems, emptyCart } = useCart();

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
        if (!checkOrderFilledCorrectly()) {
            return;
        }
        axios.post(`${baseUrl}/api/order`, { 'fullName': `${surname} ${name}`, 'email': email, 'phone': phone, 'address': address, 'city': city, 'postalCode': postalCode, 'country': country, 'note': note, 'products': cartItems })
            .then(response => {
                toast.success('Vaša porudžbina je uspešno kreirana! Čestitamo Kombuha avantura počinje 🎉');
                emptyCart();
                router.replace(`/hvala/${response.data.id}`);
            })
            .catch(error => {
                toast.error('Softverska greška ne sme da pokvari kombuha avanturu, zato molim te pošalji porudžbinu SMS-om na broj 063/427-280, i obradićemo je uz 20% popusta.');
                console.error(error);
            });
    }

    function checkOrderFilledCorrectly() {
        if (email.trim().length == 0 || !email.includes('@') || !email.includes('.')) {
            toast.error('Email nije ispravan. Pokušajte ponovo.');
            return false;
        }
        if (phone.trim().length == 0 || phone.trim().length < 9) {
            toast.error('Telefon nije ispravan. Pokušajte ponovo.');
            return false;
        }
        if (name.trim().length == 0) {
            toast.error('Ime nije ispravno. Pokušajte ponovo.');
            return false;
        }
        if (surname.trim().length == 0) {
            toast.error('Prezime nije ispravno. Pokušajte ponovo.');
            return false;
        }
        if (address.trim().length == 0) {
            toast.error('Adresa nije ispravna. Pokušajte ponovo.');
            return false;
        }
        if (city.trim().length == 0) {
            toast.error('Grad nije ispravan. Pokušajte ponovo.');
            return false;
        }
        if (postalCode.trim().length == 0) {
            toast.error('Poštanski broj nije ispravan. Pokušajte ponovo.');
            return false;
        }
        if (country.trim().length == 0) {
            toast.error('Država nije ispravna. Pokušajte ponovo.');
            return false;
        }
        if (cartItems.length == 0) {
            toast.error('Korpa je prazna. Pokušajte ponovo.');
            return false;
        }
        return true
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
                                    <Image src={`/images/products/${getLinkFromName(item.name)}.webp`} width={64} height={64} alt="bucha.rs proizvod" />
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