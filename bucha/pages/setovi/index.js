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
                <title>Kombuha druga fermentacija</title>
                <meta name="description" content="Kombuha čajna gljiva druga fermentacija i pravljenje ukusa od kombuhe." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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