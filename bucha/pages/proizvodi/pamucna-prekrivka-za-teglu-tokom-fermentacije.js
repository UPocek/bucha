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

    const productName = "Pamučna prekrivka za teglu tokom fermentacije";
    const pageMetaDescription = "Pamučna prekrivka za teglu za fermentaciju kombuhe kod kuće. Pamučni poklopac omogućava da vaša kombuha diše, a ne dozvoljava prašini da uđu u teglu."
    const pageKeywords = "kombuha, scoby, čajna gljiva, fermentisano piće, probiotik, organski napitak"
    const productShortDescription = ["Pamučna prekrivka za teglu je neophodan deo opreme za fermentaciju kombuhe kod kuće", "Pamučna prekrivka omogućava da vaša kombuha diše, a da pritom ne dozvoljava prašini i insektima da uđu u teglu.", "Vašu porudžbinu šaljemo istog ili narednog dana. Ako imate bilo kakva pitanja, slobodno nam pišite putem SMS-a, Viber-a ili WhatsApp-a na 063/427-280."];
    const productLongDescription = ["Višekratni 100% pamučni poklopac za teglu tokom fermentacije.", "Za tegle od 7.6cm do 10.1cm prečnika.", "Pamučna tkanina omogućava slobodan protok vazduha do vaše fermentacije, dok elastična traka čvrsto prijanja uz rub tegle, sprečavajući ulazak voćnih mušica i prašine. Lako se stavljaju i skidaju kada vam zatrebaju. Mogu da se pere u mašini za veš.",];
    const singleProductPrice = 250;
    const productImageGallery = [`/images/products/${getLinkFromName(productName)}.webp`, "/images/gallery/prekrivka_za_fermentaciju_2.webp", "/images/products/3kom-pamucne-prekrivke-za-teglu.webp", "/images/products/5kom-pamucnih-prekrivki-za-teglu.webp"];

    // UPSELL ITEMS
    const relatedItems = [
        {
            name: "Kombuha SCOBY čajna gljiva",
            price: 950
        },
        {
            name: "Termometar za fermentaciju",
            price: 200
        },
        {
            name: "Kombuha 0.5l - Hibiskus",
            price: 650
        },
    ]

    // ADD VARIANTS IF NEEDED
    const variants = [
        {
            name: productName,
            price: singleProductPrice,
        },
        {
            name: "3kom pamučne prekrivke za teglu",
            price: 600,
            procentageDiscount: 20
        },
        {
            name: "5kom pamučnih prekrivki za teglu",
            price: 950,
            procentageDiscount: 24
        },
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
                                        "value": { singleProductPrice },
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