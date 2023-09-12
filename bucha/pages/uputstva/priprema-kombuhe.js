import Head from 'next/head'
import { Arimo } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import InstructionsIntro from '@/components/InstructionsIntro'
import Step from '@/components/Step'
import TeamSection from '@/components/TeamSection'
import Related from '@/components/Related'
import Navbar from '@/components/Navbar'

const arimo = Arimo({ subsets: ['latin'] })

export default function Instructions() {
    return (
        <>
            <Head>
                <title>Kako se pravi kombuha - uputstvo pripreme kombuhe kod kuće</title>
                <meta name="description" content="Saznajte kako se pravi kombuha čaj kod kuće. Detaljno uputstvo, recept za pripremu zdravog kombucha napitka u vašem domu. bucha.rs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charset="utf-8" />
                <meta name="author" content="Tamara Ilić, Ivana Ilić and Uroš Poček" />
                <meta name="geo.region" content="RS" />
                <meta property="og:title" content="Kako se pravi kombuha - uputstvo pripreme kombuhe kod kuće" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Saznajte kako se pravi kombuha čaj kod kuće. Detaljno uputstvo, recept za pripremu zdravog kombucha napitka u vašem domu. bucha.rs" />
                <meta property="og:url" content="https://www.bucha.rs/priprema-kombuhe" />
                <meta property="og:site_name" content="bucha.rs" />
            </Head>
            <Navbar />
            <main className={`${styles.main} ${arimo.className}`}>
                <InstructionsIntro title={'Kombuha uputstvo za pripremu'} text1={'Ovo uputstvo obuhvata detaljno opisane sve korake  kako da od tek otpakovanog Scoby-a (čajne gljive koju ste kupili) dođete do Vaše prve nadamo se ukusne Kombuhe. Tako da ukoliko još uvek nemate vašu specijalnu gljivu, prvo je poručite preko linka'} link={'#'}
                    linkText={' poručite kombuhu '} text2={'pa se vratite na ovo uputstvo, ono neće otići nigde. E super, sada još osmeh na lice i imate sve što vam je potrebo da vaša Kombuha uspe odlično, pošto je ovo zaista jednostavan proces i vrlo brzo ćete se uhodati. Spremni? Krećemo! 🥳'} />
                <Step title={'Pripremite teglu'} number={'1'} text={'Zdrava Scoby (čajna gljiva) jedinka za oko nedelju dana može da proizvode, zavisno od veličine, između 2 i 10 litara komhuha baze. Iako mlad, Scoby kojeg ste vi dobili u vašem “Starter” setu može da proizvode oko 4 litre tečnosti. Scoby će svakom novom turom sve više i više rasti i biće spreman da proizvode sve više kombuhe tako da držite to na umu. Takođe dužina prve fermentacije može da varira između 4-5 dana ukoliko želite slabiji ukus kombuhe, pa do 2-3 nedelje ukoliko želite intenzivniji ukus, ali za početak se držite naše preporuke od 7 dana pa korigujte po svom ukusu odatle. Sada kada ovo znate, detaljno operite staklenu teglu koju ste dobili u našem setu, ili koju ste vi pripremili, postavite je na radnu površinu i pređite na naredni korak.'} order={'1'} />
                <Step title={'Prokuvajte vodu za čaj'} number={'2'} text={'Naredni korak je da napunite oko 1l vode u šerpicu ili džezvu i da je stavite na vatru da prokuva. Kasnije ćemo u teglu dodavati hladne vode, tako da prokuvajte samo onoliko vode koliko je potrebno da napravite čaj u tegli. Nije potrebno da celu teglu napunite vrućom vodom. Dok čekate da voda proključa pređite na korak 3.'} order={'2'} />
                <Step title={'Spremite čaj'} number={'3'} text={'Za pripremu Kombuhe koriste se najčešće zeleni ili crni čaj, za početak vam ne bismo preporučili da previše eksperimentišete sa drugim opcijama. Mi za našu Kombuhu uvek koristimo rinfuzni čaj u filter kesicama pošto je čistiji i iz našeg iskustva daje konzistentnije rezultate, ali ako imate samo čaj u kesici i to je skroz okej. Koristite zeleni čaj, ako više idete na sladunjav ukus, dok je crni čaj bolji ukoliko više volite gorče note. Biće vam potrebno 4 grama čaja po litri Kombuhe koju pravite, tako da ako imate teglu od 4 litre biće Vam potrebno 16 grama čaja. '} order={'1'} />
                <Step title={'Završite osnovu'} number={'4'} text={'Nakon što voda proključa, prespite je u teglu, zatim u vodu stavite čaj koji ste pripremili i sačekajte 3-4 minuta da se čaj napravi. '} order={'2'} />
                <Step title={'Dodajte šećer'} number={'5'} text={'Naredni korak je da našem Scoby-u pripremimo hranu za narednih nedelju dana. Scoby se hrani šećerom iz čaja i koristi ga za fermentaciju, tako da u suštini nakon 7 dana gotovo sav šećer koji sada dodate će nestati. Potrebno je da u čaj sipate 60 grama šećera po litri Kombuhe koju pripremate, tako da ukoliko imate teglu od 4 litre biće vam potrebno 240 grama šećera. Koji šećer ćete koristiti je sve jedno. Crni i beli šećer su skroz okej, više je stvar kako ste vi navikli. Nakon što ste dodali šećer u teglu dobro ga promešajte da se potpuno rastvori.'} order={'1'} />
                <Step title={'Dopunite teglu vodom'} number={'6'} text={'Sada dopunite teglu vodom skoro do vrha, ostavite malo mesta za Scoby-a, i sačekajte da se voda ohladi. Kako biste ubrzali ovaj proces voda koju dodajete treba da bude hladna. Nikako Scoby-a ne stavljajte u vruću vodu pošto ćete ga spržiti i on je na kraju krajeva malo ljigavo, ali na neki način drago, živo biće. Kada se voda ohladila na sobnu temperaturu prelazimo na naredni korak.'} order={'2'} />
                <Step title={'Zagnjurite Scoby-a'} number={'7'} text={'Za kraj treba da dodate glavnog glumca ove predstave. Takođe uz samu gljivu u našem setu ste dobili i “starter” tečnost koju takođe u potpunosti treba da sipate u teglu, ona je zadužena da započne ceo proces fermentacije, obezbedi odgovarajuću ph vrednost čaja i bez nje vaš Scoby može da ..., kako da to kažem na lep način ... ode na produženi odmor. Takođe u svakoj narednoj turi, ostavite malo Kombuha baze sa strane pa kao i sada dodajte je na kraju uz samu gljivu u čaj. Još jedan topli savet je da pre svake ture, malo u mlakoj vodi propereta Scoby-a. Higijena je kod Kombuhe najvažnija stvar i uvek obratite pažnju da sa Scoby-em rukujete sa čisim rukama. Ovo je gljiva i pojava sluzi, neprijatnih mirisa, mrkih fleka ili novih delova je skroz normalna. Jedino što treba da vas zabrine je pojava plavih tačkica ili buđi, u tom slučaju ih što pre otkloniti ili cela Kombuha može propasti. Ukoliko ste uspešno ispratili sve korake do sada ostaje vam samo da ste pozdravite sa Scoby-em do sledeće nedelje, da teglu odložite na mračno i suvo mesto i da ga ne pomerate previše. Znamo da je zanimljivo da svaki dan obilazite i pratite kako vaša mala fabrika napreduje, ali pazite da time na poremetite njen rad. To je to, sada ste zvanično Kombuha majstori.'} order={'1'} />
                <Related />
                <TeamSection />
            </main>
            <Footer />
        </>
    )
}
