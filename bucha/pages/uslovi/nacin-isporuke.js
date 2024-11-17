import Footer from '@/components/footer/Footer';
import Navbar from '@/components/nav/Navbar';
import styles from '@/styles/Other.module.css'
import Head from "next/head";

export default function ONama() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />

                <link rel="canonical" href="https://www.bucha.rs/uslovi/nacin-isporuke" />

                <meta
                    name="description"
                    content="Informišite se o načinu i rokovima isporuke pri kupovini kombucha proizvoda na bucha.rs."
                />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />
                <meta name="geo.placename" content="Serbia" />

                <meta httpEquiv="content-language" content="sr-RS" />

                <meta property="og:title" content="Online prodaja kombuche - Način isporuke" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Informišite se o načinu i rokovima isporuke pri kupovini kombucha proizvoda na bucha.rs." />
                <meta property="og:url" content="https://www.bucha.rs/uslovi/nacin-isporuke" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/favicon.ico" />
                <meta property="og:image:width" content="48" />
                <meta property="og:image:height" content="48" />
                <meta property="og:locale" content="RS" />
                <meta property="og:site" content="@bucha.rs" />

                <meta name="twitter:site" content="@rs_bucha" />
                <meta name="twitter:description" content="Informišite se o načinu i rokovima isporuke pri kupovini kombucha proizvoda na bucha.rs." />
                <meta name="twitter:title" content="Online prodaja kombuche - Način isporuke" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="/favicon.ico" />

                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <title>Online prodaja kombuche - Način isporuke</title>

            </Head>

            <Navbar />
            <article className={styles.container}>
                <h1>Način isporuke - Bucha.rs</h1>
                <hr />
                <p className={styles.date}>Poslednja izmena: 17.11.2024.</p>
                <p><strong>Obaveza pregleda proizvoda</strong></p>
                <p>Molimo Vas da prilikom isporuke, a pre potpisivanja primopredajnog dokumenta detaljno pregledate proizvod i da sva eventualno uočena oštećenja ambalaže unesete u zapisnik koji Vam je dostavljač predao. O svim uočenim nedostacima potrebno je da nas odmah, a najkasnije u roku od 24h obavestite pozivom na broj <strong>+381 63 427 280</strong> ili slanjem e-maila na <strong>tamarailic11@gmail.com</strong>. Reklamacije na oštećenja koje su prijavljene nakon isteka roka od 24h od trenutka isporuke neće biti prihvaćene. Proizvode koji imaju vidljiva fizička oštećenja ambalaže niste u obavezi da preuzmete.</p>

                <p><strong>Isporuka na teritoriji Srbije</strong></p>
                <ul>
                    <li>Isporuku robe vršimo na celoj teritoriji Srbije preko kurirske službe Post Express</li>
                    <li>Troškovi isporuke se obračunavaju prema važećem cenovniku kurirske službe</li>
                    <li>Za sve porudžbine preko 10.000 dinara dostava je besplatna</li>
                    <li>Standardni rok za dostavu je <strong>2-7 radnih dana</strong></li>
                    <li>Isporuka se vrši radnim danima u periodu od 8h do 16h</li>
                </ul>

                <p><strong>Ograničenja isporuke</strong></p>
                <ul>
                    <li>Isporuka se vrši isključivo na teritoriji Republike Srbije (bez KiM)</li>
                    <li>Ne vršimo isporuku van teritorije Republike Srbije</li>
                    <li>Zbog prirode proizvoda (živa starter kultura), isporuka se vrši samo radnim danima</li>
                </ul>

                <p><strong>Dodatne napomene</strong></p>
                <ul>
                    <li>U slučaju da niste u mogućnosti da primite pošiljku u dogovorenom terminu, molimo Vas da nas o tome obavestite najmanje 24h unapred</li>
                    <li>Za sve proizvode koje isporučujemo obezbeđena je detaljna dokumentacija sa uputstvom za upotrebu</li>
                    <li>Ukoliko dođe do oštećenja pakovanja prilikom transporta i iscuri starter tečnost, kupac ima pravo na novu pošiljku bez dodatnih troškova</li>
                </ul>

                <p><strong>Kontakt za pitanja o isporuci</strong></p>
                <ul>
                    <li>Telefon: +381 63 427 280</li>
                    <li>E-mail: tamarailic11@gmail.com</li>
                    <li>Radno vreme za prijem porudžbina: ponedeljak-petak 9h-17h</li>
                </ul>
            </article>
            <Footer />
        </>
    )
}