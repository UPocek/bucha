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

export default function MehuriciKombuhaBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/uputstva/mehurici-u-kombuhi" />
                <meta name="description"
                    content="Primetili ste mehuriće na površini vaše kombuhe? Saznajte zašto su oni zapravo dobar znak i dokaz da vaša kombuha aktivno fermentiše. " />
                <meta name="keywords" content="mehurići u kombuhi, mehurići na kombuha gljivi, fermentacija kombuhe, kombuha gljiva izgled, zdrava kombuha, prirodna kombuha, CO2 u kombuhi" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Mehurići u kombuhi - Da li je to normalno?" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Primetili ste mehuriće na površini vaše kombuhe? Saznajte zašto su oni zapravo dobar znak i dokaz da vaša kombuha aktivno fermentiše. " />
                <meta property="og:url" content="https://www.bucha.rs/uputstva/mehurici-u-kombuhi" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/post4/mehurici-u-kombuhi.webp" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="719" />
                <meta property="og:locale" content="sr_RS" />

                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                <link rel="manifest" href="img/site.webmanifest" />

                <title>Mehurići u kombuhi - Da li je to normalno?</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "Mehurići u kombuhi - Da li je to normalno?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ukoliko ste primetili mehuriće kako se formiraju na površini vaše kombuhe, imamo dobre vesti - to je potpuno normalna i poželjna pojava."
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
                <article className={styles.blog} id="mehurici-u-kombuhi" role="article">
                    <BlogTitle title="Mehurići u kombuhi - Da li je to normalno?" />

                    <Meta
                        metaTag1="24. NOVEMBAR 2024."
                        metaTag2="4 minuta čitanja"
                        metaTag3="Fermentacija kombuhe"
                    />

                    <BlogImage
                        src="/images/post4/mehurici-u-kombuhi.webp"
                        alt="Mehurići na površini kombuhe koji pokazuju aktivnu fermentaciju"
                    />

                    <StrongParagraph
                        text="Ukoliko ste primetili mehuriće kako se formiraju na površini vaše kombuhe, imamo dobre vesti - to je potpuno normalna i poželjna pojava! 🎉"
                    />

                    <TableOfContents sections={[
                        'Zašto se pojavljuju mehurići?',
                        'Vrste mehurića u kombuhi',
                        'Kada su mehurići dobar znak?',
                        'Uticaj temperature i protoka vazduha',
                        'Najčešća pitanja o mehurićima'
                    ]} />

                    <BlogSubtitle text="Zašto se pojavljuju mehurići u kombuhi?" id={1} />

                    <BasicParagraph
                        text="Mehurići u kombuhi su rezultat tri prirodna faktora: promene temperature, protoka vazduha i - najvažnije - proizvodnje CO2 tokom fermentacije. Baš kao što šampanjac ima svoje čarobne mehuriće, tako i kombuha razvija svoje!"
                    />

                    <HighlightedSection
                        text="Fun fact: Ovi mali mehurići su zapravo znak da vaše kombuha mikroorganizmi vredno rade na stvaranju probiotika i zdravih komponenti. Mogli bismo reći da su to mali znakovi sreće vaše kombuhe! 😊"
                    />

                    <BlogSubtitle text="Vrste mehurića u kombuhi" id={2} />

                    <BasicParagraph
                        text="Postoje različiti tipovi mehurića koje možete primetiti u svojoj kombuhi:"
                    />

                    <BulletPoints items={[
                        'Mali, fini mehurići - najčešći tip, pokazatelj aktivne fermentacije',
                        'Veći mehurići na površini - često se javljaju zbog promene temperature',
                        'Mehurići zarobljeni ispod SCOBY-ja - rezultat nakupljanja CO2'
                    ]} />

                    <BlogSubtitle text="Kada su mehurići dobar znak?" id={3} />

                    <StrongParagraph
                        text="Mehurići su posebno dobar znak kada se pojavljuju postepeno tokom fermentacije. Oni nam govore da naša kombuha kultura aktivno pretvara šećer u probiotike i blagu prirodnu gaziranost."
                    />

                    <Focus
                        text="Pro tip: Ako želite više prirodne gaziranosti u svojoj kombuhi, sačekajte da vidite ove mehuriće pre nego što započnete drugu fermentaciju!"
                    />

                    <BlogSubtitle text="Uticaj temperature i protoka vazduha" id={4} />

                    <BasicParagraph
                        text="Temperatura i protok vazduha igraju ključnu ulogu u formiranju mehurića. Optimalna temperatura za fermentaciju kombuhe je između 20-28°C. U ovom opsegu možete očekivati najviše aktivnosti i mehurića."
                    />

                    <HighlightedSection
                        text="Promena lokacije vaše kombuhe ili nagle promene temperature mogu dovesti do privremenog povećanja broja mehurića - i to je potpuno normalno!"
                    />

                    <BlogSubtitle text="Najčešća pitanja o mehurićima" id={5} />

                    <BasicParagraph
                        text="Evo odgovora na najčešća pitanja koja dobijamo o mehurićima u kombuhi:"
                    />

                    <h3>Da li previše mehurića može biti loše?</h3>
                    <BasicParagraph
                        text="Ne! Dok god vaša kombuha ima prijatan miris i normalan ukus, količina mehurića nije problem. To je samo znak aktivne fermentacije."
                    />

                    <h3>Šta ako nema mehurića?</h3>
                    <BasicParagraph
                        text="Bez brige - neke kombuhe proizvode manje mehurića od drugih. Dokle god se formira nova SCOBY membrana i ukus se razvija, sve je u redu."
                    />

                    <Focus
                        text="Zapamtite: Svaka kombuha je jedinstvena i može pokazivati različite nivoe aktivnosti. Pratite naš vodič za fermentaciju i verujte svojim čulima!"
                    />

                    <BasicParagraph
                        text="Imate još pitanja o vašoj kombuhi? Slobodno nas kontaktirajte putem društvenih mreža ili email-a - tu smo da pomognemo u vašoj kombuha avanturi! 🌱"
                    />

                    <FloatingNav
                        title="Pređi na:"
                        sections={[
                            'Zašto se pojavljuju mehurići?',
                            'Vrste mehurića u kombuhi',
                            'Kada su mehurići dobar znak?',
                            'Uticaj temperature i protoka vazduha',
                            'Najčešća pitanja o mehurićima'
                        ]}
                    />
                </article>
            </main>
            <Footer />
        </>
    );
}