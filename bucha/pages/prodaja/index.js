import Footer from "@/components/footer/Footer";
import NavWrapper from "@/components/nav/Navbar";
import Head from "next/head";
import styles from "@/styles/Shop.module.css"
import { Arimo } from 'next/font/google'
import ProductCard from "@/components/product-catalog-card/ProductCard";
import { generateSKUFromName, getLinkFromName } from "@/helper/helper";
import { mainCurrency } from "../_app";

const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap'
});

export default function Shop() {
    const title = "Prodaja Kombuhe Čajne Gljive Srbija"
    const description = "Online prodaja organske kombuhe i SCOBY čajne gljive po najpovoljnijim cenama. Širok izbor probiotskih napitaka sa prirodnim ukusima. Brza isporuka u celoj Srbiji"
    const products = [
        {
            name: "Kombuha SCOBY čajna gljiva",
            price: 950
        },
        {
            name: "Kombuha 0.5l - Hibiskus",
            price: 650
        },
        {
            name: "Pamučna prekrivka za teglu tokom fermentacije",
            price: 250
        },
        {
            name: "Termometar za fermentaciju",
            price: 200
        }
    ]
    const canonicalUrl = "https://www.bucha.rs/prodaja";

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

                {/* JSON-LD Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "itemListElement": products.map((product, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@type": "Product",
                                    "name": product.name,
                                    "description": `${product.name} prodaja`,
                                    "sku": generateSKUFromName(product.name),
                                    "image": `https://www.bucha.rs/images/products${getLinkFromName(product.name)}`,
                                    "url": `https://www.bucha.rs/proizvodi/${getLinkFromName(product.name)}`,
                                    "category": "Kombuha",
                                    "offers": {
                                        "@type": "Offer",
                                        "price": product.price,
                                        "priceCurrency": mainCurrency,
                                        "availability": `https://schema.org/InStock`,
                                        "seller": {
                                            "@type": "Organization",
                                            "name": "bucha.rs"
                                        }
                                    }
                                }
                            }))
                        })
                    }}
                />
            </Head>
            <NavWrapper />
            <main role="main" className={`${styles.main} ${arimo.className}`}>
                <h1>Prodaja</h1>
                <section className={styles.productsGrid4}>
                    {products.map(product => (
                        <ProductCard key={product.name} productName={product.name} productPrice={product.price} />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}