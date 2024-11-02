import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { Arimo } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Card from '@/components/landing-cards/simple-card/SimpleCard'
import TeamSection from '@/components/footer/TeamSection'
import Navbar from '@/components/nav/Navbar'
import GridCard from '@/components/landing-cards/grid-card/GridCard'
import VideoCard from '@/components/landing-cards/video-card/VideoCard'

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap'
});

export default function Home() {
  const title = 'Kombuha (Kombucha) čajna gljiva prodaja - bucha.rs'
  const description = 'Online prodaja kombuhe u Srbiji - Kombuha čajna gljive, starter setovi, recepti i saveti za fermentaciju. Poručite svoju kombuhu na bucha.rs'
  const canonicalUrl = `https://www.bucha.rs/`
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
      </Head>
      <Navbar />
      <main className={`${styles.main} ${arimo.className}`}>
        <div className={styles.content}>
          <h1>
            Kombuha (Kombucha) čajna gljiva prodaja
          </h1>
          <div>
            <VideoCard title={'Uputstvo za pripremu 📝'}
              text={'Istražujete kako se pravi kombuha - fermentisano piće od čajne gljive? Na pravom ste mestu! Otkrijte uputstva, recepte i savete za pripremu kombuhe kod kuće. Saznajte sve o procesima fermentacije, idealnoj temperaturi, i trikovima za postizanje savršenog ukusa.'}
              buttons={[{ 'btnText': 'Prva tura', 'btnUrl': '/uputstva/priprema-kombuhe' }, { 'btnText': 'Ukusi', 'btnUrl': '/uputstva/druga-fermentacija' }]}
              bgColor={'#3D5A80'}
              lightBgColor={'#6d9ddb'}
              order={1}
              videoUrl={'/videos/broll.mp4'} />
            <Card title={'Setovi za pravljenje Kombuhe 🏁'}
              text={'Nabavite sve što vam je potrebno za pravljenje kombuhe kod kuće! Naša ponuda uključuje kombuha čajne gljive, starter setove, recepte i savete za fermentaciju'}
              buttons={[{ 'btnText': 'Pogledajte setove', 'btnUrl': '/prodaja' }]}
              bgColor={'#036141'}
              lightBgColor={'#bbf2d1'}
              order={2}
              imgUrl={'/images/kombuha_set.png'}
              imgAlt={'kombuha setovi za pripremu'} />
            <Card title={'Nazdravite sa nama 🤩'}
              text={'Isprobajte naše ukuse. Pa nam javite koji je vaš omiljeni.'}
              buttons={[{ 'btnText': 'Istražite ukuse', 'btnUrl': '/kombuha' }]}
              bgColor={'#B04A59'}
              lightBgColor={'#B04A59'}
              order={1}
              imgUrl={'/images/kombuha2_2.jpg'}
              imgAlt={'kombuha prodaja u srbiji'} />
            <GridCard title={'Podelite sa nama Vaše iskustvo 🥳'}
              text={'Podelite sa nama vaše iskustvo u pravljenju i uživanju u kombuhi! Pišite nam o vašim omiljenim receptima, izazovima tokom fermentacije, ili savetima za postizanje savršenog ukusa. Vaše priče i saveti pomažu zajednici ljubitelja kombuhe da raste i inspirišu nove članove.'}
              buttons={[{ 'btnText': 'Zapratite nas', 'btnUrl': 'https://www.instagram.com/bucha.rs/' }]}
              bgColor={'#F9A03F'}
              lightBgColor={'#F3BC80'}
              order={2}
              imgs={[{ 'url': '/images/kombuha3_5.jpeg', 'alt': 'kombucha srbija' }, { 'url': '/images/kombuha3_2.jpeg', 'alt': 'kombuha novi sad' }, { 'url': '/images/kombuha3_1.jpeg', 'alt': 'kombuha gljiva prodaja' }, { 'url': '/images/kombuha3_3.jpeg', 'alt': 'kombuha prodaja novi sad' }]} />
          </div>
          <TeamSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
