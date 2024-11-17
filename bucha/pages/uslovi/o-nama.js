import Footer from '@/components/footer/Footer';
import Navbar from '@/components/nav/Navbar';
import styles from '@/styles/Other.module.css'
import Head from "next/head";

export default function ONama() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />

                <link rel="canonical" href="https://www.bucha.rs/uslovi/o-nama" />

                <meta
                    name="description"
                    content="Kupite organski starter kit za kombuchu uz dostavu u celoj Srbiji | Domaća kombucha - sastojci, čajevi i kompletan pribor za prirodno kombuha piće."
                />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />
                <meta name="geo.placename" content="Serbia" />

                <meta httpEquiv="content-language" content="sr-RS" />

                <meta property="og:title" content="Online prodaja kombuche - O nama" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Kupite organski starter kit za kombuchu uz dostavu u celoj Srbiji | Domaća kombucha - sastojci, čajevi i kompletan pribor za prirodno kombuha piće." />
                <meta property="og:url" content="https://www.bucha.rs/uslovi/o-nama" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/favicon.ico" />
                <meta property="og:image:width" content="48" />
                <meta property="og:image:height" content="48" />
                <meta property="og:locale" content="RS" />
                <meta property="og:site" content="@bucha.rs" />

                <meta name="twitter:site" content="@rs_bucha" />
                <meta name="twitter:description" content="Kupite organski starter kit za kombuchu uz dostavu u celoj Srbiji | Domaća kombucha - sastojci, čajevi i kompletan pribor za prirodno kombuha piće." />
                <meta name="twitter:title" content="Online prodaja kombuche - O nama" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="/favicon.ico" />

                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <title>Online prodaja kombuche - O nama</title>

            </Head>

            <Navbar />
            <article className={styles.container}>
                <h1>Online prodaja kombuche - O nama</h1>
                <hr />
                <h2>Osnovne informacije o prodavcu</h2>
                <p className={styles.date}>Poslednja izmena: 17.11.2024.</p>
                <p>Od bucha.rs možete očekivati:</p>
                <ul>
                    <li>Kvalitet namirnica - Koristimo samo organske i viokokvalitetne sastojke za pripremu i gajanje naše kombuha gljive</li>
                    <li>Domaća proizvodnja - Svaka kombuha koju isporučimo je sveža i proizvedena po preciznoj recepturi, pažljivo fermentisana kako bi se sačuvali svi prirodni ukusi i probiotičke beneficije, te dostavljena direktno na vaša vrata. </li>
                    <li>Besplatni materijali -  Svi naši najbolji recepti i upustva su besplatno dostupni svima na našem sajtu </li>
                </ul>
                <p><strong>Internet adresa:</strong> https://www.bucha.rs/</p>
                <p><strong>Kontakt telefon:</strong> +381 63 427 280</p>
                <p><strong>Kontakt email:</strong> tamarailic11@gmail.com</p>
            </article>
            <Footer />
        </>
    )
}