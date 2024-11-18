import Head from 'next/head'
import { Arimo } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/footer/Footer'
import InstructionsIntro from '@/components/tutorials/instructions-intro/InstructionsIntro'
import Step from '@/components/tutorials/step/Step'
import TeamSection from '@/components/footer/TeamSection'
import Navbar from '@/components/nav/Navbar'

const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap'
});

export default function Instructions() {
    const title = 'Kombuha druga fermentacija uputstvo za pripremu kombuhe'
    const description = 'Detaljni recept za pravljenje kombuha čaja sa različitim ukusima voća. Druga fermentacija je proces kada kombuha napitak od čajne gljive dobija sjajan ukus.'
    const canonicalUrl = `https://www.bucha.rs/uputstva/druga-fermentacija`
    return (
        <>
            <Head>
                {/* Basic Meta Tags */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />

                {/* Canonical URL */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph Tags */}
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:site_name" content="bucha.rs" />
                <meta property="og:image" content={`https://www.bucha.rs/favicon.ico`} />
                <meta property="og:image:alt" content={title} />
                <meta property="og:locale" content="sr_RS" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="website" />
                <meta property="og:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://www.bucha.rs/favicon.ico" />

                {/* Additional Meta Tags */}
                <meta name="geo.region" content="RS" />
                <meta name="language" content="sr" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="druga fermentacija kombuhe, kombuha sa ukusima, hibiskus kombuha, đumbir kombuha, karbonizacija kombuhe" />
                <meta property="article:readTime" content="5" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "Kombuha druga fermentacija - uputstvo za pripremu kombuhe sa ukusima",
                            "description": "Recept za pravljenje kombuha čaja sa različitim ukusima voća. Druga fermentacija je proces kada kombuha napitak od čajne gljive dobija sjajan ukus.",
                            "totalTime": "PT4D",
                            "estimatedCost": {
                                "@type": "MonetaryAmount",
                                "currency": "RSD",
                                "value": "1000"
                            },
                            "supply": [
                                {
                                    "@type": "HowToSupply",
                                    "name": "Kombuha baza iz prve fermentacije"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Hibiskus čaj (10g po flaši)"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Đumbir (5-6g)"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Limun"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Voće po izboru"
                                }
                            ],
                            "tool": [
                                {
                                    "@type": "HowToTool",
                                    "name": "Flaša sa herm čepom"
                                },
                                {
                                    "@type": "HowToTool",
                                    "name": "Nož za seckanje"
                                }
                            ],
                            "step": [
                                {
                                    "@type": "HowToStep",
                                    "name": "Pripremite sastojke",
                                    "text": "Izvadite vašu Kombuha bazu i pripremite voće ili čajeve koje ćete koristiti za aromatizaciju.",
                                    "image": "https://www.bucha.rs/images/kombuha_druga_fermentacija_korak1.png",
                                    "url": "https://www.bucha.rs/uputstva/druga-fermentacija#step1"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Odaberite ukus",
                                    "text": "Za Hibiskus + Đumbir kombinaciju: Pripremite 10g hibiskus čaja, 5-6g đumbira i jedan limun. Nacedite limun u flašu, dodajte hibiskus i sitno seckani đumbir.",
                                    "image": "https://www.bucha.rs/images/kombuha_druga_fermentacija_korak2.png",
                                    "url": "https://www.bucha.rs/uputstva/druga-fermentacija#step2"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Sipajte kombuha bazu",
                                    "text": "Sipajte kombuha bazu iz prve fermentacije u flašu skoro do vrha, ostavite malo prostora. Zatvorite herm čep pažljivo.",
                                    "image": "https://www.bucha.rs/images/kombuha_druga_fermentacija_korak3.png",
                                    "url": "https://www.bucha.rs/uputstva/druga-fermentacija#step3"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Otvaranje flaše",
                                    "text": "Nakon 3-4 dana fermentacije, odložite flaše u frižider preko noći. Otvarajte flašu veoma oprezno zbog pritiska koji se stvorio.",
                                    "image": "https://www.bucha.rs/images/kombuha_druga_fermentacija_korak4.png",
                                    "url": "https://www.bucha.rs/uputstva/druga-fermentacija#step4"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Uživajte",
                                    "text": "Vaša aromatizovana kombuha je spremna za konzumiranje. Eksperimentišite sa različitim ukusima i delite svoje rezultate.",
                                    "image": "https://www.bucha.rs/images/kombuha_druga_fermentacija_korak5.png",
                                    "url": "https://www.bucha.rs/uputstva/druga-fermentacija#step5"
                                }
                            ],
                            "recipeYield": "1 flaša kombuhe",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "120"
                            },
                            "author": {
                                "@type": "Organization",
                                "name": "bucha.rs",
                                "url": "https://www.bucha.rs"
                            },
                            "nutrition": {
                                "@type": "NutritionInformation",
                                "calories": "30 calories",
                                "servingSize": "240ml"
                            }
                        })
                    }}
                />
            </Head>
            <Navbar />
            <main role="main" className={`${styles.main} ${arimo.className}`}>
                <InstructionsIntro title={'Kombuha ukusi - uputstvo za drugu fermentaciju'} text1={'Ukoliko ste završili sa pripremom baze za vašu kombuhu i spremni ste da je obogatite sjajnim ukusima onda ste na pravom mestu. Ukoliko ne znate o čemu pričam onda prvo pogledajte'} link={'/uputstva/priprema-kombuhe'}
                    linkText={' uputstvo za pripremu kombuhe'} text2={'. Druga fermentacija je “where magic happens” ovde od relativno nezanimljive baze Kombuhe, kreiramo sjajne ukuse i gazirane sokove koji su veoma zdravi i osvežavajući za pijenje. Tako da ukoliko želite da učinite vašu Kombuhu zabavnom skoknite na prvi korak. '} />
                <Step title={'Pripremite sastojke'} number={'1'} image={'/images/kombuha_druga_fermentacija_korak1.png'} text={'Došao je trenutak koji ste čekali, vaša Kombuha baza je spremna, vaša mala tegla fabrika je naporno radila i sada možete da pređete na drugu fermentaciju i da obogatite vašu Kombuhu različitim ukusima. Ovaj korak nije obavezan i ukoliko vam je osnovna Kombuha ukusna i odgovarajuća onda ste na konju, ali ako ste kao mi i želite malo šareniju, voćniju, zanimljiviju Kombuhu, flaširanjem i dodavanjem voća možete da u svojoj kući pripremite prelepi, zdravi, sok. Izvadite vašu Kombuha teglu i stavite je na radnu površinu. Zatim odlučite koji ukus Kombuhe želite da pravite i nabavite to voće ili čajeve. Ukoliko ste novi u ovome pređite na korak 2. da čujete neke naše ideje. '} order={'1'} />
                <Step title={'Odaberite ukus'} number={'2'} image={'/images/kombuha_druga_fermentacija_korak2.png'} text={'Za drugu fermentaciju Kombuhe možete da koristite gotovo svo voće, povrće i čajeve, ali prosto neki ukusi nisu baš najsrećniji. Za početak možete da isprobate neke naše proverene recepte, a u nekoj narednoj turi da i sami eksperimentišite sa sopstvenim idejama za ukuse. Jedan od naših najpopularnijih ukusa je Hibiskus + Đumbir. Za njegovu pripremu potrebno vam je 10 grama rinfuznog hibiskus čaja po flaši, parče đumbira 5-6 grama i jedan limun. Prvo nacedite limun, sipajte ga u flašu sa herm čepom u kojoj ćete vršiti drugu fermentaciju, zatim ubacite rinfuzni himiskus i na kraju naseckajte đumbir na sitne kockice i njih dodajte u flašu. Proces je sličan za bilo koji ukus koji pravite, a spisak svih naših recepata možete pogledati na linku  '} linkTxt={'kombuha recepti.'} link={'#'} order={'2'} />
                <Step title={'Sipajte kombuha bazu'} number={'3'} image={'/images/kombuha_druga_fermentacija_korak3.png'} text={'Naredni korak je da sipate kombuha bazu iz prve fermentacije u izabranu flašu maltene do vrha, ostavljajući vrlo malo prostora do čepa. Zatvorite herm čep pažljivo i to je to, odradili ste sve što je potrebno za uspešnu drug fermentaciju. U narednih 3-4 dana u flaši će se vršiti karbonizacija i Kombuha će da pretvori sećer iz voća u gazirani napitak zbog kog smo i započeli ovu zanimljivu avanturu. Nakon što ste pričekali 3-4 dana da se završi druga fermentacija, najbolje bi bilo da odložite flaše u frižider preko noći. Time ćete zaustaviti proces karbonizacije i samim tim sebi olakšati otvaranje Kombuhe sledećeg dana. Kada to uradite spremni ste da pređete na naredni korak. '} order={'1'} />
                <Step title={'Otvaranje flaše'} number={'4'} image={'/images/kombuha_druga_fermentacija_korak4.png'} text={'Iako sada verovatno razmišljate, “Joj Bože, šta ima da me uče kako da otvorim flašu, samo uzmem i otvorim...” verujte nam, ovo je jako bitan deo i samo se setite da se par dana u zatvorenoj flaši kreirao ugljen dioksid i mehurići i da ako naglo otvorite flašu dobićete fenomenalnu eksploziju kao kada promućkate CocaColu i otvorite. Zato otvarajte flašu veoma oprezno. Verovatno će se kreirati veliki pritisak na čepu i biće je teško polako otvoriti, ali budite strpljivi. Takođe odmah da vas upozorim verovatno ćete prebrzo otvoriti flašu prvi put i verovatno će vam Kombuha napraviti nered po celoj kuhinji, tako da kada krenete da nam ... sve po spisku samo se setite da smo vas upozorili i da smo vam rekli da otvarate što pažljivije i sporije. Ukoliko se Kombuha previše karbonizovala tokom druge fermentacije naredni pute smanjite broj dana ili u suprotnom slučaju povećajte broj dana.'} order={'2'} />
                <Step title={'Uživajte'} number={'5'} image={'/images/kombuha_druga_fermentacija_korak5.png'} text={'Ukoliko je sve prošlo kako treba, uspeli ste, napravili ste vašu prvu super sjajnu bajnu Komuhu. Čestitamo! Nadamo se da ste uživali, da su vam naša uputstva pomogla i da ste naučili nešto novo. Sada je red na vas da budete kreativni, eksperimentišite sa dužinom trajanja faza i različitim ukusima. Sigurni smo da ćete pronaći pravu kombinaciju ukusa koja vama odgovara. Sve vaše eksperimente podelite sa nama uz heshtag #buchaizazov i podelićemo vaše rezultate na našim društvenim mrežama. Podelite pozitivnu energiju i videćete kako se osmeh pojavljuje na licima ljudi u vašoj okolini. Puno sreće u daljem igranju želi vam bucha.rs tim. '} order={'1'} />
                <TeamSection />
            </main>
            <Footer />
        </>
    )
}
