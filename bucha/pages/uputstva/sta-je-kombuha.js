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

export default function StaJeKombuhaBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/blog/sta-je-kombuha" />
                <meta name="description"
                    content="Šta je kombuha čajna gljiva, zašto je popularna u Srbiji, koje su njene zdravstvene prednosti i kako je možete praviti kod kuće. Kupite kombuhu na bucha.rs" />
                <meta name="keywords"
                    content="šta je kombuha, kombuha zdravstvene prednosti, kombuha pravljenje, kombuha Srbija, kombuha SCOBY" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Šta je kombuha?" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Sve o kombuhi: njenim prednostima, popularnosti u Srbiji i kako da je napravite kod kuće." />
                <meta property="og:url" content="https://www.bucha.rs/blog/sta-je-kombuha" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/kombucha-blog-cover.jpg" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:locale" content="sr_RS" />

                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                <link rel="manifest" href="img/site.webmanifest" />

                <title>Šta je kombuha?</title>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "Šta je kombuha?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Kombuha je fermentisani napitak napravljen od zaslađenog zelenog ili crnog čaja i simbiozne kulture bakterija i kvasca (SCOBY). Ovaj napitak, poznat po svojim probiotičkim svojstvima, sve više osvaja ljubitelje prirodnog zdravlja širom sveta."
                                },
                                "datePublished": "2024-11-18",
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
            <article className={styles.blog} id="sta-je-kombuha" role="article">
                <BlogTitle title={"Šta je kombuha?"} />
                <Meta metaTag1={'17. NOVEMBAR 2024.'} metaTag2={"3 minuta čitanja"} metaTag3={"KOMBUHA"} />
                <BlogImage src={'/images/post1/sta-je-kombuha.webp'} alt={'Primer kako izgleda kombuha?'} />
                <StrongParagraph text={"Kombuha je fermentisani napitak napravljen od zaslađenog zelenog ili crnog čaja i simbiozne kulture bakterija i kvasca (SCOBY). Ovaj napitak, poznat po svojim probiotičkim svojstvima, sve više osvaja ljubitelje prirodnog zdravlja širom sveta, a od nedavno i Srbije!"} />
                <TableOfContents sections={['Šta je kombuha?', 'Zašto je popularna u Srbiji?', 'Zdravstvene prednosti kombuhe', 'Kako se pravi kombuha?', 'Gde kupiti kombuhu?']} />

                <BlogSubtitle text={'Kombuha čajna gljiva'} id={1} />
                <HighlightedSection text={"Kombuha je fermentisani čaj bogat probioticima, koji doprinosi zdravlju creva i poboljšava varenje. Napravljen je od čaja, šećera i specijalne kulture bakterija i kvasca koju mi volimo da zovemo glavnim glumcem predstave, poznatiji kao SCOBY."} />
                <BasicParagraph text={"Prvobitno poreklom iz Kine pre više od 2000 godina, kombuha je postala popularna širom sveta zbog svojih različitih zdravstvenih prednosti i osvežavajućeg ukusa."} />
                <BasicParagraph text={'Najlakše je zamisliti kombuhu kao "živi" napitak - nešto poput jogurta, samo što je osvežavajući i blago gaziran. Tokom procesa fermentacije, SCOBY (što je zapravo kao jedna želatinasta "palačinka" od dobrih bakterija) polako "jede" šećer iz zaslađenog čaja i pretvara ga u razne zdrave sastojke.'} />
                <StrongParagraph text={'Nakon fermentacije, dobijate zdravi napitak koji:'} />
                <BulletPoints
                    items={[
                        "Ima prijatan, blag ukus",
                        "Može biti gaziran (kao bezalkoholno piće)",
                        "Sadrži oko 2g šećera po 100ml što je mnogo manje od sokova u prodavnici",
                        "Nisko kalorična, bogat antioksidansima i sadrži organske kiseline koje pomažu varenju"
                    ]}
                />

                <BlogSubtitle text={'Zašto je kombuha popularna u Srbiji?'} id={2} />
                <BasicParagraph text={"U poslednjih nekoliko godina, sve veći broj ljudi u Srbiji traži prirodne alternative za očuvanje zdravlja. Kombuha se savršeno uklapa u ovaj trend jer je jednostavna za pravljenje kod kuće i dostupna kroz specijalizovane prodavnice poput naše."} />
                <BasicParagraph text={"Pored toga, kombuha je često tema razgovora među ljubiteljima zdravog života, a njena popularnost raste zbog dokazanih benefita za organizam i mogućnosti personalizacije ukusa tokom fermentacije."} />
                <BasicParagraph text={'Tradicionalna povezanost sa domaćom proizvodnjom fermentisanih napitaka u Srbiji takođe je doprinela brzom prihvatanju kombuhe. Naši ljudi su generacijama unazad pravili kiseli kupus, turšiju i prirodni jabukovi sirće, pa im koncept fermentacije nije stran.'} />
                <BasicParagraph text={'Mnogi Srbi takođe cene činjenicu da kombuha može biti zdrava zamena za gazirane sokove, posebno u letnjim mesecima. Sve više kafića i restorana uključuje kombuhu u svoju ponudu, što dodatno doprinosi njenoj vidljivosti i dostupnosti široj publici.'} />
                <BasicParagraph text={'Kombuha se posebno dobro uklapa u našu kulturu druženja i deljenja - mnogi proizvođači organizuju radionice i degustacije, gde se ljudi mogu upoznati sa procesom proizvodnje i različitim ukusima ovog zdravog napitka.'} />

                <BlogSubtitle text={'Zdravstvene prednosti kombuhe'} id={3} />
                <BulletPoints
                    items={[
                        "Podrška zdravlju creva i poboljšano varenje zahvaljujući probioticima.",
                        "Detoksikacija organizma pomoću prirodnih kiselina.",
                        "Jačanje imuniteta zahvaljujući vitaminima i antioksidantima.",
                        "Smanjenje upala i regulacija nivoa šećera u krvi."
                    ]}
                />
                <BasicParagraph text={"Iako kombuha ima brojne prednosti, važno je konzumirati je umereno kako biste izbegli potencijalne neželjene efekte."} />

                <BlogSubtitle text={'Kako se pravi kombuha?'} id={4} />
                <BlogImage src={'/images/post1/kombucha-making.webp'} alt={'Proces pravljenja kombuhe'} priority={false} />
                <StrongParagraph text={"Pravljenje kombuhe je lakše nego što mislite!"} />
                <BulletPoints
                    items={[
                        "Pripremite zaslađeni čaj (crni ili zeleni).",
                        "Dodajte SCOBY i starter tečnost.",
                        "Ostavite da fermentira na sobnoj temperaturi 7-10 dana.",
                        "Po želji, dodajte arome i započnite drugu fermentaciju za gazirani napitak."
                    ]}
                />
                <HighlightedSection text={"Za detaljan vodič o pravljenju kombuhe, pogledajte naše uputstvo na linku ispod: "} />
                <Link href="https://www.bucha.rs/uputstva/priprema-kombuhe">Priprema kombuhe</Link>

                <BlogSubtitle text={'Gde kupiti kombuhu?'} id={5} />
                <BasicParagraph text={"Ako želite da započnete svoje kombuha putovanje, naručite SCOBY čajnu gljivu direktno sa našeg sajta!"} />
                <HighlightedSection text={"SCOBY čajnu gljivu i sve potrebne sastojke možete pronaći na sledećem linku:"} />
                <Link href="https://www.bucha.rs/proizvodi/kombuha-scoby-cajna-gljiva">Kombuha SCOBY – bucha.rs</Link>
                <BasicParagraph text={"Pridružite se kombuha zajednici u Srbiji i otkrijte sve prednosti ovog jedinstvenog napitka."} />

                <FloatingNav
                    title={"Sadržaj članka:"}
                    sections={['Šta je kombuha?', 'Zašto je popularna u Srbiji?', 'Zdravstvene prednosti kombuhe', 'Kako se pravi kombuha?', 'Gde kupiti kombuhu?']}
                />
            </article>
        </main>
    );
}
