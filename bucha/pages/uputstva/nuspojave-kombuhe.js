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

export default function KombuhaNuspojaveRiziciBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/uputstva/nuspojave-kombuhe" />
                <meta name="description"
                    content="Otkrijte sve o mogućim rizicima i nuspojavama kombuhe. Stručan vodič o zdravstvenim aspektima i pravilnoj konzumaciji." />
                <meta name="keywords" content="kombuha nuspojave, rizici kombuhe, zdravstveni efekti kombuhe, sigurnost kombuhe, kombuha zdravlje" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Rizici i nuspojave kombuhe koje morate znati" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Detaljno objašnjenje svih potencijalnih rizika i nuspojava kombuhe. Saznajte šta treba da znate pre konzumacije." />
                <meta property="og:url" content="https://www.bucha.rs/uputstva/nuspojave-kombuche" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/post11/nuspojave-kombuche.webp" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="720" />
                <meta property="og:locale" content="sr_RS" />

                <title>Rizici i nuspojave kombuhe koje morate znati</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "Koje su nuspojave kombuhe?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Moguće nuspojave su: alergijske reakcije, problemi sa varanjem kod osetljivih osoba, interakcije sa nekim lekovima. Zato uvodite kombuhu postepeno u vašu ishranu i pratite odgovor vašeg tela. "
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
            <article className={styles.blog} id="kombuha-rizici" >
                <BlogTitle title="Rizici i nuspojave kombuhe (kombuche) koje morate znati" />

                <Meta
                    metaTag1="25. NOVEMBAR 2024."
                    metaTag2="3 minuta čitanja"
                    metaTag3="Kombucha"
                />

                <BlogImage
                    src="/images/post11/nuspojave-kombuche.webp"
                    alt="Kombuha i zdravstveni rizici"
                />

                <StrongParagraph
                    text="Želite da saznate sve o potencijalnim rizicima kombuhe? Ovo je stručni vodič korz informacije koje svako treba da zna! 🍵"
                />

                <TableOfContents sections={[
                    'Najčešći zdravstveni rizici',
                    'Ko treba da bude oprezan',
                    'Moguće nuspojave',
                    'Kako smanjiti rizike'
                ]} />

                <BlogSubtitle text="Najčešći zdravstveni rizici" id={1} />

                <BasicParagraph
                    text="Kombuha (kombucha) je generalno sigarna, ali postoje određeni rizici koje treba razumeti:"
                />

                <BulletPointsBold items={[
                    { 'title': 'Mogućnost kontaminacije pića štetnim bakterijama', 'text': 'Ukoliko se priprema sa prljavim rukama' },
                    { 'title': 'Potencijalne alergijske reakcije', 'text': 'Prilikom prvog pijenja počnite sa malom dozom' },
                    { 'title': 'Problemi sa varanjem kod osetljivih osoba', 'text': 'Konzumirajte u malim količinama do 125ml na dan' },
                    { 'title': 'Interakcije sa nekim lekovima', 'text': 'Ukoliko koristite neku terapiju pre uvođenja kombuhe posavetujete se sa lekarom' },
                    { 'title': 'Rizik od prekomerne konzumacije', 'text': 'Znamo da je jako lepa, ali neprekoračujte limit od 450ml dnevno' }
                ]} />

                <HighlightedSection
                    text="VAZNO: Kombuha NIJE zamena za medicinsku terapiju ili zdravstveni savet stručnjaka!"
                />

                <BlogSubtitle text="Ko treba da bude oprezan" id={2} />

                <BasicParagraph
                    text="Određene grupe ljudi treba da budu posebno oprezne pri konzumaciji kombuhe:"
                />

                <h3>Povećan oprez potreban:</h3>
                <BulletPoints
                    items={["⚠️ Osobe sa oslabljenim imunitetom", "⚠️ Trudnice i dojeće majke", "⚠️ Osobe sa hroničnim oboljenjima", " ⚠️ Ljudi na terapiji antibioticima", " ⚠️ Osobe sa dijabetesom"]}
                />

                <Focus
                    text="Uvek konsultujte lekara pre nego što uključite kombuhu u svoju ishranu! 👩‍⚕️"
                />

                <BlogSubtitle text="Moguće nuspojave" id={3} />

                <StrongParagraph text={"RETKE ali moguće nuspojave:"} />

                <BulletPoints
                    items={["Nadimanje i stomačni problemi", "Otežano disanje", "Mučnina", "Alergijske reakcije"]}
                />

                <BlogSubtitle text="Kako smanjiti rizike" id={4} />

                <BulletPoints items={[
                    'Kupujte kombuhu od proverenih proizvođača',
                    'Pratite preporučene dnevne količine (~125ml)',
                    'Čuvajte kombuhu na odgovarajućoj temperaturi',
                    'Redovno proveravajte znak fermentacije',
                    'Vodite računa o higijeni pripreme'
                ]} />

                <Focus
                    text="Vaše zdravlje je na prvom mestu - uvek budite oprezni i slušajte svoje telo! ❤️"
                />

                <BasicParagraph
                    text="Želite sigurnu i kvalitetnu kombuhu? Posetite našu online prodavnicu gde nudimo proverene, bezbedne fermentisane napitke i setove za pripremu! 🛒"
                />

                <Link href={'/prodaja'}>Online prodaja kombuhe</Link>

                <FloatingNav
                    title="Pređi na:"
                    sections={[
                        'Najčešći zdravstveni rizici',
                        'Ko treba da bude oprezan',
                        'Moguće nuspojave',
                        'Kako smanjiti rizike',
                    ]}
                />
            </article>
        </main>
    );
}