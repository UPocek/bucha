import Footer from "@/components/Footer";
import NavWrapper from "@/components/Navbar";
import Head from "next/head";
import styles from "@/styles/Setovi.module.css"
import { Arimo } from 'next/font/google'
import ProductCard from "@/components/ProductCard";

const arimo = Arimo({ subsets: ['latin'] })

export default function Kombuha() {
    return (
        <>
            <Head>
                <title>Prodaja Kombuhe u Raznim Zabavnim Ukusima</title>
                <meta name="description" content="Kombuha prodaja u raznim ukusima po najboljim cenama u Srbiji. Poručite online vaš zdravi kombucha čaj, napitak sa bucha.rs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="author" content="Tamara Ilić, Ivana Ilić and Uroš Poček" />
                <meta name="geo.region" content="RS" />
                <meta property="og:title" content="Prodaja Kombuhe u Raznim Zabavnim Ukusima" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Kombuha prodaja u raznim ukusima po najboljim cenama u Srbiji. Poručite online vaš zdravi kombucha čaj, napitak sa bucha.rs" />
                <meta property="og:url" content="https://www.bucha.rs/kombuha" />
                <meta property="og:site_name" content="bucha.rs" />
            </Head>
            <NavWrapper />
            <main className={`${styles.main} ${arimo.className}`}>
                <h1>Kombuha prodaja</h1>
                <div className={styles.productsGrid3}>
                    <ProductCard image={"/images/products/kombuha_hibiskus_1.jpg"} alt={"Kombuha na prodaju"} productName={"Kombuha 0.5l - Hibiskus"} productPrice={"750 rsd"} link="/proizvodi/kombuha-hibiskus" />
                </div>
            </main>
            <Footer />
        </>
    )
}