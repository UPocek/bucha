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
                <meta name="description" content="Sta je kombuha, zasto je kombuha zdrava, kako se pravi kombuha, kako i koliko se pije kombuha i još mnogo toga saznajte na nešem bucha blogu" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="author" content="Tamara Ilić, Ivana Ilić and Uroš Poček" />
                <meta name="geo.region" content="RS" />
                <meta property="og:title" content="Sve u vezi kombuhe - bucha.rs Blog" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Sta je kombuha, zasto je kombuha zdrava, kako se pravi kombuha, kako i koliko se pije kombuha i još mnogo toga saznajte na nešem bucha blogu" />
                <meta property="og:url" content="https://www.bucha.rs/blog" />
                <meta property="og:site_name" content="bucha.rs" />
            </Head>
            <Navbar />
            <main className={`${styles.main} ${arimo.className}`}>
                <h1>Blog</h1>
            </main>
            <Footer />
        </>
    )
}