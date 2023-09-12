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
                <title>Kombuha scoby čajna gljiva prodaja</title>
                <meta name="description" content="Kombuha čajna gljiva druga fermentacija i pravljenje ukusa od kombuhe." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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
                                {productDescription.map(description => <p>{description}</p>)}
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