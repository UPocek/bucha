import Head from 'next/head'
import { Arimo } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import GridCard from '@/components/GridCard'
import TeamSection from '@/components/TeamSection'
import { useState, useEffect } from 'react'
import NavbarMobile from '@/components/NavbarMobile'
import VideoCard from '@/components/VideoCard'

const arimo = Arimo({ subsets: ['latin'] })

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(1920);

  useEffect(() => {
    window && setScreenWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Head>
        <title>Kombuha (Kombucha) čajna gljiva - bucha.rs</title>
        <meta name="description" content="Novi sajt u Srbiji za prodaju kombuha, kombucha scoby čajne gljive i setova za pripremu kombuhe kod kuće. Poručite svoju kombuhu već danas bucha.rs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {screenWidth > 945 ? <Navbar /> : <NavbarMobile />}
      <main className={`${styles.main} ${arimo.className}`}>
        <div className={styles.content}>
          <div>
            <VideoCard title={'Uputstvo za pripremu 🎓'}
              text={'Pronađite sve što vam je potrebno da započnete svoju malu fabriku Kombuhe. Ukoliko ste početnik počnite odavde'}
              buttons={[{ 'btnText': 'Prva tura', 'btnUrl': '/uputstva/priprema-kombuhe' }, { 'btnText': 'Ukusi', 'btnUrl': '/uputstva/druga-fermentacija' }]}
              bgColor={'#3D5A80'}
              lightBgColor={'#6d9ddb'}
              order={1}
              videoUrl={'/broll.mp4'} />
            <Card title={'Nazdravite sa nama 🤩'}
              text={'Isprobajte naše ukuse. Pa nam javite koji je vaš omiljeni.'}
              buttons={[{ 'btnText': 'Poručite sada', 'btnUrl': '#' }]}
              bgColor={'#B04A59'}
              lightBgColor={'#B04A59'}
              order={2}
              imgUrl={'/images/kombuha2_2.jpg'}
              imgAlt={'kombuha flasa'} />
            <Card title={'Setovi za pravljenje Kombuhe 🏁'}
              text={'Pronađite sve što vam je potrebno da započnete svoju malu fabriku Kombuhe. Ukoliko ste početnik počnite odavde'}
              buttons={[{ 'btnText': 'Poručite sada', 'btnUrl': '#' }]}
              bgColor={'#036141'}
              lightBgColor={'#bbf2d1'}
              order={1}
              imgUrl={'/images/kombuha_set.png'}
              imgAlt={'kombuha set'}
            />
            <GridCard title={'Podelite sa nama Vaše iskustvo 🥳'}
              text={'Pronađite sve što vam je potrebno da započnete svoju malu fabriku Kombuhe. Ukoliko ste početnik počnite odavde'}
              buttons={[{ 'btnText': 'Zapratite nas', 'btnUrl': 'https://www.instagram.com/bucha.rs/' }]}
              bgColor={'#F9A03F'}
              lightBgColor={'#F3BC80'}
              order={2}
              imgs={[{ 'url': '/images/kombuha3_5.jpeg', 'alt': '' }, { 'url': '/images/kombuha3_2.jpeg', 'alt': '' }, { 'url': '/images/kombuha3_1.jpeg', 'alt': '' }, { 'url': '/images/kombuha3_3.jpeg', 'alt': '' }]} />
          </div>
          <TeamSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
