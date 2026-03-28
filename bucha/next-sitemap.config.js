const { defaultLocale, localeDefinitions, locales, siteUrl } = require('./lib/i18n');

const alternateRefs = localeDefinitions.map(({ code, hrefLang }) => ({
    href: code === defaultLocale ? siteUrl : `${siteUrl}/${code}`,
    hreflang: hrefLang,
}));
const localizedExcludes = locales
    .filter((locale) => locale !== defaultLocale)
    .flatMap((locale) => [`/${locale}`, `/${locale}/*`]);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: 'public',
    alternateRefs: [...alternateRefs, { href: siteUrl, hreflang: 'x-default' }],
    robotsTxtOptions: {
        policies: [
            { userAgent: 'googlebot', disallow: '' },
            { userAgent: 'bingbot', disallow: '' },
            { userAgent: '*', allow: '/' },
        ],
    },
    exclude: ['/hvala/*', '/porucivanje', ...localizedExcludes],
};
