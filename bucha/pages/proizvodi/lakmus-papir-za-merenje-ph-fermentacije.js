import Footer from "@/components/footer/Footer";
import Gallery from "@/components/single-product/image-galery/Gallery";
import Navbar from "@/components/nav/Navbar";
import styles from "@/styles/Product.module.css"
import Head from "next/head";
import { Arimo } from 'next/font/google'
import TopInfo from "@/components/single-product/top-info/TopInfo";
import Description from "@/components/single-product/description/Description";
import RelatedItems from "@/components/single-product/related-items/RelatedItems";
import { generateSKUFromName, getLinkFromName } from "@/helper/helper";
import { mainCurrency } from "../_app";
import { useState } from "react";

const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap'
});

export default function Product() {

    const productName = "Lakmus papir za merenje PH fermentacije";
    const pageMetaDescription = "Prodaja lakmus papira za merenje PH vrednosti fermentacije kod kuće. Lakmus papir za merenje kiselosti i baznosti kombuhe, po najboljoj ceni u Srbiji"
    const pageKeywords = "lakmus papir, lakmus hartija, merenje ph vrednosti, ph vrednost kombuhe, ph fermentacije kod kuce, kako meriti ph vrednost, lakmus papir srbija"
    const productShortDescription = ["Uz kupovinu dobijate kombuha gljivu spremnu za pripremu pića, detaljno uputstvo sa našim savetima za početnike i starter tečnost koja je potrebna za prvu fermentaciju", "Kultura kombuhe je bez glutena, pogodan za vegane i ima mnoge zdravstvene benefite.", "Vašu porudžbinu šaljemo istog ili narednog dana.", "Nadamo se da ćete uživati u svom lekovitom kombuha napitku! Ako imate bilo kakva pitanja, slobodno nam pišite putem SMS-a, Viber-a ili WhatsApp-a na 063/427-280."];
    const productLongDescription = ["Kada je u pitanju pravljenje kombuhe, ništa nije važnije od kvaliteta vašeg startera za kombuhu.", "Naše SCOBY kulture kombuhe pravljene su koristeći filtriranu vodu, organski trskin šećer, rinfuzni čaj i organski starter za kombuhu u Srbiji. Naše kulture rastu koristeći starter koji fermentišemo najmanje 6 nedelja kako bismo osigurali najširi spektar korisnih bakterija u vašoj finalnoj kulturi. Kombuha starter čajna gljiva je neophodan deo za pravljenje vaše prve ture kombuha napitka."];
    const singleProductPrice = 950;
    const productImageGallery = [`/images/products/${getLinkFromName(productName)}.webp`, "/images/gallery/scoby2.jpg", "/images/gallery/scoby3.jpg", "/images/gallery/scoby4.jpg", "/images/gallery/scoby5.jpg"];

    // UPSELL ITEMS
    const relatedItems = [
        {
            name: "Pamučna prekrivka za teglu tokom fermentacije",
            price: 250
        },
        {
            name: "Termometar za fermentaciju",
            price: 200
        },
        {
            name: "Kombuha 0.5l - Hibiskus",
            price: 650
        }
    ]

    // ADD VARIANTS IF NEEDED
    const variants = [
        {
            name: productName,
            price: singleProductPrice,
        }
    ]

    // DO NOT CHANGE BELOW THIS LINE
    const [selectedVariant, setSelectedVariant] = useState(variants[0]);
    const _canonicalUrl = `https://www.bucha.rs/proizvodi/${getLinkFromName(productName)}`;

    return (
        <>
            <Head>
                {/* Basic Meta Tags */}
                <title>{productName} - Prodaja</title>
                <meta name="description" content={pageMetaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />

                {/* Canonical URL */}
                <link rel="canonical" href={_canonicalUrl} />

                {/* Open Graph Tags */}
                <meta property="og:title" content={`${productName} - Prodaja`} />
                <meta property="og:type" content="product" />
                <meta property="og:description" content={pageMetaDescription} />
                <meta property="og:url" content={_canonicalUrl} />
                <meta property="og:site_name" content="bucha.rs" />
                <meta property="og:image" content={`https://www.bucha.rs${productImageGallery[0]}`} />
                <meta property="og:image:alt" content={productName} />
                <meta property="og:locale" content="sr_RS" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="product" />
                <meta property="og:title" content={`${productName} - Prodaja`} />
                <meta name="twitter:description" content={pageMetaDescription} />
                <meta name="twitter:image" content={`https://www.bucha.rs${productImageGallery[0]}`} />

                {/* Additional Meta Tags */}
                <meta name="geo.region" content="RS" />
                <meta name="language" content="sr" />
                <meta name="keywords" content={pageKeywords} />
                <meta name="robots" content="index, follow" />

                {/* JSON-LD Schema Markup for Product */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "Product",
                            "name": productName,
                            "image": productImageGallery.map(img => `https://www.bucha.rs${img}`),
                            "description": productShortDescription.join(" "),
                            "sku": generateSKUFromName(productName),
                            "mpn": "12345",
                            "brand": {
                                "@type": "Brand",
                                "name": "bucha.rs"
                            },
                            "offers": {
                                "@type": "Offer",
                                "url": _canonicalUrl,
                                "priceCurrency": mainCurrency,
                                "price": singleProductPrice,
                                "priceValidUntil": "2025-12-31",
                                "itemCondition": "https://schema.org/NewCondition",
                                "availability": "https://schema.org/InStock",
                                "seller": {
                                    "@type": "Organization",
                                    "name": "bucha.rs"
                                },
                                "hasMerchantReturnPolicy": {
                                    "@type": "MerchantReturnPolicy",
                                    "name": "Prava potrošača",
                                    "url": "https://www.bucha.rs/uslovi/prava-potrosaca",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "merchantReturnDays": "1",
                                    "returnMethod": "http://schema.org/ReturnByMail"
                                },
                                "shippingDetails": {
                                    "@type": "OfferShippingDetails",
                                    "shippingRate": {
                                        "@type": "MonetaryAmount",
                                        "value": singleProductPrice,
                                        "currency": "RSD"
                                    },
                                    "shippingDestination": {
                                        "@type": "DefinedRegion",
                                        "addressCountry": "RS"
                                    },
                                    "deliveryTime": {
                                        "@type": "ShippingDeliveryTime",
                                        "handlingTime": {
                                            "@type": "QuantitativeValue",
                                            "minValue": 1,
                                            "maxValue": 2,
                                            "unitText": "Day"
                                        },
                                        "transitTime": {
                                            "@type": "QuantitativeValue",
                                            "minValue": 1,
                                            "maxValue": 5,
                                            "unitText": "Day"
                                        }
                                    }
                                }
                            }
                        })
                    }}
                />
            </Head>
            <Navbar />
            <main role="main" className={`${styles.main} ${arimo.className}`}>
                <section className={styles.container}>
                    <div className={styles.top}>
                        <Gallery images={productImageGallery} />
                        <TopInfo selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant} shortDescription={productShortDescription} variants={variants} />
                    </div>
                    <Description longDescription={productLongDescription} />
                    <RelatedItems items={relatedItems} />
                </section>
            </main>
            <Footer />
        </>
    );
}