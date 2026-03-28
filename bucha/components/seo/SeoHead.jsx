import Head from 'next/head';
import { useRouter } from 'next/router';

import { defaultLocale } from '@/lib/i18n';
import { getAbsoluteUrl, getAlternateLinks, getOgLocale } from '@/lib/seo';
import { getDefaultStructuredData } from '@/lib/structured-data';

export default function SeoHead({
    title,
    description,
    pathname = '/',
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    imageType,
    articlePublishedTime,
    articleModifiedTime,
    type = 'website',
    keywords,
    noindex = false,
    pageType = 'WebPage',
    structuredData,
}) {
    const router = useRouter();
    const locale = router.locale || defaultLocale;
    const canonicalUrl = getAbsoluteUrl(pathname, locale);
    const alternateLinks = getAlternateLinks(pathname);
    const ogImage = image
        ? image.startsWith('http')
            ? image
            : `${getAbsoluteUrl(image, defaultLocale)}`
        : `${getAbsoluteUrl('/favicon.ico', defaultLocale)}`;
    const resolvedImageAlt = imageAlt || title;
    const resolvedImageWidth = imageWidth ? String(imageWidth) : undefined;
    const resolvedImageHeight = imageHeight ? String(imageHeight) : undefined;
    const robots = noindex ? 'noindex, nofollow' : 'index, follow';
    const pageStructuredData = Array.isArray(structuredData)
        ? structuredData.filter(Boolean)
        : structuredData
          ? [structuredData]
          : [];
    const structuredDataItems = noindex
        ? []
        : [
              ...getDefaultStructuredData({
                  locale,
                  title,
                  description,
                  pathname,
                  image,
                  keywords,
                  pageType,
              }),
              ...pageStructuredData,
          ];

    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="robots" content={robots} />
            <meta name="language" content={locale} />
            <meta name="geo.region" content="RS" />
            {keywords ? <meta name="keywords" content={keywords} /> : null}

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            <link rel="canonical" href={canonicalUrl} />
            {alternateLinks.map((alternateLink) => (
                <link
                    key={alternateLink.locale}
                    rel="alternate"
                    hrefLang={alternateLink.hrefLang}
                    href={alternateLink.href}
                />
            ))}
            <link rel="alternate" hrefLang="x-default" href={getAbsoluteUrl(pathname, defaultLocale)} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="bucha.rs" />
            <meta property="og:locale" content={getOgLocale(locale)} />
            {alternateLinks
                .filter((alternateLink) => alternateLink.locale !== locale)
                .map((alternateLink) => (
                    <meta
                        key={`og-${alternateLink.locale}`}
                        property="og:locale:alternate"
                        content={getOgLocale(alternateLink.locale)}
                    />
                ))}
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:alt" content={resolvedImageAlt} />
            {imageType ? <meta property="og:image:type" content={imageType} /> : null}
            {resolvedImageWidth ? <meta property="og:image:width" content={resolvedImageWidth} /> : null}
            {resolvedImageHeight ? <meta property="og:image:height" content={resolvedImageHeight} /> : null}
            {type === 'article' && articlePublishedTime ? (
                <meta property="article:published_time" content={articlePublishedTime} />
            ) : null}
            {type === 'article' && articleModifiedTime ? (
                <meta property="article:modified_time" content={articleModifiedTime} />
            ) : null}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={resolvedImageAlt} />

            {structuredDataItems.map((item, index) => (
                <script
                    key={`structured-data-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
                />
            ))}
        </Head>
    );
}
