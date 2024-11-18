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
import Link from "next/link";
import styles from '@/styles/Blog.module.css'
import OrderedList from "@/blog-components/ordered-list/OrderedList";

export default function KakoSePraviKombuhaBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/uputstva/kako-se-pravi-kombuha" />
                <meta name="description"
                    content="Domaći recept za pripremu kombuha čajna gljiva kod kuće. Uputstvo za fermentaciju, neophodni sastojci, oprema i saveti za ukusnu kombuhu." />
                <meta name="keywords"
                    content="recept za pripremu kombuhe, kako se pravi kombuhu, fermentacija kombuhe, priprema kombuhe kod kuće" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Jednostavan recept za pripremu kombuhe" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Praktičan vodič za pravljenje kombuhe kod kuće. Naučite korak po korak proces, neophodnu opremu i savete za najbolji ukus." />
                <meta property="og:url" content="https://www.bucha.rs/blog/kako-se-pravi-kombuha" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/posta2/kako-se-pravi-kombuha.webp" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="719" />
                <meta property="og:locale" content="sr_RS" />

                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                <link rel="manifest" href="img/site.webmanifest" />

                <title>Jednostavan recept za pripremu kombuhe</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://www.bucha.rs/uputstva/kako-se-pravi-kombuha"
                            },
                            "headline": "Jednostavan recept za pripremu kombuhe",
                            "description": "Domaći recept za pripremu kombuha čajna gljiva kod kuće. Uputstvo za fermentaciju, neophodni sastojci, oprema i saveti za ukusnu kombuhu.",
                            "image": {
                                "@type": "ImageObject",
                                "url": "https://www.bucha.rs/images/post2/kako-se-pravi-kombuha.webp",
                                "width": 1080,
                                "height": 719
                            },
                            "datePublished": "2024-11-17",
                            "dateModified": "2024-11-17",
                            "author": {
                                "@type": "Organization",
                                "name": "Bucha.rs",
                                "url": "https://www.bucha.rs"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Bucha.rs",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.bucha.rs/images/bucha_logo.webp",
                                    "width": 901,
                                    "height": 251
                                }
                            },
                            "articleBody": "Pravljenje kombuhe kod kuće je jednostavno, zabavno i omogućava vam da kontrolišete ukus i kvalitet ovog zdravog napitka. SCOBY je simbiotska kultura bakterija i kvasca koja omogućava fermentaciju čaja. Tokom ovog procesa, šećer u čaju se pretvara u probiotičke kiseline i prirodni gas, što daje kombuhi njen karakterističan ukus i benefite.",
                            "keywords": "recept za pripremu kombuhe, kako se pravi kombuhu, fermentacija kombuhe, priprema kombuhe kod kuće",
                            "articleSection": "Recepti",
                            "about": {
                                "@type": "Thing",
                                "name": "Kombuha",
                                "description": "Fermentisani čajni napitak bogat probioticima"
                            },
                            "hasPart": [
                                {
                                    "@type": "WebPageElement",
                                    "name": "Šta je SCOBY i fermentacija?"
                                },
                                {
                                    "@type": "WebPageElement",
                                    "name": "Neophodni sastojci i oprema"
                                },
                                {
                                    "@type": "WebPageElement",
                                    "name": "Recept"
                                },
                                {
                                    "@type": "WebPageElement",
                                    "name": "Kako znati da je fermentacija uspešna?"
                                },
                                {
                                    "@type": "WebPageElement",
                                    "name": "Saveti za savršenu kombuhu"
                                }
                            ],
                            "isAccessibleForFree": "True",
                            "inLanguage": "sr-RS"
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
            <article className={styles.blog} id="kako-se-pravi-kombuha" role="article">
                <BlogTitle title={"Jednostavan recept za pripremu kombuhe"} />
                <Meta metaTag1={'OBJAVLJENO 17. NOVEMBAR 2024.'} metaTag2={"POČETNICI"} metaTag3={"KOMBUHA"} />
                <BlogImage src={'/images/post2/kako-se-pravi-kombuha.webp'} alt={'Kako se pravi kombuha?'} priority={true} />
                <StrongParagraph text={"Pravljenje kombuhe kod kuće je jednostavno, zabavno i omogućava vam da kontrolišete ukus i kvalitet ovog zdravog napitka. U ovom vodiču saznajte sve što vam je potrebno za uspešan početak."} />
                <TableOfContents sections={['Šta je SCOBY i fermentacija?', 'Neophodni sastojci i oprema', 'Recept', 'Kako znati da je fermentacija uspešna?', 'Saveti za savršenu kombuhu']} />

                <BlogSubtitle text={'Šta je SCOBY i fermentacija?'} id={1} />
                <BasicParagraph text={"SCOBY je simbiotska kultura bakterija i kvasca koja omogućava fermentaciju čaja. Tokom ovog procesa, šećer u čaju se pretvara u probiotičke kiseline i prirodni gas, što daje kombuhi njen karakterističan ukus i benefite."} />
                <BlogImage src={'/images/scoby.jpg'} alt={'SCOBY kultura za kombuhu'} />

                <BlogSubtitle text={'Neophodni sastojci i oprema'} id={2} />
                <BulletPoints
                    items={[
                        "Čaj: crni, zeleni ili beli (izbegavajte aromatizovane čajeve).",
                        "Šećer: beli kristal šećer ili beli šećer od trske (neophodan za fermentaciju).",
                        "SCOBY kultura i starter tečnost.",
                        "Staklena tegla: poželjno veće zapremine (npr. 3-5 litara).",
                        "Krpa ili pamučna prekrivka i gumica za pokrivanje tegle."
                    ]}
                />
                <HighlightedSection text={"SCOBY možete nabaviti na našem sajtu ovde:"} />
                <Link href="https://www.bucha.rs/proizvodi/kombuha-scoby-cajna-gljiva">SCOBY kultura za kombuhu</Link>

                <BlogSubtitle text={'Recept'} id={3} />
                <OrderedList
                    items={[
                        "Pripremite 1 litar zaslađenog čaja (4g čaja + 60g šećera).",
                        "Ohladite čaj na sobnu temperaturu.",
                        "U staklenu teglu sipajte pripremljeni čaj, SCOBY (kambuha gljivu) i starter tečnost.",
                        "Pokrivajte krpom i učvrstite gumicom.",
                        "Fermentirajte 7-10 dana na sobnoj temperaturi (idealno 21-24°C)."
                    ]}
                />
                <StrongParagraph text={"Za detaljan vodič sa fotografijama, pogledajte naše uputstvo ovde: "} />
                <Link href="https://www.bucha.rs/uputstva/priprema-kombuhe">Priprema kombuhe</Link>

                <BlogSubtitle text={'Kako znati da je fermentacija uspešna?'} id={4} />
                <BasicParagraph text={"Praćenje procesa fermentacije je ključno za dobijanje kvalitetne kombuhe. Evo na šta sve treba obratiti pažnju:"} />
                <StrongParagraph text={'Dobri znaci'} />
                <BulletPoints items={[
                    'SCOBY se postepeno širi i deblja',
                    'Tečnost postaje sve manje prozirna',
                    'Formiraju se sitni mehurići koji se lagano podižu ka površini',
                    'Boja napitka se postepeno menja od tamne ka svetlijoj',
                    'Novi SCOBY sloj je kompaktan i ravan, bez rupica i nepravilnosti',
                    'Nakon 3-4 dana pojavljuje se blago kiselkast miris'
                ]}
                />
                <BasicParagraph text={'Važno je napomenuti da je svaka fermentacija pomalo drugačija i da na nju utiču temperatura prostorije, godišnje doba i kvalitet sastojaka. Sa iskustvom ćete naučiti da prepoznate optimalan trenutak za završetak fermentacije prema vašem ukusu.'} />
                <BasicParagraph text={"Ako želite gazirani napitak ili posebne arome, prebacite kombuhu u drugu fermentaciju. Detalje o ovom procesu pronađite ovde:"} />
                <Link href="https://www.bucha.rs/uputstva/druga-fermentacija">Druga fermentacija kombuhe</Link>

                <BlogSubtitle text={'Saveti i trikovi'} id={5} />
                <StrongParagraph text={'Napredni saveti za pripremu:'} />
                <BulletPoints items={[
                    "Pazite na higijenu - koristite detaljno oprane tegle i pribor.",
                    'Počnite sa manjim količinama dok ne savladate proces',
                    'Koristite platnenu maramicu umesto papirnog filtera - bolja cirkulacija vazduha',
                    'Obeležite tegle datumom početka fermentacije'
                ]}
                />
                <StrongParagraph text={'Sezonsko prilagođavanje:'} />
                <BulletPoints items={[
                    'Leti: skratite vreme fermentacije i smanjite količinu šećera',
                    'Zimi: postavite teglu na toplije mesto i produžite fermentaciju',
                    'Proleće/jesen: pratite standardno vreme fermentacije (5-10 dana)',
                    'Prilagodite recepte sezonskom voću za aromatizaciju'
                ]}
                />
                <StrongParagraph text={'Naši tajni trikovi:'} />
                <BulletPoints items={[
                    'Koristite filter za vodu da izbegnete hlor',
                    'Pripremite veću količinu osnovnog čaja i čuvajte ga u frižideru',
                    'Pratite pH vrednost pomoću lakmus papira',
                    'Flaširajte kombuhu u staklene flaše sa hermetičkim zatvaračem',
                    'Držite flašice uspravno tokom druge fermentacije'
                ]}
                />

                <BlogSubtitle text={'Zaključak'} id={6} />
                <BasicParagraph text={"Spremanje kombuhe kod kuće nije teško i može biti ekonomično, ali i sjajna prilika da uživate u napitku prilagođenom vašem ukusu. Sa pravim sastojcima, malo truda i našim uputstvima, brzo ćete postati ekspert!"} />
                <HighlightedSection text={"Za dodatne informacije kliknite na link ispod"} />
                <Link href="https://www.bucha.rs/">bucha.rs</Link>

                <FloatingNav
                    title={"Sadržaj članka:"}
                    sections={['Šta je SCOBY i fermentacija?', 'Neophodni sastojci i oprema', 'Recept', 'Kako znati da je fermentacija uspešna?', 'Saveti za savršenu kombuhu']}
                />
            </article>
        </main>
    );
}
