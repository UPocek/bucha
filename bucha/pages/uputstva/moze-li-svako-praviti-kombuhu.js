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

export default function MozeSvakoPravitiKombuhuBlog() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.bucha.rs/uputstva/moze-li-svako-praviti-kombuhu" />
                <meta name="description"
                    content="Otkrijte kako svako može praviti kombuhu kod kuće! Kompletan vodič za početnike, saveti, oprema i najčešće greške." />
                <meta name="keywords" content="pravljenje kombuhe, kombuha kod kuće, fermentacija, priprema kombuhe, kombuha za početnike" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="RS" />

                <meta property="og:title" content="Može li svako praviti kombuhu? Vodič za početnike" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Otkrijte jednostavan način pravljenja kombuhe kod kuće! Saveti, oprema i koraci za perfektnu kombuhu." />
                <meta property="og:url" content="https://www.bucha.rs/uputstva/moze-li-svako-praviti-kombuhu" />
                <meta property="og:site_name" content="Online prodaja kombuhe - bucha.rs" />
                <meta property="og:image" content="https://www.bucha.rs/images/post9/kombuha-priprema.webp" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="720" />
                <meta property="og:locale" content="sr_RS" />

                <title>Može li svako praviti kombuhu? Vodič za početnike</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "Pravljenje kombuhe kod kuće",
                            "step": [{
                                "@type": "HowToStep",
                                "text": "Prikupite potrebnu opremu i sastojke",
                                "name": "Priprema"
                            }, {
                                "@type": "HowToStep",
                                "text": "Napravite crni ili zeleni čaj i dodajte šećer",
                                "name": "Priprema čaja"
                            }, {
                                "@type": "HowToStep",
                                "text": "Dodajte starter sa čajnom gljivom",
                                "name": "Fermentacija"
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
            <article className={styles.blog} id="pravljenje-kombuhe" role="article">
                <BlogTitle title="Može li svako praviti kombuhu?" />

                <Meta
                    metaTag1="25. NOVEMBAR 2024."
                    metaTag2="2 minuta čitanja"
                    metaTag3="Praktični vodič"
                />

                <BlogImage
                    src="/images/post9/kombuha-priprema.webp"
                    alt="Pravljenje kombuhe kod kuće"
                />

                <StrongParagraph
                    text="Želite da naučite recept kućne fermentacije? Otkrivamo vam da li SVAKO može da pravi kombuhu i kako početi! 🍵✨"
                />

                <TableOfContents sections={[
                    'Da li je kombuha za sve?',
                    'Potrebna oprema i sastojci',
                    'Najčešće greške početnika',
                    'Saveti za uspešno pravljenje'
                ]} />

                <BlogSubtitle text="Da li je kombuha za sve?" id={1} />

                <BasicParagraph
                    text="Odgovor je – SKORO pa za sve! Pravljenje kombuhe nije velika nauka, ali zahteva malo znanja i strpljenja. Hajde da razjasnimo ko sve može da se uhvati ovog zdravog izazova. 🌿"
                />

                <HighlightedSection
                    text="Kombuha je prirodni, probiotski napitak koji mogu praviti odrasli i mladi uz malo preciznosti i želje za eksperimentisanjem!"
                />

                <BlogSubtitle text="Potrebna oprema i sastojci" id={2} />

                <BulletPoints items={[
                    'Staklena tegla (1-6 litara)',
                    'Pamučna krpa',
                    'Gumica za pritezanje',
                    'Crni ili zeleni čaj',
                    'Šećer (najbolje trskin beli šečer)',
                    'Filter voda',
                    'SCOBY starter kultura'
                ]} />

                <Focus
                    text="Napomena: SCOBY starter kultura je neizostavni deo za pripremu kombuhe kod kuće, kupite svoju kombuha gljivu klikom na dugme PRODAJA u meniju gore 🌱"
                />

                <StrongParagraph
                    text="Detaljno korak po korak uputstvo za pripremu kombuhe možete pronaći na ovom linku: "
                />

                <Link href="/uputstva/priprema-kombuhe">Recept za prepiremu kombuhe korak po korak</Link>

                <BasicParagraph text="Ukoliko vas interesuje šta je druga fermentacija i kako da od vaše kombuha baze napravite super ukuse posetite:" />

                <Link href="/uputstva/druga-fermentacija">Uputstvo za drugu fermentaciju kombuhe</Link>

                <BlogSubtitle text="Najčešće greške početnika" id={3} />

                <HighlightedSection
                    text="❌ Greške koje MORATE izbeći:
  - Upotreba metalnih posuda
  - Prekrivanje tegle hermetičkim poklopcem
  - Izlaganje direktnoj sunčevoj svetlosti
  - Korišćenje aromantizovanog čaja"
                />

                <BlogSubtitle text="Saveti za uspešno pravljenje" id={4} />

                <BasicParagraph
                    text="Za savršenu kombuhu pratite ove zlatne savete iskusnih fermentatora!"
                />

                <h3>Temperature i vreme</h3>
                <BasicParagraph
                    text="Idealna temperatura je između 22-28°C. Fermentacija traje 7-10 dana, ali pratite ukus i konzistenciju."
                />

                <Focus
                    text="Svaka tegla kombuhe je jedinstvena - budite strpljivi i eksperimentišite! 🔬"
                />

                <BasicParagraph
                    text="Spremni da napravite svoju prvu kombuhu? Posetite našu online prodavnicu i pronađite sve što vam je potrebno za početak! 🛒"
                />

                <FloatingNav
                    title="Pređi na:"
                    sections={[
                        'Da li je kombuha za sve?',
                        'Potrebna oprema i sastojci',
                        'Najčeše greske pocetnika',
                        'Saveti za uspesno pravljenje'
                    ]}
                />
            </article>
        </main>
    );
}