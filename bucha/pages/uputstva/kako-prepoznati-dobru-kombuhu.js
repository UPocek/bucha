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

export default function PrepoznavanjeDobreKombuheBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/uputstva/kako-prepoznati-dobru-kombuhu" />
                <meta name="description"
                    content="Naučite znakove dobre i zdrave kombuhe! Otkrijte kako da prepoznate ispravnu fermentaciju i izbehnete potencijalne probleme." />
                <meta name="keywords" content="zdrava kombuha, znakovi dobre kombuhe, fermentacija kombuhe, prepoznavanje kombuhe, kombuha kućna priprema" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Kako prepoznati dobru kombuhu? Vodič za početnike" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Naučite znakove dobre i zdrave kombuhe! Otkrijte kako da prepoznate ispravnu fermentaciju i izbehnete potencijalne probleme." />
                <meta property="og:url" content="https://www.bucha.rs/uputstva/kako-prepoznati-dobru-kombuhu" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/post10/zdrava-kombuha.webp" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="720" />
                <meta property="og:locale" content="sr_RS" />

                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                <link rel="manifest" href="img/site.webmanifest" />

                <title>Kako prepoznati dobru kombuhu? Vodič za početnike</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "Prepoznavanje zdrave kombuhe",
                            "step": [{
                                "@type": "HowToStep",
                                "text": "Proverite izgled SCOBY membrane",
                                "name": "Vizuelna provera"
                            }, {
                                "@type": "HowToStep",
                                "text": "Ocenite miris i ukus kombuhe",
                                "name": "Senzorna analiza"
                            }, {
                                "@type": "HowToStep",
                                "text": "Pratite znakove ispravne fermentacije",
                                "name": "Procena fermentacije"
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
            <article className={styles.blog} id="prepoznavanje-dobre-kombuhe" role="article">
                <BlogTitle title="Kako prepoznati da li je moja kombuha dobra? Stručni vodič!" />

                <Meta
                    metaTag1="25. NOVEMBAR 2024."
                    metaTag2="3 minuta čitanja"
                    metaTag3="Praktični kombuha saveti"
                />

                <BlogImage
                    src="/images/post10/zdrava-kombuha.webp"
                    alt="Zdrava kombuha fermentacija"
                />

                <StrongParagraph
                    text="Sumnjate li da nešto nije u redu sa vašom kombuhom? Otkrivamo kako da prepoznate da li je vaša kombuha gljiva zdrava i pruža dobru fermentaciju! 🕵️‍♀️🍵"
                />

                <TableOfContents sections={[
                    'Vizuelni znakovi dobre kombuhe',
                    'Miris i ukus kao indikatori',
                    'Najčešće greške kod fermentacije',
                    'Kada baciti kombuhu?'
                ]} />

                <BlogSubtitle text="Vizuelni znakovi dobre kombuhe" id={1} />

                <BasicParagraph
                    text="Prva stvar koju treba proveriti je izgled SCOBY membrane i tečnosti! Evo na šta treba da obratite pažnju:"
                />

                <BulletPoints items={[
                    'SCOBY: Bele ili smeđe boje',
                    'Prozirna ili blago mutna tečnost',
                    'Formiranje tankog novog sloja SCOBY-a na površini tegle',
                    'Blagi mehurići fermentacije'
                ]} />

                <HighlightedSection
                    text="NORMALNO je da svaka kombuha izgleda malo drugačije - ne postoji savršen oblik!"
                />

                <BlogSubtitle text="Miris i ukus kao indikatori" id={2} />

                <BasicParagraph
                    text="Miris i ukus su ključni pokazatelji zdravlja vaše kombuhe:"
                />

                <h3>Dobar miris</h3>
                <BasicParagraph
                    text="✅ Blago kiseo, kao jabučni sirće
                    ✅ Bez jakih neprijatnih mirisa"
                />

                <h3>Loš miris</h3>
                <BasicParagraph
                    text="❌ Jak buđav miris
                    ❌ Miris trulog voća"
                />

                <Focus
                    text="Pro tip: Ukus kombuhe treba da bude osvežavajući, kiseo-sladak, ne previše jak! 🍏"
                />

                <BlogSubtitle text="Najčešće greške kod fermentacije" id={3} />

                <BasicParagraph
                    text="Čak i iskusni fermentatori ponekad naprave greške. Evo najčešćih zamki:"
                />

                <BulletPoints items={[
                    'Fermentacija na previsokoj temperaturi',
                    'Korišćenje metalnih posuda',
                    'Nedovoljna količina starter čaja',
                    'Loša higijena opreme'
                ]} />

                <BlogSubtitle text="Kada baciti kombuhu?" id={4} />

                <BasicParagraph
                    text="🚨 Crni ili zeleni mrljasti delovi
                    🚨 Jak miris buđi
                    🚨 Paučinasti mrežasti izgled
                    🚨 Potpuno crven ili ružičast SCOBY
                    🚨 Miris trulog voća"
                />

                <Focus
                    text="Bolje je baciti kombuhu nego riskirati zdravlje! Uvek pratite načelo - ako niste sigurni, ne konzumirati! 🛡️"
                />

                <BasicParagraph
                    text="Želite li sigurnu i kvalitetnu kombuhu? Posetite našu online prodavnicu gde možete poručiti novu starter kulturu! 🛒"
                />

                <FloatingNav
                    title="Pređi na:"
                    sections={[
                        'Vizuelni znakovi dobre kombuhe',
                        'Miris i ukus kao indikatori',
                        'Najčesce greske kod fermentacije',
                        'Kada baciti kombuhu?'
                    ]}
                />
            </article>
        </main>
    );
}