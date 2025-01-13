import Head from 'next/head'
import { Arimo } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/footer/Footer'
import InstructionsIntro from '@/components/tutorials/instructions-intro/InstructionsIntro'
import Step from '@/components/tutorials/step/Step'
import TeamSection from '@/components/footer/TeamSection'
import Related from '@/components/tutorials/related/Related'
import Navbar from '@/components/nav/Navbar'

const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap'
});

export default function Instructions() {
    const title = "Kako se pravi kombuha - uputstvo pripreme kombuhe kod kuće"
    const description = "Saznajte kako se pravi kombuha čaj kod kuće. Uputstvo i recept za pripremu zdravog kombucha čajna gljiva napitka. bucha.rs Srbija"
    const canonicalUrl = `https://www.bucha.rs/uputstva/priprema-kombuhe`;
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

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "Kako se pravi kombuha - uputstvo pripreme kombuhe kod kuće",
                            "description": "Saznajte kako se pravi kombuha čaj kod kuće. Uputstvo i recept za pripremu zdravog kombucha čajna gljiva napitka.",
                            "totalTime": "PT7D",
                            "estimatedCost": {
                                "@type": "MonetaryAmount",
                                "currency": "RSD",
                                "value": "1000"
                            },
                            "supply": [
                                {
                                    "@type": "HowToSupply",
                                    "name": "Staklena tegla"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "SCOBY (čajna gljiva)"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Zeleni ili crni čaj"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Šećer"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Voda"
                                }
                            ],
                            "tool": [
                                {
                                    "@type": "HowToTool",
                                    "name": "Šerpa ili džezva"
                                },
                                {
                                    "@type": "HowToTool",
                                    "name": "Prozračna krpa"
                                }
                            ],
                            "step": [
                                {
                                    "@type": "HowToStep",
                                    "name": "Pripremite teglu",
                                    "text": "Operite staklenu teglu detaljno. Zdrava Scoby jedinka može da proizvode između 2 i 10 litara kombuha baze za nedelju dana.",
                                    "image": "https://www.bucha.rs/images/priprema-kombuhe-korak1.png",
                                    "url": "https://www.bucha.rs/uputstva/priprema-kombuhe#step1"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Prokuvajte vodu za čaj",
                                    "text": "Napunite oko 1l vode u šerpicu ili džezvu i stavite je na vatru da prokuva.",
                                    "image": "https://www.bucha.rs/images/priprema-kombuhe-korak2.png",
                                    "url": "https://www.bucha.rs/uputstva/priprema-kombuhe#step2"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Spremite čaj",
                                    "text": "Koristite zeleni ili crni čaj. Potrebno je 4 grama čaja po litri kombuhe.",
                                    "image": "https://www.bucha.rs/images/priprema-kombuhe-korak3.png",
                                    "url": "https://www.bucha.rs/uputstva/priprema-kombuhe#step3"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Završite osnovu",
                                    "text": "Sipajte proključalu vodu u teglu, dodajte čaj i sačekajte 3-4 minuta.",
                                    "image": "https://www.bucha.rs/images/priprema-kombuhe-korak4.png",
                                    "url": "https://www.bucha.rs/uputstva/priprema-kombuhe#step4"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Dodajte šećer",
                                    "text": "Dodajte 60 grama šećera po litri kombuhe i dobro promešajte da se rastvori.",
                                    "image": "https://www.bucha.rs/images/priprema-kombuhe-korak5.png",
                                    "url": "https://www.bucha.rs/uputstva/priprema-kombuhe#step5"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Dopunite teglu vodom",
                                    "text": "Dopunite teglu hladnom vodom skoro do vrha, ostavite malo mesta za Scoby. Sačekajte da se voda ohladi na sobnu temperaturu.",
                                    "image": "https://www.bucha.rs/images/priprema-kombuhe-korak6.png",
                                    "url": "https://www.bucha.rs/uputstva/priprema-kombuhe#step6"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Zagnjurite Scoby-a",
                                    "text": "Dodajte Scoby i starter tečnost u teglu. Prekrijte teglu prozračnom krpom i ostavite na tamnom i suvom mestu 7 dana.",
                                    "image": "https://www.bucha.rs/images/priprema-kombuhe-korak7.png",
                                    "url": "https://www.bucha.rs/uputstva/priprema-kombuhe#step7"
                                }
                            ],
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "ratingCount": "150"
                            },
                            "author": {
                                "@type": "Organization",
                                "name": "bucha.rs",
                                "url": "https://www.bucha.rs"
                            }
                        })
                    }}
                />
            </Head>
            <Navbar />
            <main role="main" className={`${styles.main} ${arimo.className}`}>
                <InstructionsIntro title={'Kombuha uputstvo za pripremu'} text1={'Ovo uputstvo obuhvata detaljno opisane sve korake  kako da od tek otpakovanog Scoby-a (čajne gljive koju ste kupili) dođete do Vaše prve nadamo se ukusne Kombuhe. Tako da ukoliko još uvek nemate vašu specijalnu gljivu, prvo je poručite preko linka'} link={'/prodaja'}
                    linkText={' poručite kombuhu '} text2={'pa se vratite na ovo uputstvo, ono neće otići nigde. E super, sada još osmeh na lice i imate sve što vam je potrebo da vaša Kombuha uspe odlično, pošto je ovo zaista jednostavan proces i vrlo brzo ćete se uhodati. Spremni? Krećemo! 🥳'} />
                <Step title={'Pripremite teglu'} number={'1'} image={'/images/priprema-kombuhe-korak1.png'} text={'Zdrava Scoby (čajna gljiva) jedinka za oko nedelju dana može da proizvode, zavisno od veličine, između 2 i 10 litara komhuha baze. Iako mlad, Scoby kojeg ste vi dobili u vašem “Starter” setu može da proizvode oko 2 litre tečnosti. Scoby će svakom novom turom sve više i više rasti i biće spreman da proizvode sve više kombuhe tako da držite to na umu. Takođe dužina prve fermentacije može da varira između 5-6 dana ukoliko želite slabiji ukus kombuhe, pa do 2 nedelje ukoliko želite intenzivniji ukus, ali za početak se držite naše preporuke od 7 dana pa korigujte po svom ukusu. Sada kada ovo znate, detaljno operite staklenu teglu koju ste dobili u našem setu, ili koju ste vi pripremili, postavite je na radnu površinu i pređite na naredni korak.'} order={'1'} />
                <Step title={'Prokuvajte vodu za čaj'} number={'2'} image={'/images/priprema-kombuhe-korak2.png'} text={'Naredni korak je da napunite oko 1l vode u šerpicu ili džezvu i da je stavite na vatru da prokuva. Kasnije ćemo u teglu dodavati hladne vode, tako da prokuvajte samo onoliko vode koliko je potrebno da napravite čaj u tegli. Dok čekate da voda proključa pređite na korak 3.'} order={'2'} />
                <Step title={'Spremite čaj'} number={'3'} image={'/images/priprema-kombuhe-korak3.png'} text={'Za pripremu Kombuhe koriste se najčešće zeleni ili crni čaj, za početak vam ne bismo preporučili da previše eksperimentišete sa drugim opcijama. Mi za našu Kombuhu uvek koristimo rinfuzni čaj u filter kesicama pošto je čistiji i iz našeg iskustva daje konzistentnije rezultate, ali ako imate samo čaj u kesici i to je skroz okej. Koristite zeleni čaj, ako više idete na sladunjav ukus, dok je crni čaj bolji ukoliko više volite gorče note. Biće vam potrebno 4 grama čaja po litri Kombuhe koju pravite, tako da ako imate teglu od 2 litre biće Vam potrebno 8 grama čaja.'} order={'1'} />
                <Step title={'Završite osnovu'} number={'4'} image={'/images/priprema-kombuhe-korak4.png'} text={'Nakon što voda proključa, prespite je u teglu, zatim u vodu stavite čaj koji ste pripremili i sačekajte 4-8 minuta da se čaj napravi.'} order={'2'} />
                <Step title={'Dodajte šećer'} number={'5'} image={'/images/priprema-kombuhe-korak5.png'} text={'Naredni korak je da našem Scoby-u pripremimo hranu za narednih oko nedelju dana. Scoby se hrani šećerom iz čaja i koristi ga za fermentaciju, tako da u suštini nakon fermentacije gotovo sav šećer koji sada dodate će nestati. Potrebno je da u čaj sipate 60 grama šećera po litri Kombuhe koju pripremate, tako da ukoliko imate teglu od 2 litre biće vam potrebno 120 grama šećera. Koji šećer ćete koristiti je sve jedno. Mi za našu fermentaciju koristimo trskin beli šećer, ali i običan kristal šećer je skroz okej, samo naša preporuka je da tu bude beli šećer, a ne smeđi pišto je Scoby-ju lakše da ga razgradi. Nakon što ste dodali šećer u teglu dobro ga promešajte da se potpuno rastvori.'} order={'1'} />
                <Step title={'Dopunite teglu vodom'} number={'6'} image={'/images/priprema-kombuhe-korak6.png'} text={'Sada dopunite teglu filtriranom vodom skoro do vrha, ostavite malo mesta za Scoby-a, i sačekajte da se voda ohladi. Kako biste ubrzali ovaj proces voda koju dodajete treba da bude hladna. Nikako Scoby-a ne stavljajte u vruću vodu pošto ćete ga spržiti i on je na kraju krajeva malo ljigavo, ali na neki način veoma drago, živo biće. Kada se voda ohladila na sobnu temperaturu prelazimo na naredni korak.'} order={'2'} />
                <Step title={'Zagnjurite Scoby-a'} number={'7'} image={'/images/priprema-kombuhe-korak7.png'} text={'Za kraj dodajte glavnog glumca ove predstave. Takođe uz samu gljivu u našem setu ste dobili i “starter” tečnost koju takođe u potpunosti treba da sipate u teglu, ona je zadužena da započne ceo proces fermentacije, obezbedi odgovarajuću PH vrednost baze i bez nje vaš Scoby može da ..., ode na produženi odmor. Takođe u svakoj narednoj turi, ostavite oko jednu šolju Kombuha baze sa strane pa kao i sada dodajte je na kraju uz samu gljivu. Još jedan topli savet je da pre svake ture, u mlakoj vodi propereta Scoby-a. Higijena je kod Kombuhe najvažnija stvar i uvek obratite pažnju da sa čajnom gljivom rukujete sa čisim rukama. Ovo je gljiva i pojava sluzi, neprijatnih mirisa, mrkih fleka ili novih delova je skroz normalna. Jedino što treba da vas zabrine je pojava plavih tačkica ili buđi, u tom slučaju ih što pre otkloniti ili cela Kombuha može propasti. Sada prekrite teglu prozračnom krpom kako bi kombuha mogla da diše. Ukoliko ste uspešno ispratili sve korake do sada ostaje vam samo da se pozdravite sa Scoby-em do sledeće nedelje i da teglu odložite na mračno i suvo mesto. Znamo da je zanimljivo da svaki dan obilazite i pratite kako vaša mala fabrika napreduje, ali pazite da time na poremetite njen rad. To je to, sada ste zvanično Kombuha majstori!'} order={'1'} />
                <Step title={'Šta sada?'} number={'8'} text={'Znamo da je ovo mnogima prvi put da prave kombuhu, zato predpostavljamo da imate još gomilu pitanja za nas 😄. Pokušali smo na što više njih da damo odgovore, tako da ako vas interesuje nešto od ovih tema bacite pogled:'} order={'1'} linkTxts={['Koliko kombuhe treba piti?', '10 zdravstvenih benefita kombuhe', 'Da li kombuha sadrži alkohol?']} links={['/uputstva/koliko-kombuhe-treba-piti', '/uputstva/zdravstveni-benefiti-kombuhe', '/uputstva/da-li-kombuha-sadrzi-alkohol']} />
                <Related />
                <TeamSection />
            </main>
            <Footer />
        </>
    )
}
