const localeDefinitions = [
    {
        code: 'sr',
        label: 'Srpski',
        ogLocale: 'sr_RS',
        hrefLang: 'sr-RS',
        default: true,
    },
    {
        code: 'en',
        label: 'English',
        ogLocale: 'en_US',
        hrefLang: 'en',
    },
    {
        code: 'ru',
        label: 'Русский',
        ogLocale: 'ru_RU',
        hrefLang: 'ru',
    },
];

const locales = localeDefinitions.map(({ code }) => code);
const defaultLocale =
    localeDefinitions.find((localeDefinition) => localeDefinition.default)?.code || localeDefinitions[0]?.code || 'sr';
const timeZone = 'Europe/Belgrade';
const siteUrl = 'https://www.bucha.rs';

const localeLabels = Object.fromEntries(localeDefinitions.map(({ code, label }) => [code, label]));

const ogLocales = Object.fromEntries(localeDefinitions.map(({ code, ogLocale }) => [code, ogLocale]));

const hreflangLocales = Object.fromEntries(localeDefinitions.map(({ code, hrefLang }) => [code, hrefLang]));

function normalizeLocale(locale) {
    return locales.includes(locale) ? locale : defaultLocale;
}

module.exports = {
    localeDefinitions,
    locales,
    defaultLocale,
    timeZone,
    siteUrl,
    localeLabels,
    ogLocales,
    hreflangLocales,
    normalizeLocale,
};
