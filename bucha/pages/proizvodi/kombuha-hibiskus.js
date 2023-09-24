import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import OrderForm from "@/components/OrderForm";
import styles from "@/styles/Product.module.css"
import Head from "next/head";
import { Arimo } from 'next/font/google'

const arimo = Arimo({ subsets: ['latin'] })

export default function Product() {

    const productName = "Kombuha 0.5l - Hibiskus";
    const productDescription = ["Kombuha hibiskus"];
    const productPrice = "750 rsd"
    return (
        <>
            <Head>
                <title>Kombuha Ukus Hibiskus 0.5l</title>
                <meta name="description" content="Poručite kombuhu sa ukusom hibiskusa online i mi je dostavljamo na vašu adresu. Zdravi napitak kombucha je lagano, gazirano piće koje pruža zadovoljstvo ukusa" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="author" content="Tamara Ilić, Ivana Ilić and Uroš Poček" />
                <meta name="geo.region" content="RS" />
                <meta property="og:title" content="Kombuha Ukus Hibiskus 0.5l" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Poručite kombuhu sa ukusom hibiskusa online i mi je dostavljamo na vašu adresu. Zdravi napitak kombucha je lagano, gazirano piće koje pruža zadovoljstvo ukusa" />
                <meta property="og:url" content="https://www.bucha.rs/kombuha-hibiskus" />
                <meta property="og:site_name" content="bucha.rs" />
            </Head>
            <Navbar />
            <main className={`${styles.main} ${arimo.className}`}>
                <section className={styles.container}>
                    <div>
                        <div className={styles.top}>
                            <div>
                                <Gallery images={["/images/products/kombuha_hibiskus_1.jpg", "/images/products/kombuha_hibiskus_2.jpg", "/images/products/kombuha_hibiskus_3.jpg", "/images/products/kombuha_hibiskus_4.jpg", "/images/products/kombuha_hibiskus_5.jpg"]} />
                            </div>
                            <div>
                                <h1>{productName}</h1>
                                {productDescription.map(description => <p key={description}>{description}</p>)}
                                <p className={styles.price}>{productPrice}</p>
                                <OrderForm product={productName} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}