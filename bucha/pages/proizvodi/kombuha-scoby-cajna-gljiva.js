import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import OrderForm from "@/components/OrderForm";
import styles from "@/styles/Product.module.css"
import Head from "next/head";
import { Arimo } from 'next/font/google'

const arimo = Arimo({ subsets: ['latin'] })

export default function Product() {

    const productName = "Kombuha Scoby - čajna gljiva";
    const productDescription = ["Prilikom kupovine dobijate malu teglicu sa Kombuha gljivom koja je spremna za pripremu napitka, detaljno uputstvo sa našim savetima za početnike i ukusima i Kombuha tečnost koja je potrebna za prvu fermentaciju.", "Priprema Kombuhe je izuzetno zabavan hobi i ukoliko želite da naučite kako mi pripremamo našu Kombuhu posetite stranicu sa uputstvima", "Napitak od ove čajne gljive je gluten free, vegan i ima mnoge zdravstvene benefite, ali naš savet je da nakon prve fermentacije bazu ulepšate ukusima vašeg omiljenog voća.", "Porudžbinu šaljemo istog ili narednog dana.", "Nadamo se da ćete uživati, a ukoliko imate bilo koje pitanje pišite nam SMS 063427280"];
    const productPrice = "500 rsd"
    return (
        <>
            <Head>
                <title>Kombuha Scoby Čajna Gljiva Prodaja</title>
                <meta name="description" content="Prodaja kombuha čajne gljive po najboljoj ceni u Srbiji. Simbiotska kultura bakterije i kvasca Scobi (Scoby) za pripremu fermentisanog kombuha čaja kod kuće." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="author" content="Tamara Ilić, Ivana Ilić and Uroš Poček" />
                <meta name="geo.region" content="RS" />
                <meta property="og:title" content="Kombuha Scoby Čajna Gljiva Prodaja" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Prodaja kombuha čajne gljive po najboljoj ceni u Srbiji. Simbiotska kultura bakterije i kvasca Scobi (Scoby) za pripremu fermentisanog kombuha čaja kod kuće." />
                <meta property="og:url" content="https://www.bucha.rs/kombuha-scoby-cajna-gljiva" />
                <meta property="og:site_name" content="bucha.rs" />
            </Head>
            <Navbar />
            <main className={`${styles.main} ${arimo.className}`}>
                <section className={styles.container}>
                    <div>
                        <div className={styles.top}>
                            <div>
                                <Gallery images={["/images/products/scoby.jpg", "/images/products/scoby2.jpg", "/images/products/scoby3.jpg", "/images/products/scoby4.jpg", "/images/products/scoby5.jpg"]} />
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