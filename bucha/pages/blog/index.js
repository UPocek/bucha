import Footer from "@/components/Footer";
import Head from "next/head";
import styles from "@/styles/Setovi.module.css"
import { Arimo } from 'next/font/google'
import Navbar from "@/components/Navbar";

const arimo = Arimo({ subsets: ['latin'] })

export default function Blog() {
    return (
        <>
            <Head>
                <title>Sve u vezi kombuhe - bucha.rs Blog</title>
                <meta name="description" content="Kombuha čajna gljiva druga fermentacija i pravljenje ukusa od kombuhe." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={`${styles.main} ${arimo.className}`}>
                <h1>Blog</h1>
            </main>
            <Footer />
        </>
    )
}