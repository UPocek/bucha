const path = require('path');
const { locales, defaultLocale } = require('./lib/i18n');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales,
        defaultLocale,
        localeDetection: false,
    },
    turbopack: {
        root: path.join(__dirname),
    },
};

module.exports = nextConfig;
