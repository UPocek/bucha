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
import BulletPointsBold from "@/blog-components/bullet-points-bold/BuletPointsBold";
import Link from "next/link";

export default function BezbednostKombuheBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/uputstva/koliko-kombuhe-treba-piti" />
                <meta name="description"
                    content="Koliko kombuhe je bezbedno dnevno popiti? Saznajte preporučene doze, potencijalne benefite konzumacije kombuhe za različite grupe ljudi." />
                <meta name="keywords" content="bezbedna doza kombuhe, koliko kombuhe piti dnevno, preporuke za konzumaciju kombuhe, zdravstveni aspekti kombuhe, bucha preporuke" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Koliko kombuhe je bezbedno piti? Kompletan vodič" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Koliko kombuhe je bezbedno dnevno popiti? Saznajte preporučene doze, potencijalne benefite konzumacije kombuhe za različite grupe ljudi." />
                <meta property="og:url" content="https://www.bucha.rs/uputstva/koliko-kombuhe-treba-piti" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/post8/koliko-kombuhe-treba-piti.webp" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="719" />
                <meta property="og:locale" content="sr_RS" />

                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                <link rel="manifest" href="img/site.webmanifest" />

                <title>Koliko kombuhe je bezbedno piti? Kompletan vodič</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "Koliko kombuhe je bezbedno popiti dnevno?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Preporučena dnevna doza kombuhe je 120-480ml (1/2 do 2 čaše) za zdrave odrasle osobe. Početnike savetujemo da počnu sa manjim količinama."
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
            <article className={styles.blog} id="bezbednost-kombuhe" >
                <BlogTitle title="Koliko kombuhe je bezbedno piti? Kompletan vodič" />

                <Meta
                    metaTag1="25. NOVEMBAR 2024."
                    metaTag2="4 minuta čitanja"
                    metaTag3="kombucha"
                />

                <BlogImage
                    src="/images/post8/koliko-kombuhe-treba-piti.webp"
                    alt="Kombucha dnevna doza"
                />

                <StrongParagraph
                    text="Želite da uživate u kombuhi, ali niste sigurni koja je preporučena dnevna doza kombuche? Otkrivamo vam načine pravilne konzumacije kombuha čaja! 🍹"
                />

                <TableOfContents sections={[
                    'Preporučena dnevna doza kombuhe',
                    'Različite grupe ljudi i njihove potrebe',
                    'Potencijalni rizici prekomernog unosa',
                    'Saveti za bezbednu konzumaciju'
                ]} />

                <BlogSubtitle text="Preporučena dnevna doza kombuhe" id={1} />

                <BasicParagraph
                    text="Postoji li zavet za idealnu dozu kombuhe? Evo šta nutricionisti preporučuju: 🥤"
                />

                <HighlightedSection
                    text="Kombuha dnevna doza: 120-480ml (1/2 do 2 čaše) za zdrave odrasle osobe"
                />

                <BlogSubtitle text="Različite grupe ljudi i njihove potrebe" id={2} />

                <BasicParagraph
                    text="Svako telo je jedinstveno. Pogledajmo preporuke za različite grupe:"
                />

                <h3>Zdrave odrasle osobe ✅</h3>
                <BulletPoints items={[
                    '120-480ml dnevno',
                    'Postepeno uvođenje u ishpranu',
                    'Praćenje individualnog odgovora tela'
                ]} />

                <h3>Sportisti 💪</h3>
                <BulletPoints items={[
                    '240-540ml pre ili posle treninga',
                    'Odlična nadoknada elektrolita',
                    'Prirodan izvor energije'
                ]} />

                <h3>Osobe sa osetljivim sistemom 🩺</h3>
                <BulletPoints items={[
                    'Početak sa 60ml dnevno',
                    'Postepeno povećanje',
                    'Konzultacija sa lekarom'
                ]} />

                <Focus
                    text="Savet: Slušajte svoje telo! Svako je različit. 🌈"
                />

                <BlogSubtitle text="Potencijalni rizici prekomernog unosa" id={3} />

                <BulletPointsBold items={[{ title: "Nadimanje" }, { title: "Bol u stomaku" }, { title: "Dijareja" }]}
                />

                <BlogSubtitle text="Saveti za bezbednu konzumaciju" id={4} />

                <h3>Zlatna pravila konzumacije</h3>
                <BulletPoints
                    items={["✅ Počnite malo", "  ✅ Pijte postepeno", "  ✅ Pratite reakcije svog tela", "  ✅ Konzultujte se sa stručnjakom"]}
                />

                <Focus
                    text="Pro tip: Naša Bucha kombuha je pažljivo pripremljena za optimalnu bezbednost i ukus! 🌟"
                />

                <BasicParagraph
                    text="Želite da pronadjete savršenu kombuhu za sebe? Posetite našu online prodavnicu! 🛒"
                />

                <Link href="/prodaja"> https://www.bucha.rs/prodaja </Link>

                <FloatingNav
                    title="Pređi na:"
                    sections={[
                        'Preporučena dnevna doza kombuhe',
                        'Različite grupe ljudi i njihove potrebe',
                        'Potencijalni rizici prekomernog unosa',
                        'Saveti za bezbednu konzumaciju'
                    ]}
                />
            </article>
        </main>
    );
}