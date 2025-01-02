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

    const productName = "Termometar za fermentaciju";
    const pageMetaDescription = "Samolepljivi termometar za fermentaciju kombuhe kod kuće. Jednostavno se postavlja na teglu i omogućava vam da pratite temperaturu fermentacije."
    const pageKeywords = "samolepljivi termometar, termometar za fermentaciju, termometar za teglu, termometar za kombuhu, termometar traka"
    const productShortDescription = ["Termometar koji se lepi za stranu vaše posude za pripremu i prikazuje temperaturu sa tačnošću od 1 stepena.", "Vašu porudžbinu šaljemo istog ili narednog dana. Ako imate bilo kakva pitanja, slobodno nam pišite putem SMS-a, Viber-a ili WhatsApp-a na 063/427-280."];
    const productLongDescription = ["Ovaj samolepljivi termometar sadrži tečne kristalne i pomaže da osigurate da vaša fermentacija ostane između 22 i 28 stepeni.", "Podeok za temperaturu postaje zelen kako bi ukazao tačnu temperaturu (plava znači nešto nižu, a braon nešto višu od prikazane vrednosti).", "Možete ga premestiti, ukloniti po potrebi ili ostaviti na posudi godinama za kontinuirano merenje temperature. Ostaje pričvršćen čak i tokom pranja tegle!"];
    const singleProductPrice = 200;
    const productImageGallery = [`/images/products/${getLinkFromName(productName)}.webp`, "/images/gallery/termometar_za_fermentaciju_2.webp", "/images/products/3kom-termometar-za-fermentaciju.webp", "/images/products/5kom-termometar-za-fermentaciju.webp"];

    // UPSELL ITEMS
    const relatedItems = [
        {
            name: "Kombuha SCOBY čajna gljiva",
            price: 950
        },
        {
            name: "Pamučna prekrivka za teglu tokom fermentacije",
            price: 250
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
            price: singleProductPrice
        },
        {
            name: "3kom termometar za fermentaciju",
            price: 500,
            procentageDiscount: 17
        },
        {
            name: "5kom termometar za fermentaciju",
            price: 800,
            procentageDiscount: 20
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