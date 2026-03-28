import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import Description from '@/components/single-product/description/Description';
import Gallery from '@/components/single-product/image-galery/Gallery';
import RelatedItems from '@/components/single-product/related-items/RelatedItems';
import TopInfo from '@/components/single-product/top-info/TopInfo';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/nav/Navbar';
import SeoHead from '@/components/seo/SeoHead';
import { generateSKUFromName } from '@/helper/helper';
import { getAbsoluteUrl } from '@/lib/seo';
import { getProduct, getProductFallbackName, getProductRoutePath } from '@/lib/catalog';
import { defaultLocale } from '@/lib/i18n';
import { ORGANIZATION_ID } from '@/lib/structured-data';
import { mainCurrency } from '@/pages/_app';

import { getProductPageContent } from '@/lib/product-content';

function getShortDescriptionText(description) {
    if (typeof description === 'string') {
        return description;
    }

    return `${description.textBefore}${description.linkText}${description.textAfter}`;
}

export default function ProductPage({ productId }) {
    const router = useRouter();
    const locale = router.locale || defaultLocale;
    const t = useTranslations('products');
    const commonT = useTranslations('common');
    const content = getProductPageContent(productId, locale);
    const product = getProduct(productId);
    const productName = t(`names.${productId}`);
    const pathname = getProductRoutePath(productId);

    const variants = useMemo(
        () =>
            content.variants.map((variant) => ({
                ...variant,
                name: t(`names.${variant.productId}`),
            })),
        [content.variants, t],
    );

    const [selectedVariant, setSelectedVariant] = useState(variants[0]);

    const relatedItems = useMemo(
        () =>
            content.relatedItems.map((relatedProductId) => ({
                productId: relatedProductId,
                name: t(`names.${relatedProductId}`),
                price: getProduct(relatedProductId)?.price || 0,
            })),
        [content.relatedItems, t],
    );

    if (!content || !product) {
        return null;
    }

    const structuredData = {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: productName,
        image: content.gallery.map((image) => getAbsoluteUrl(image, defaultLocale)),
        description: content.shortDescription.map(getShortDescriptionText).join(' '),
        sku: generateSKUFromName(getProductFallbackName(productId)),
        brand: {
            '@type': 'Brand',
            name: 'bucha.rs',
        },
        offers: {
            '@type': 'Offer',
            url: getAbsoluteUrl(pathname, locale),
            priceCurrency: mainCurrency,
            price: product.price,
            priceValidUntil: '2026-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
                '@id': ORGANIZATION_ID,
            },
            hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                name: commonT('consumerRights'),
                url: getAbsoluteUrl('/uslovi/prava-potrosaca', locale),
                applicableCountry: 'RS',
            },
            shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingDestination: {
                    '@type': 'DefinedRegion',
                    addressCountry: 'RS',
                },
                deliveryTime: {
                    '@type': 'ShippingDeliveryTime',
                    handlingTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 1,
                        maxValue: 2,
                        unitText: 'Day',
                    },
                    transitTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 1,
                        maxValue: 5,
                        unitText: 'Day',
                    },
                },
            },
        },
    };

    return (
        <>
            <SeoHead
                title={content.seoTitle}
                description={content.description}
                pathname={pathname}
                image={content.gallery[0]}
                imageAlt={productName}
                type="product"
                pageType="ItemPage"
                keywords={content.keywords}
                structuredData={structuredData}
            />
            <Navbar />
            <main role="main" className="max-[1200px]:px-[5%] max-[769px]:px-[5%]">
                <section className="mx-auto mt-12 max-w-285">
                    <div className="mb-24 flex flex-row justify-between gap-10 max-[1069px]:flex-col max-[1069px]:gap-8 max-[900px]:mt-28">
                        <Gallery images={content.gallery} />
                        <TopInfo
                            selectedVariant={selectedVariant}
                            setSelectedVariant={setSelectedVariant}
                            shortDescription={content.shortDescription}
                            variants={variants}
                        />
                    </div>
                    <Description longDescription={content.longDescription} />
                    <RelatedItems items={relatedItems} />
                </section>
            </main>
            <Footer />
        </>
    );
}
