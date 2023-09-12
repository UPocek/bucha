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
                <title>Kombuha Prodaja</title>
                <meta name="description" content="Kombuha sok online prodaja u Srbiji" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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