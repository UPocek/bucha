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

export default function AlkoholKombuhaBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/uputstva/da-li-kombuha-sadrzi-alkohol" />
                <meta name="description"
                    content="Da li kombuha sadrži alkohol? Saznajte istinu o količini alkohola u kombuhi, kako nastaje i da li je kombuha bezbedna za sve." />
                <meta name="keywords" content="alkohol u kombuhi, kombuha alkohol procenat, da li kombuha ima alkohola, fermentacija kombuhe, bezalkoholna kombuha, prirodna kombuha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Da li kombuha sadrži alkohol?" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Da li kombuha sadrži alkohol? Saznajte istinu o količini alkohola u kombuhi, kako nastaje i da li je kombuha bezbedna za sve. " />
                <meta property="og:url" content="https://www.bucha.rs/uputstva/da-li-kombuha-sadrzi-alkohol" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/post6/da-li-kombuha-sadrzi-alkohol.webp" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="719" />
                <meta property="og:locale" content="sr_RS" />

                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                <link rel="manifest" href="img/site.webmanifest" />

                <title>Da li kombuha sadrži alkohol?</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "Da li kombuha sadrži alkohol?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Da, ali u jako malim količinama koje su potpuno bezbedne. Tačnije oko 0.5% alkohola što je manje nego u većini zrelih banana."
                                },
                                "datePublished": "2024-11-24",
                                "author": {
                                    "@type": "Organization",
                                    "name": "bucha.rs",
                                    "url": "https://www.bucha.rs"
                                },
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
            <article className={styles.blog} id="alkohol-u-kombuhi" role="article">
                <BlogTitle title="Da li kombuha sadrži alkohol? Evo šta treba da znate" />

                <Meta
                    metaTag1="25. NOVEMBAR 2024."
                    metaTag2="3 minuta čitanja"
                    metaTag3="Naučna objašnjenja"
                />

                <BlogImage
                    src="/images/post6/da-li-kombuha-sadrzi-alkohol.webp"
                    alt="Zdrava kombuha bez alkohola"
                />

                <StrongParagraph
                    text="Često nas pitate da li kombuha sadrži alkohol. Odgovor je: da, ali u jako jako jako malim količinama koje su potpuno bezbedne! Hajde da razjasnimo sve nedoumice oko ovog pitanja. 🧪"
                />

                <TableOfContents sections={[
                    'Koliko alkohola sadrži kombuha?',
                    'Kako nastaje alkohol u kombuhi?',
                    'Da li je kombuha bezbedna za sve?',
                    'Poređenje sa drugim napicima',
                    'Česta pitanja o alkoholu u kombuhi'
                ]} />

                <BlogSubtitle text="Koliko alkohola sadrži kombuha?" id={1} />

                <BasicParagraph
                    text="Kombuha prirodno sadrži vrlo male količine alkohola - tipično između 0.5% i 1% alkohola po zapremini. Za poređenje, to je manje nego u većini zrelih banana! 🍌"
                />

                <HighlightedSection
                    text="Važno: Komercijalna kombuha obično sadrži manje od 0.5% alkohola, što je zakonski limit za bezalkoholne napitke u većini zemalja."
                />

                <BlogSubtitle text="Kako nastaje alkohol u kombuhi?" id={2} />

                <BasicParagraph
                    text="Alkohol u kombuhi je prirodni nusproizvod fermentacije. Evo kako proces funkcioniše:"
                />

                <BulletPoints items={[
                    'Kvasci pretvaraju šećer u etanol i CO2',
                    'Bakterije odmah pretvaraju većinu tog etanola u zdrave organske kiseline',
                    'Mali deo alkohola ostaje kao prirodni konzervans',
                    'Procenat alkohola zavisi od dužine fermentacije i temperature'
                ]} />

                <Focus
                    text="Zanimljivost: Upravo ovaj proces stvara i probiotike koji čine kombuhu tako zdravom! 🌱"
                />

                <BlogSubtitle text="Da li je kombuha bezbedna za sve?" id={3} />

                <BasicParagraph
                    text="S obzirom na minimalni sadržaj alkohola, kombuha je generalno bezbedna za većinu ljudi. Međutim, određene grupe bi trebalo da budu oprezne:"
                />

                <h3>Ko može da pije kombuhu bez brige?</h3>
                <BasicParagraph
                    text="✅ Odrasle osobe
  ✅ Tinejdžeri
  ✅ Sportisti
  ✅ Trudnice (uz konsultaciju sa lekarom)
  ✅ Osobe koje ne konzumiraju alkohol iz religijskih razloga (većina verskih autoriteta smatra kombuhu dozvoljenom)"
                />

                <h3>Ko treba da bude oprezan?</h3>
                <BasicParagraph
                    text="⚠️ Osobe sa preosetljivošću na alkohol
  ⚠️ Osobe na određenim lekovima
  ⚠️ Mala deca spod 12 godina (konsultujte pedijatra)"
                />

                <BlogSubtitle text="Poređenje sa drugim napicima" id={4} />

                <HighlightedSection
                    text="Procenat alkohola u različitim napicima:
  - Kombuha: 0.5-1%
  - Zrela banana: do 0.5%
  - Kefir: 0.5-2%
  - Bezalkoholno pivo: <0.5%
  - Standardno pivo: 4-6%"
                />

                <BlogSubtitle text="Česta pitanja o alkoholu u kombuhi" id={5} />

                <h3>Da li mogu da vozim nakon konzumiranja kombuhe?</h3>
                <BasicParagraph
                    text="Da! Količina alkohola u kombuhi je toliko mala da nema nikakav uticaj na sposobnost vožnje."
                />

                <h3>Da li se alkohol može osetiti u ukusu?</h3>
                <BasicParagraph
                    text="Ne, kombuha ima karakterističan kiselo-slatki ukus zbog organskih kiselina, a ne zbog alkohola."
                />

                <h3>Da li duža fermentacija znači više alkohola?</h3>
                <BasicParagraph
                    text="Ne nužno - bakterije kontinuirano pretvaraju alkohol u kiseline, održavajući nizak nivo alkohola."
                />

                <Focus
                    text="Pro tip: Ako vas brine sadržaj alkohola, birajte kombuhe sa kraćim periodom fermentacije koje su obično malo slađe i imaju manji procenat alkohola. 🌟"
                />

                <BasicParagraph
                    text="Želite da probate našu pažljivo fermentisanu kombuhu sa optimalnim nivoom alkohola? Posetite našu online prodavnicu i izaberite svoj savršeni ukus! 🛒"
                />

                <a href="https://www.bucha.rs/prodaja"> https://www.bucha.rs/prodaja </a>

                <FloatingNav
                    title="Pređi na:"
                    sections={[
                        'Koliko alkohola sadrži kombuha?',
                        'Kako nastaje alkohol u kombuhi?',
                        'Da li je kombuha bezbedna za sve?',
                        'Poređenje sa drugim napicima',
                        'Česta pitanja o alkoholu u kombuhi'
                    ]}
                />
            </article>
        </main>
    );
}