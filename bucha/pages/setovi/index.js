import Footer from '@/components/footer/Footer';
import NavWrapper from '@/components/nav/Navbar';
import ProductCard from '@/components/product-catalog-card/ProductCard';
import SeoHead from '@/components/seo/SeoHead';
import { getProduct } from '@/lib/catalog';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { mainCurrency } from '../_app';
import { defaultLocale } from '@/lib/i18n';
import { getAbsoluteUrl } from '@/lib/seo';
import { getMessages } from '@/lib/messages';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: getMessages(locale),
        },
    };
}

export default function Setovi() {
    const router = useRouter();
    const locale = router.locale || defaultLocale;
    const t = useTranslations('storefront.sets');
    const productTranslations = useTranslations('products.names');
    const products = ['scoby'].map((productId) => ({
        productId,
        ...getProduct(productId),
    }));
    const title = t('title');
    const description = t('description');
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: products.map((product, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Product',
                name: productTranslations(product.productId),
                description,
                sku: product.slug,
                image: `https://www.bucha.rs/images/products/${product.imageSlug}.webp`,
                url: getAbsoluteUrl(product.routePath, locale),
                category: 'Kombucha',
                offers: {
                    '@type': 'Offer',
                    price: product.price,
                    priceCurrency: mainCurrency,
                    availability: 'https://schema.org/InStock',
                    seller: {
                        '@type': 'Organization',
                        name: 'bucha.rs',
                    },
                },
            },
        })),
    };

    return (
        <>
            <SeoHead title={title} description={description} pathname="/setovi" structuredData={structuredData} />
            <NavWrapper />
            <main
                role="main"
                className="mx-auto mb-25 w-[80%] max-[1450px]:w-[90%] max-[1069px]:mt-8 max-[900px]:mt-28 max-[450px]:w-[90%]">
                <h1 className="my-8 text-[50px] max-[769px]:text-[40px] max-[450px]:text-[32px]">{t('heading')}</h1>
                <section className="grid grid-cols-4 gap-12.5 max-[1280px]:grid-cols-3 max-[1280px]:gap-4 max-[1280px]:gap-x-8 max-[1280px]:gap-y-16 max-[900px]:grid-cols-2 max-[769px]:grid-cols-1 max-[769px]:place-items-center max-[600px]:grid-cols-1">
                    {products.map((product) => (
                        <ProductCard
                            key={product.productId}
                            productId={product.productId}
                            productPrice={product.price}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}
