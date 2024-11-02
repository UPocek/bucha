import Footer from "@/components/footer/Footer";
import NavWrapper from "@/components/nav/Navbar";
import Head from "next/head";
import styles from "@/styles/Checkout.module.css"
import { Arimo } from 'next/font/google'
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "../_app";
import { toast } from "sonner";


const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap'
});

export default function Checkout() {
    const router = useRouter();
    const [orderId, setOrderId] = useState('');
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        const { id } = router.query;
        if (id) {
            setOrderId(id);
            axios.get(`${baseUrl}/api/order/${id}`)
                .then(response => {
                    setOrderItems(response.data.items);
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
                <title>Uspešna porudžbina | bucha.rs</title>
                <meta name="robots" content="noindex" />
                <meta name="description" content="Uspešna porudžbina" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
            </Head>
            <NavWrapper />
            <main role="main" className={`${styles.main} ${arimo.className}`}>

            </main>
            <Footer />
        </>
    )
}