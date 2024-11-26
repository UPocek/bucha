import BasicParagraph from "@/blog-components/basic-paragraph/BasicParagraph";
import BlogImage from "@/blog-components/blog-image/BlogImage";
import BlogSubtitle from "@/blog-components/blog-subtitle/BlogSubtitle";
import BlogTitle from "@/blog-components/blog-title/BlogTitle";
import BulletPoints from "@/blog-components/bullet-points/BulletPoints";
import FloatingNav from "@/blog-components/floating-nav/FloatingNav";
import HighlightedSection from "@/blog-components/highlighted-section/HighlightedSection";
import Meta from "@/blog-components/meta/Meta";
import StrongParagraph from "@/blog-components/strong-paragraph/StrongParagraph";
import TableOfContents from "@/blog-components/table-of-contents/TableOfContents";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import Head from "next/head";
import styles from '@/styles/Blog.module.css'
import Focus from "@/blog-components/focus/Focus";
import Link from "next/link";

export default function CuvanjeKombuhaBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/uputstva/kako-se-cuva-kombuha" />
                <meta name="description"
                    content="Kako pravilno čuvati kombuhu? Saznajte sve o optimalnoj temperaturi, roku trajanja i načinima skladištenja kombuhe za najbolji ukus i očuvanje probiotika." />
                <meta name="keywords" content="čuvanje kombuhe, skladištenje kombuhe, rok trajanja kombuhe, temperatura čuvanja kombuhe, kako čuvati kombuhu, bucha čuvanje" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Kako se čuva kombuha? Vodič za pravilno skladištenje" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Kako pravilno čuvati kombuhu? Saznajte sve o optimalnoj temperaturi, roku trajanja i načinima skladištenja kombuhe za najbolji ukus i očuvanje probiotika." />
                <meta property="og:url" content="https://www.bucha.rs/uputstva/kako-se-cuva-kombuha" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/post7/kako-se-cuva-kombuha.webp" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="719" />
                <meta property="og:locale" content="sr_RS" />

                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                <link rel="manifest" href="img/site.webmanifest" />

                <title>Kako se čuva kombuha? Vodič za pravilno skladištenje</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "Kako se pravilno čuva kombuha?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Kombuha se najbolje čuva u frižideru na temperaturi između 2-6°C, u dobro zatvorenoj staklenoj ambalaži, dalje od direktne sunčeve svetlosti."
                                }
                            }]
                        })
                    }}
                />
            </Head>
            <Navbar />
            <MainArea />
            <Footer />
        </>
    );
}

function MainArea() {
    return (
        <main>
            <div className={styles.spacer10}></div>
            <article className={styles.blog} id="kako-se-cuva-kombuha" >
                <BlogTitle title="Kako se čuva kombuha? Vodič za pravilno skladištenje" />

                <Meta
                    metaTag1="25. NOVEMBAR 2024."
                    metaTag2="4 minuta čitanja"
                    metaTag3="Praktični saveti"
                />

                <BlogImage
                    src="/images/post7/kako-se-cuva-kombuha.webp"
                    alt="Pravilno čuvanje kombuhe"
                />

                <StrongParagraph
                    text="Kupili ste svoju kombuhu i sad vas zanima kako da je sačuvate da bude ukusna do poslednje kapi? Bez brige! Otkrićemo vam sve tajne pravilnog čuvanja kombuhe. 🌟"
                />

                <TableOfContents sections={[
                    'Idealna temperatura za čuvanje',
                    'Koliko dugo kombuha može da stoji?',
                    'Najbolja ambalaža za čuvanje',
                    'Česte greške pri skladištenju',
                    'Kako znati da li je kombuha i dalje dobra?'
                ]} />

                <BlogSubtitle text="Idealna temperatura za čuvanje" id={1} />

                <BasicParagraph
                    text="Temperatura je ključni faktor za očuvanje kvaliteta kombuhe. Previše toplo - fermentacija se nastavlja, prehladno - probiotici se uspavaju. 🌡️"
                />

                <HighlightedSection
                    text="Optimalna temperatura za čuvanje kombuhe nakon druge fermentacije je između 2-8°C, što je upravo temperatura vašeg frižidera!"
                />

                <BasicParagraph text="Dok je vaša kombuha još uvek u fazi fermentacije optimalna temperatura za uspešnu fermentaciju je između 22-28°C. Tako da tokom fermentacije kombuhu držite u špajzu na tamnom, ali toplom mestu." />

                <BlogSubtitle text="Koliko dugo kombuha može da stoji?" id={2} />

                <BasicParagraph
                    text="Pravilno skladištena kombuha može da traje i do:"
                />

                <BulletPoints items={[
                    'Neotvorena boca: 3-6 meseci u frižideru',
                    'Otvorena boca: 5-8 dana u frižideru',
                    'Van frižidera: maksimalno 48 sata',
                    'U zamrzivaču: nije preporučljivo!'
                ]} />

                <Focus
                    text="Pro tip: Verujte svojim čulima! 📅"
                />

                <BlogSubtitle text="Najbolja ambalaža za čuvanje" id={3} />

                <BasicParagraph
                    text="Nije svaka ambalaža podjednako dobra za čuvanje kombuhe. Evo šta treba da znate:"
                />

                <h3>Najbolji izbor ✅</h3>
                <BasicParagraph
                    text="- Tamno staklo
- Hermetički zatvorene staklene boce
- Originalna ambalaža"
                />

                <h3>Izbegavajte ❌</h3>
                <BasicParagraph
                    text="- Plastične boce
- Metalne posude
- Providne boce na svetlu"
                />

                <BlogSubtitle text="Česte greške pri skladištenju" id={4} />

                <HighlightedSection
                    text="Najčešće greške koje treba izbegavati:
- Čuvanje na direktnoj sunčevoj svetlosti
- Ostavljanje otvorene boce duže vreme
- Konstantno otvaranje i zatvaranje
- Čuvanje pored jake hrane koja može uticati na ukus"
                />

                <BlogSubtitle text="Kako znati da li je kombuha i dalje dobra?" id={5} />

                <BasicParagraph
                    text="Evo nekoliko znakova da je vaša kombuha i dalje odlična za piće:"
                />

                <BulletPoints items={[
                    'Prijatan, blago kiselkast miris',
                    'Bistrina bez neprirodnog zamućenja',
                    'Karakterističan ukus bez neprijatnih nota',
                    'Blago gazirano kada otvorite bocu'
                ]} />

                <Focus
                    text="Savet: Ako niste sigurni, uvek je bolje kupiti ili napraviti novu. Zdravlje na prvom mestu! 🌿"
                />

                <BasicParagraph
                    text="Želite da uživate u pravilno očuvanoj kombuhi? Posetite našu online prodavnicu i izaberite svoj omiljeni ukus! 🛒"
                />

                <Link href="/prodaja"> https://www.bucha.rs/prodaja </Link>

                <FloatingNav
                    title="Pređi na:"
                    sections={[
                        'Idealna temperatura za čuvanje',
                        'Koliko dugo kombuha može da stoji?',
                        'Najbolja ambalaža za čuvanje',
                        'Česte greške pri skladištenju',
                        'Kako znati da li je kombuha i dalje dobra?'
                    ]}
                />
            </article>
        </main>
    );
}