import { defaultLocale, hreflangLocales, locales, normalizeLocale, siteUrl } from '@/lib/i18n';
import { getAbsoluteUrl } from '@/lib/seo';

export const ORGANIZATION_ID = `${siteUrl}/#organization`;
export const WEBSITE_ID = `${siteUrl}/#website`;

const LOGO_ID = `${siteUrl}/#logo`;
const SUPPORT_CONTACT_ID = `${siteUrl}/#customer-support`;
const CONTACT_EMAIL = 'tamarailic11@gmail.com';
const CONTACT_PHONE = '+38163427280';
const SOCIAL_PROFILES = [
    'https://twitter.com/rs_bucha',
    'https://www.facebook.com/kombuha.bucha.rs/',
    'https://www.youtube.com/@bucha_rs',
    'https://www.instagram.com/bucha.rs/',
];
const BUSINESS_DESCRIPTIONS = {
    sr: 'Online prodavnica kombuhe u Srbiji sa SCOBY kulturama, starter setovima, ukusima i vodičima za kućnu fermentaciju.',
    en: 'Online kombucha store in Serbia with SCOBY cultures, starter kits, bottled flavors and home fermentation guides.',
    ru: 'Онлайн-магазин комбучи в Сербии с культурами SCOBY, стартовыми наборами, вкусами и руководствами по домашней ферментации.',
};
const OFFER_CATALOG = {
    sr: {
        name: 'Katalog kombuhe i opreme',
        items: [
            { name: 'Starter setovi za kombuhu', pathname: '/setovi' },
            { name: 'Kombuha ukusi', pathname: '/kombuha' },
            { name: 'SCOBY kultura i oprema za fermentaciju', pathname: '/prodaja' },
        ],
    },
    en: {
        name: 'Kombucha and brewing catalog',
        items: [
            { name: 'Kombucha starter sets', pathname: '/setovi' },
            { name: 'Kombucha flavors', pathname: '/kombuha' },
            { name: 'SCOBY cultures and fermentation essentials', pathname: '/prodaja' },
        ],
    },
    ru: {
        name: 'Каталог комбучи и товаров для ферментации',
        items: [
            { name: 'Стартовые наборы для комбучи', pathname: '/setovi' },
            { name: 'Вкусы комбучи', pathname: '/kombuha' },
            { name: 'Культуры SCOBY и товары для ферментации', pathname: '/prodaja' },
        ],
    },
};
const HOMEPAGE_ITEM_LIST_NAMES = {
    sr: 'Istaknute stranice bucha.rs',
    en: 'Featured bucha.rs pages',
    ru: 'Основные страницы bucha.rs',
};
const WORKING_DAYS = [
    'https://schema.org/Monday',
    'https://schema.org/Tuesday',
    'https://schema.org/Wednesday',
    'https://schema.org/Thursday',
    'https://schema.org/Friday',
];
const KNOWS_ABOUT = ['kombucha', 'kombuha', 'SCOBY', 'fermented tea', 'home fermentation', 'starter cultures'];

function getLanguageTag(locale = defaultLocale) {
    const normalizedLocale = normalizeLocale(locale);

    return hreflangLocales[normalizedLocale] || hreflangLocales[defaultLocale];
}

function getSiteDescription(locale = defaultLocale) {
    const normalizedLocale = normalizeLocale(locale);

    return BUSINESS_DESCRIPTIONS[normalizedLocale] || BUSINESS_DESCRIPTIONS[defaultLocale];
}

function resolveImageUrl(image) {
    if (!image) {
        return undefined;
    }

    return image.startsWith('http') ? image : getAbsoluteUrl(image, defaultLocale);
}

function getCountryReference() {
    return {
        '@type': 'Country',
        name: 'Serbia',
    };
}

function getCustomerSupportContactPoint() {
    return {
        '@type': 'ContactPoint',
        '@id': SUPPORT_CONTACT_ID,
        contactType: 'customer support',
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        areaServed: getCountryReference(),
        availableLanguage: locales.map((locale) => getLanguageTag(locale)),
        hoursAvailable: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: WORKING_DAYS,
                opens: '09:00',
                closes: '17:00',
            },
        ],
    };
}

