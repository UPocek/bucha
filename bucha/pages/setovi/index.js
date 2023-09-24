import Footer from "@/components/Footer";
import NavWrapper from "@/components/Navbar";
import Head from "next/head";
import styles from "@/styles/Setovi.module.css"
import { Arimo } from 'next/font/google'
import ProductCard from "@/components/ProductCard";

const arimo = Arimo({ subsets: ['latin'] })

export default function Setovi() {
    return (
        <>
            <Head>
                <title>Setovi Za Pripremu Kombuhe Kod Kuće</title>
                <meta name="description" content="Prodaja setova za pravljenje kombuha čaja u vašem domu, sve što vam je potrebno da počnete da pravite svoju kombuchu bogatu probijoticima za početnike" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="author" content="Tamara Ilić, Ivana Ilić and Uroš Poček" />
                <meta name="geo.region" content="RS" />
                <meta property="og:title" content="Setovi Za Pripremu Kombuhe Kod Kuće" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Prodaja setova za pripremu kombuha čaja u vašem domu, sve što vam je potrebno da počnete da pravite svoju kombuchu bogatu probijoticima za početnike" />
                <meta property="og:url" content="https://www.bucha.rs/setovi" />
                <meta property="og:site_name" content="bucha.rs" />
            </Head>
            <NavWrapper />
            <main className={`${styles.main} ${arimo.className}`}>
                <h1>Setovi za pripremu Kombuhe</h1>
                <div className={styles.productsGrid3}>

                    <ProductCard image={"/images/products/scoby.jpg"} alt={"Kombuha scoby čajna gljiva prodaja"} productName={"Kombuha Scoby - čajna gljiva"} productPrice={"500 rsd"} link="/proizvodi/kombuha-scoby-cajna-gljiva" />

                </div>
            </main>
            <Footer />
        </>
    )
}