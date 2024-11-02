import Footer from "@/components/footer/Footer";
import NavWrapper from "@/components/nav/Navbar";
import Head from "next/head";
import styles from "@/styles/ThankYou.module.css"
import { Arimo } from 'next/font/google'
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl, mainCurrency, shippingPrice } from "../_app";
import { toast } from "sonner";
import { getCountryFromCode, getLinkFromName } from "@/helper/helper";
import Image from "next/image";


const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap'
});

export default function ThankYou() {
    const router = useRouter();
    const [order, setOrder] = useState(null);
    const orderCreatedDate = useMemo(() => {
        if (order) {
            return new Date(order['createdAt']);
        }
        return null;
    }, [order])

    useEffect(() => {
        const { id } = router.query;
        if (id) {
            axios.get(`${baseUrl}/api/order/${id}`)
                .then(response => {
                    console.log(response.data)
                    setOrder(response.data);
                })
                .catch(_ => {
                    toast.error('Zatražena podružbina ne postoji. Ukoliko mislite da je došlo do greške pišite nam na: tamarailic11@gmail.com');
                    router.replace('/');
                })
        }
    }, [router.query])

    return (
        <>
            <Head>
                <title>Porudžbina | bucha.rs</title>
                <meta name="robots" content="noindex" />
                <meta name="description" content="Uspešna porudžbina" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
            </Head>
            <NavWrapper />
            <main role="main" className={`${styles.main} ${arimo.className}`}>
                {order ?
                    <>
                        <div className={styles.left}>
                            <div className={styles.confirmationContainer}>
                                <h1 className={styles.title}>Porudžbina je uspešno kreirana.</h1>
                                <Image style={{ marginBottom: 16 }} src={'/images/check.png'} width={24} height={24} alt="Confirmed" />
                            </div>
                            <p className={styles.subTitle}>Proverite svoj email za potvrdu porudžbine.</p>
                            <p>Broj porudžbine: {order['id']}</p>
                            <p>Status: {order['status']}</p>
                            <p>Datum kreiranja porudžbine: {new Date(order['createdAt']).toLocaleDateString('sr-RS')}</p>
                            <p>Poslali smo detalje o potvrdi na: {order['email']}</p>
                            <hr />
                            <p className={styles.title}>Isporuka za</p>
                            <p>{order['fullName']}</p>
                            <p>{order['address']}</p>
                            <p>{order['postalCode']}, {order['city']}</p>
                            <p>{getCountryFromCode(order['country'])}</p>
                            <p>{order['email']}</p>
                            <p>{order['phone']}</p>
                            <hr />
                            <p className={styles.title}>Plaćanje</p>
                            <p>Pouzećem po isporuci</p>
                            <hr />
                            <p className={styles.title}>Napomena</p>
                            <p>{order['note']}</p>
                        </div>
                        <div>
                            <p className={styles.title}>Pregled porudžbine:</p>
                            <p>{`Isporuku očujete između ${new Date(orderCreatedDate.setDate(orderCreatedDate.getDate() + 2)).toLocaleDateString('sr-RS')} i ${new Date(orderCreatedDate.setDate(orderCreatedDate.getDate() + 7)).toLocaleDateString('sr-RS')}`}</p>
                            <div className={styles.itemsOverview}>
                                {order['products'].map((item, index) => (
                                    <div key={index} className={styles.item}>
                                        <div>
                                            <Image src={`/images/products/${getLinkFromName(item.name)}.webp`} width={64} height={64} alt={item['name']} />
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
                                    <p className={styles.value}>{`${order['products'].reduce((total, item) => total + item.price * item.quantity, 0)}${mainCurrency.toLowerCase()}`}</p>
                                </div>
                                <div>
                                    <p className={styles.label}>Poštarina</p>
                                    <p className={styles.value}>{`${shippingPrice != 0 ? `${shippingPrice}${mainCurrency.toLowerCase()}` : 'Standardna kurirska taksa'}`}</p>
                                </div>
                                <div>
                                    <p className={styles.labelBig}>Ukupno</p>
                                    <p className={styles.valueBig}>{`${order['products'].reduce((total, item) => total + item.price * item.quantity, 0) + shippingPrice} ${mainCurrency}`}</p>
                                </div>
                            </div>
                        </div>
                    </> :
                    <div className={styles.loading}>
                        <div className={styles.loadingio_spinner_spinner_2by998twmg8}><div className={styles.ldio_yzaezf3dcmj}>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div></div>
                    </div>
                }
            </main>
            <Footer />
        </>
    )
}