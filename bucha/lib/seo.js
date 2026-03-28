import { defaultLocale, hreflangLocales, locales, normalizeLocale, ogLocales, siteUrl } from '@/lib/i18n';

export function withLeadingSlash(pathname = '/') {
    if (!pathname) {
        return '/';
    }

    return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function getLocalizedPathname(pathname = '/', locale = defaultLocale) {
    const normalizedPathname = withLeadingSlash(pathname);
    const normalizedLocale = normalizeLocale(locale);

    if (normalizedPathname === '/') {
        return normalizedLocale === defaultLocale ? '/' : `/${normalizedLocale}`;
    }

    return normalizedLocale === defaultLocale ? normalizedPathname : `/${normalizedLocale}${normalizedPathname}`;
}

export function getAbsoluteUrl(pathname = '/', locale = defaultLocale) {
    return `${siteUrl}${getLocalizedPathname(pathname, locale)}`;
}

export function getAlternateLinks(pathname = '/') {
    return locales.map((locale) => ({
        locale,
        hrefLang: hreflangLocales[locale],
        href: getAbsoluteUrl(pathname, locale),
    }));
}

export function getOgLocale(locale = defaultLocale) {
    return ogLocales[normalizeLocale(locale)] || ogLocales[defaultLocale];
}
