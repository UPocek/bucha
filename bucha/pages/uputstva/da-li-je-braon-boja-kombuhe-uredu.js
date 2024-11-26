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

export default function SmediKonciKombuhaBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/uputstva/da-li-je-braon-boja-kombuhe-uredu" />
                <meta name="description"
                    content="Smeđe končaste formacije u kombuhi su potpuno prirodan i zdrav deo procesa fermentacije. " />
                <meta name="keywords"
                    content="smeđa kombuha, kako izgleda kombuha, končići u kombuhi, fermentacija kombuhe, kombuha gljiva izgled, zdrava kombuha, prirodna kombuha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Da li je braon boja kombuhe uredu? Izgled zdrave kombuhe" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Smeđe končaste formacije u kombuhi su potpuno prirodan i zdrav deo procesa fermentacije. " />
                <meta property="og:url" content="https://www.bucha.rs/uputstva/da-li-je-braon-boja-kombuhe-uredu" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/post3/da-li-je-braon-boja-kombuhe-uredu.webp" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="719" />
                <meta property="og:locale" content="sr_RS" />

                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                <link rel="manifest" href="img/site.webmanifest" />

                <title>Da li je braon boja kombuhe uredu? Izgled zdrave kombuhe</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "Da li je braon boja kombuhe uredu? Izgled zdrave kombuhe",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Braon boja kombuhe obično je normalna i zavisi od vrste čaja i procesa fermentacije. Dokle god nema neprijatnog mirisa ili plesni, boja ukazuje na prirodne promene tokom fermentacije i kombuha je sigurna za konzumaciju."
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
            <MainArea />
        </>
    );
}

function MainArea() {
    return (
        <>
            <Navbar />
            <main>
                <div className={styles.spacer10}></div>
                <article className={styles.blog} id="smedji-konci-u-kombuhi" >
                    <BlogTitle title="Da li je braon boja kombuhe uredu? Izgled zdrave kombuhe" />

                    <Meta
                        metaTag1="24. NOVEMBAR 2024."
                        metaTag2="2 minuta čitanja"
                        metaTag3="Fermentacija kombuhe"
                    />

                    <BlogImage
                        src="/images/post3/da-li-je-braon-boja-kombuhe-uredu.webp"
                        alt="Smeđi končići u kombuhi koji pokazuju zdravu fermentaciju"
                    />

                    <StrongParagraph
                        text="Ako ste primetili smeđe končiće kako plutaju ili smeđe fleke na svojoj kombuhi - bez brige! To je zapravo odličan znak koji pokazuje da je vaša kombuha puna života i da fermentacija teče kako treba."
                    />

                    <BasicParagraph text="Braon boja kombuhe obično je normalna i zavisi od vrste čaja i procesa fermentacije. Dokle god nema neprijatnog mirisa ili plesni, boja ukazuje na prirodne promene tokom fermentacije i kombuha je sigurna za konzumaciju." />

                    <BasicParagraph text="Jedna scoby gljiva može da proizvodi kobuhu 2-3 meseca pre nego što je zrela za penziju i treba je zameniti sa mlađom jedinkom koja se sigurno za ovih par meseci dobili. Tako da bez brige promena boje ili pojava par braon fleka na kombuha gljivi je skroz normalno." />

                    <TableOfContents sections={[
                        'Šta su smeđi končići u kombuhi?',
                        'Zašto nastaju ovi končići?',
                        'Da li su končići bezbedni?',
                        'Kako prepoznati zdravu kombuhu',
                        'Najčešća pitanja o izgledu kombuhe'
                    ]} />

                    <BlogSubtitle text="Šta su smeđi končići u kombuhi?" id={1} />

                    <BasicParagraph
                        text="Oni misteriozni smeđi končići koji plutaju u vašoj kombuhi su zapravo kolonije kvasca - jedan od najvažnijih sastojaka za dobru kombuhu! Baš kao što je dobar kvasac ključan za ukusan hleb, tako je i za savršenu kombuhu."
                    />

                    <HighlightedSection
                        text="Fun fact: Ovi končići su toliko karakteristični za kombuhu da ih neki nazivaju 'kombuha morske alge' - iako nemaju nikakve veze sa morskim algama! 😄"
                    />

                    <BlogSubtitle text="Zašto nastaju ovi končići?" id={2} />

                    <BasicParagraph
                        text="Tokom fermentacije, kvasac u kombuhi vredno radi na pretvaranju šećera u probiotike i blagu gaziranost. Dok to radi, formira ove karakteristične končiće. Što više končića vidite, to znači da je fermentacija aktivnija!"
                    />

                    <Focus
                        text="Važno: Količina končića može varirati od kulture do kulture i od fermentacije do fermentacije - i to je potpuno normalno!"
                    />

                    <BlogSubtitle text="Da li su končići bezbedni?" id={3} />

                    <StrongParagraph
                        text="Apsolutno! Ovi končići su ne samo bezbedni, već su i znak da vaša kombuha proizvodi sve one zdrave sastojke zbog kojih je i cenjena - probiotike, enzime i antioksidanse."
                    />

                    <BlogSubtitle text="Kako prepoznati zdravu kombuhu" id={4} />

                    <BasicParagraph
                        text="Zdrava kombuha treba da:"
                    />

                    <BulletPoints items={[
                        'Blago kiselkast miris',
                        'Smeđe do bež boje',
                        'Tečnost je bistra (može biti tamnija ili svetlija zavisno od čaja)',
                        'Nema zelene ili crne mrlje'
                    ]} />

                    <BlogSubtitle text="Najčešća pitanja o izgledu kombuhe" id={5} />

                    <HighlightedSection
                        text="Da li treba da filtriram nove delove? Možete, ali nije neophodno - oni su potpuno bezbedni za konzumiranje ako se nađu u piću. Mada i nama je na početku bilo malo bljak da ih pijemo 😄. Ako vam smeta tekstura, slobodno procedite kombuhu pre pijenja."
                    />

                    <BasicParagraph
                        text="Još uvek niste sigurni da li je vaša kombuha zdrava? Pošaljite nam sliku na našu Instagram stranicu ili u DM - uvek smo tu da pomognemo! 😊"
                    />

                    <FloatingNav
                        title="Pređi na:"
                        sections={[
                            'Šta su smeđi končići u kombuhi?',
                            'Zašto nastaju ovi končići?',
                            'Da li su končići bezbedni?',
                            'Kako prepoznati zdravu kombuhu',
                            'Najčešća pitanja o izgledu kombuhe'
                        ]}
                    />
                </article>
            </main>
            <Footer />
        </>
    );
}