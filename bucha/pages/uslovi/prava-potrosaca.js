import Footer from '@/components/footer/Footer';
import Navbar from '@/components/nav/Navbar';
import styles from '@/styles/Other.module.css'
import Head from "next/head";

export default function ONama() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />

                <link rel="canonical" href="https://www.bucha.rs/uslovi/prava-potrosaca" />

                <meta
                    name="description"
                    content="Informišite se o pravima potrošača pri kupovini kombucha proizvoda | Detaljna uputstva o povratu, reklamacijama i odustanku od kupovine na bucha.rs."
                />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />
                <meta name="geo.placename" content="Serbia" />

                <meta httpEquiv="content-language" content="sr-RS" />

                <meta property="og:title" content="Online prodaja kombuche - Prava potrošača" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Informišite se o pravima potrošača pri kupovini kombucha proizvoda | Detaljna uputstva o povratu, reklamacijama i odustanku od kupovine na bucha.rs." />
                <meta property="og:url" content="https://www.bucha.rs/uslovi/prava-potrosaca" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/favicon.ico" />
                <meta property="og:image:width" content="48" />
                <meta property="og:image:height" content="48" />
                <meta property="og:locale" content="RS" />
                <meta property="og:site" content="@bucha.rs" />

                <meta name="twitter:site" content="@rs_bucha" />
                <meta name="twitter:description" content="Informišite se o pravima potrošača pri kupovini kombucha proizvoda | Detaljna uputstva o povratu, reklamacijama i odustanku od kupovine na bucha.rs." />
                <meta name="twitter:title" content="Online prodaja kombuche - Prava potrošača" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="/favicon.ico" />

                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <title>Online prodaja kombuche - Prava potrošača</title>

            </Head>

            <Navbar />
            <article className={styles.container}>
                <h1>Online prodaja kombuche - Prava potrošača</h1>
                <hr />
                <p className={styles.date}>Poslednja izmena: 17.11.2024.</p>

                <p><strong>1. OPŠTE ODREDBE</strong></p>
                <p>Obaveštavamo Vas da se prema odredbama Zakona o zaštiti potrošača (Sl. glasnik 88/21) kupovina putem našeg sajta bucha.rs smatra kupovinom na daljinu.</p>

                <p><strong>2. ODUSTANAK OD PORUDŽBINE PRE SLANJA</strong></p>
                <p>Ukoliko porudžbina nije poslata, kupac može da poništi porudžbinu slanjem zahteva na email adresu tamarailic11@gmail.com.</p>

                <p><strong>3. REKLAMACIJE I POVRAT</strong></p>
                <p>S obzirom da prodajemo prehrambene proizvode, primenjuju se sledeća pravila:</p>
                <ul>
                    <li>Ukoliko dođe do oštećenja pakovanja prilikom transporta i iscuri starter tečnost, kupac ima pravo na novu pošiljku bez dodatnih troškova</li>
                    <li>Za ispravne i neoštećene proizvode ne prihvatamo povraćaj zbog prirode proizvoda</li>
                    <li>U specifičnim situacijama kada je povrat dogovoren sa našom korisničkom podrškom, povrat se vrši na adresu glavne pošte u Novom Sadu</li>
                </ul>

                <p><strong>4. PROCEDURA REKLAMACIJE</strong></p>
                <ul>
                    <li>Odmah po prijemu pošiljke proverite stanje pakovanja</li>
                    <li>U slučaju oštećenja, fotografišite paket pre otvaranja</li>
                    <li>Pošaljite email sa fotografijama i opisom problema na tamarailic11@gmail.com</li>
                    <li>Naš tim će vas kontaktirati u najkraćem roku sa daljim uputstvima</li>
                </ul>

                <p><strong>5. OGRANIČENJA PRAVA NA POVRAT</strong></p>
                <p>Zbog prirode proizvoda (prehrambeni proizvod - starter kultura za kombuchu), ne prihvatamo povrat za:</p>
                <ul>
                    <li>Otvorene proizvode</li>
                    <li>Proizvode kojima je narušena originalna ambalaža</li>
                    <li>Proizvode koji su pravilno dostavljeni i nisu oštećeni u transportu</li>
                </ul>

                <p><strong>6. ZAŠTITA PRAVA POTROŠAČA</strong></p>
                <p>Trudimo se da sva Vaša prava kao potrošača budu u potpunosti ispoštovana u skladu sa važećim zakonskim propisima Republike Srbije.</p>

                <p><strong>7. KONTAKT ZA REKLAMACIJE</strong></p>
                <p>Za sva pitanja u vezi sa reklamacijama i pravima potrošača, možete nas kontaktirati:</p>
                <ul>
                    <li>Email: tamarailic11@gmail.com</li>
                    <li>Telefon: +381 63 427 280</li>
                    <li>Radno vreme za prijem reklamacija: Radnim danima od 9 do 17 časova</li>
                </ul>

                <p><strong>8. IZMENE PRAVILA</strong></p>
                <p>Zadržavamo pravo da ova pravila povremeno ažuriramo. Sve izmene će biti objavljene na ovoj stranici sa datumom poslednje izmene.</p>
            </article>
            <Footer />
        </>
    )
}