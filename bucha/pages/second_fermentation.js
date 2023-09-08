import Head from 'next/head'
import Image from 'next/image'
import { Arimo } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import InstructionsIntro from '@/components/InstructionsIntro'
import Step from '@/components/Step'
import TeamSection from '@/components/TeamSection'

const arimo = Arimo({ subsets: ['latin'] })

export default function Instructions() {
    return (
        <>
            <Head>
                <title>bucha</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={`${styles.main} ${arimo.className}`}>
                <InstructionsIntro title={'Kombuha ukusi - uputstvo za drugu fermentaciju'} text1={'Ukoliko ste završili sa pripremom baze za vašu kombuhu i spremni ste da je obogatite sjajnim ukusima onda ste na pravom mestu, ukoliko ne znate o čemu pričam onda prvo pogledajte'} link={'../instructions'}
                    linkText={' uputstvo za pripremu kombuhe'} text2={'. Druga fermentacija je “where magic happens” ovde od relativno nezanimljive baze Kombuhe, kreiramo sjajne ukuse i gazirane sokove koju su veoma zdravi i osvežavajući za pijenje. Tako da ukoliko želite da napravite vašu Kombuhu zabavnom skoknite na prvi korak. '} />
                <Step title={'Pripremite sastojke'} number={'1'} text={'Došao je trenutak koji ste čekali, vaša Kombuha baza je spremna, vaša mala tegla fabrika je naporno radila i sada možete da pređete na drugu fermentaciju i da obogatite vašu Kombuhu različitim ukusima. Ovaj korak nije obavezan i ukoliko vam je osnovna Kombuha ukusna i odgovarajuća onda ste na konju, ali ako ste kao mi i želite malo šareniju, voćniju, zanimljiviju Kombuhu, flaširanjem i dodavanjem voća možete da u svojoj kući pripremite prelepi, zdravi, sok. Izvadite vašu Kombuha teglu i stavite je na radnu površinu zatim udlučite koji ukus Kombuhe želite da pravite i nabavite to voće ili čajeve. Ukoliko ste novi u ovome pređite na korak 2. da čujete neke naše ideje. '} order={'1'} />
                <Step title={'Odaberite ukus'} number={'2'} text={'Za drugu fermentaciju Kombuhe možete da koristite gotovo svo voće, povrće i čajeve, ali prosto neki ukusi nisu baš najsrećniji. Za početak isprobajte neke naše proverene recepte, a u nekoj narednoj turi eksperimentišite sa sopstvenim idejama za ukuse. Jedan od naših najpopularnijih ukusa je Hibiskus + Đumbir. Za njegovu pripremu potrebno vam je 10 grama rinfuznog hibiskus čaja po flaši, parče đumbira 5-6 grama i jedan limun. Prvo nacedite limun, sipajte ga u flašu sa herm čepom u kojoj ćete vršiti drugu fermentaciju, zatim ubacite rinfuzni himiskus i na kraju naseckajte đumbir na sitne kockice i njih dodajte u flašu. Proces je sličan za bilo koji ukus koji pravite, a spisak svih naših recepata možete pogledati na linku  '} linkTxt={'kombuha recepti.'} link={'#'} order={'2'} />
                <Step title={'Sipajte kombuha bazu'} number={'3'} text={'Naredni korak je da sipate kombuha bazu iz prve fermentacije u izabranu flašu maltene do vrha, ostavljajući vrlo malo prostora do čepa. Zatvorite herm čep pažljivo i to je to odradili ste sve što je potrebno za uspešnu drug fermentaciju. U narednih 3-4 dana u flaši će sve vršiti karbonizacija i Kombuha će da pretvori sećer iz voća u gazirani napitak zbog kog smo i započeli ovu zanimljivu avanturu. Nakon što ste pričekali 3-4 dana da se završi druga fermentacija spremni ste da pređene na naredni korak. '} order={'1'} />
                <Step title={'Otvaranje flaše'} number={'4'} text={'Iako sada verovatno razmišljate, “Joj Bože, šta ima da me uče kako da otvorim flašu, samo uzmemi i otvorim...” veruje nam ovo je jako bitan deo i samo se setite da se par dana u zatvorenoj flaši kreirao ugljen dioksid i mehurići i da ako naglo otvorite flašu dobićete fenomenalnu eksploziju kao kada promućkate CocaColu i otvorite, zato otvarajte flašu veoma oprezno. Verovatno će se kreirati veliki pritisak na čepu i biće ga teško polako otvoriti, ali budite strpljivi. Takođe odmah da vas upozorim verovatno ćete prebrzo otvoriti flašu prvi put i verovatno će vam Kombuha napraviti nered po celoj kuhinji, tako da kada krenete da nam ... sve po spisku samo se setite da smo vas upozorili i da smo vam rekli da otvarate što pažljivije i sporije znate i umete. Ukoliko ste Komuha previše karbonizovala tokom druge fermentacije naredni pute smanjite broj dana ili u suprotnom slučaju povećajte broj dana.'} order={'2'} />
                <Step title={'Uživajte'} number={'5'} text={'Ukoliko je sve prošlo kako treba, uspeli ste, napravili ste vašu prvu super sjajnu bajnu Komuhu. Čestitamo! Nadamo se da ste uživali, da su vam naša uputstva pomogla i da ste naučili nešto novo. Sada je red na vas da budete kreativni, eksperimentišite sa dužinom trajanja faza i različitim unusima. Sigurnim smo da ćete pronaći pravu kombinaciju ukusa koja vama odgovara. Sve vaše eksperimente podelite sa nama uz hestag #buchaizazov i podelićemo vaše rezultate na našim društvenim mrežama. Podelite pozitivnu energiju i videćete kako se osmeh pojavljuje na licima ljudi u vašoj okolini. Puno sreće u daljem igranju želi vam bucha.rs tim. '} order={'1'} />
                <TeamSection />
            </main>
            <Footer />
        </>
    )
}