export function getOrganizationStructuredData(locale = defaultLocale) {
    const normalizedLocale = normalizeLocale(locale);
    const offerCatalog = OFFER_CATALOG[normalizedLocale] || OFFER_CATALOG[defaultLocale];
    const logoUrl = getAbsoluteUrl('/images/bucha_logo.png', defaultLocale);

    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: 'bucha.rs',
        alternateName: 'Bucha',
        url: siteUrl,
        description: getSiteDescription(normalizedLocale),
        logo: {
            '@type': 'ImageObject',
            '@id': LOGO_ID,
            url: logoUrl,
            contentUrl: logoUrl,
            width: 300,
            height: 84,
        },
        image: [
            logoUrl,
            getAbsoluteUrl('/images/kombuha_set.png', defaultLocale),
            getAbsoluteUrl('/images/products/kombuha-05l-hibiskus.webp', defaultLocale),
        ],
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        sameAs: SOCIAL_PROFILES,
        areaServed: getCountryReference(),
        contactPoint: [getCustomerSupportContactPoint()],
        knowsAbout: KNOWS_ABOUT,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: offerCatalog.name,
            itemListElement: offerCatalog.items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'OfferCatalog',
                    name: item.name,
                    url: getAbsoluteUrl(item.pathname, normalizedLocale),
                },
            })),
        },
    };
}

export function getWebsiteStructuredData(locale = defaultLocale) {
    const normalizedLocale = normalizeLocale(locale);

    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: siteUrl,
        name: 'bucha.rs',
        alternateName: 'Bucha',
        description: getSiteDescription(normalizedLocale),
        inLanguage: locales.map((locale) => getLanguageTag(locale)),
        publisher: {
            '@id': ORGANIZATION_ID,
        },
    };
}

export function getPageStructuredData({
    locale = defaultLocale,
    title,
    description,
    pathname = '/',
    image,
    keywords,
    pageType = 'WebPage',
}) {
    const normalizedLocale = normalizeLocale(locale);
    const canonicalUrl = getAbsoluteUrl(pathname, normalizedLocale);
    const resolvedImageUrl = resolveImageUrl(image);

    return {
        '@context': 'https://schema.org',
        '@type': pageType,
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        headline: title,
        description,
        keywords,
        inLanguage: getLanguageTag(normalizedLocale),
        isPartOf: {
            '@id': WEBSITE_ID,
        },
        about: {
            '@id': ORGANIZATION_ID,
        },
        primaryImageOfPage: resolvedImageUrl
            ? {
                  '@type': 'ImageObject',
                  url: resolvedImageUrl,
                  contentUrl: resolvedImageUrl,
              }
            : undefined,
        image: resolvedImageUrl ? [resolvedImageUrl] : undefined,
    };
}

export function getDefaultStructuredData({
    locale = defaultLocale,
    title,
    description,
    pathname = '/',
    image,
    keywords,
    pageType = 'WebPage',
}) {
    return [
        getOrganizationStructuredData(locale),
        getWebsiteStructuredData(locale),
        getPageStructuredData({
            locale,
            title,
            description,
            pathname,
            image,
            keywords,
            pageType,
        }),
    ];
}

export function getHomepageStructuredData({ locale = defaultLocale, featuredItems = [] }) {
    const normalizedLocale = normalizeLocale(locale);
    const filteredItems = featuredItems.filter((item) => item?.name && item?.pathname);

    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        '@id': `${getAbsoluteUrl('/', normalizedLocale)}#featured`,
        name: HOMEPAGE_ITEM_LIST_NAMES[normalizedLocale] || HOMEPAGE_ITEM_LIST_NAMES[defaultLocale],
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: filteredItems.length,
        itemListElement: filteredItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'WebPage',
                name: item.name,
                url: getAbsoluteUrl(item.pathname, normalizedLocale),
            },
        })),
    };
}
