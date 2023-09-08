import Head from 'next/head'
import Image from 'next/image'
import { Arimo } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import GridCard from '@/components/GridCard'
import TeamSection from '@/components/TeamSection'

const arimo = Arimo({ subsets: ['latin'] })

export default function Home() {
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
        <div className={styles.content}>
          <div>
            <Card title={'Setovi za pravljenje Kombuhe 🏁'}
              text={'Pronađite sve što vam je potrebno da započnete svoju malu fabriku Kombuhe. Ukoliko ste početnik počnite odavde'}
              buttons={[{ 'btnText': 'Poručite sada', 'btnUrl': '#' }]}
              bgColor={'#036141'}
              lightBgColor={'#bbf2d1'}
              order={1}
              imgUrl={'/images/kombuha_set.png'}
              imgAlt={'kombuha set'}
            />

            <Card title={'Nazdravite sa nama 🤩'}
              text={'Isprobajte naše ukuse. Pa nam javite koji je vaš omiljeni.'}
              buttons={[{ 'btnText': 'Poručite sada', 'btnUrl': '#' }]}
              bgColor={'#B04A59'}
              lightBgColor={'#B04A59'}
              order={2}
              imgUrl={'/images/kombuha2_2.jpg'}
              imgAlt={'kombuha flasa'} />
            <Card title={'Uputstvo za pripremu 🎓'}
              text={'Pronađite sve što vam je potrebno da započnete svoju malu fabriku Kombuhe. Ukoliko ste početnik počnite odavde'}
              buttons={[{ 'btnText': 'Prva tura', 'btnUrl': '#' }, { 'btnText': 'Ukusi', 'btnUrl': '#' }]}
              bgColor={'#3D5A80'}
              lightBgColor={'#bbf2d1'}
              order={1}
              imgUrl={'/images/scoby.jpg'}
              imgAlt={'kombuha set'} />
            <GridCard title={'Podelite sa nama Vaše iskustvo 🥳'}
              text={'Pronađite sve što vam je potrebno da započnete svoju malu fabriku Kombuhe. Ukoliko ste početnik počnite odavde'}
              buttons={[{ 'btnText': 'Zapratite nas', 'btnUrl': '#' }]}
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
