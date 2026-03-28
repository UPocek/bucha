import Analytics from '@/components/analytics/Analytics';
import { CartProvider } from '@/context/CartContext';
import { getMessages } from '@/lib/messages';
import { defaultLocale, timeZone } from '@/lib/i18n';
import '@/styles/globals.css';
import { Arimo } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import { Toaster } from 'sonner';

const arimo = Arimo({
    subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
    display: 'swap',
});

export const baseUrl = 'https://5xle614p03.execute-api.eu-central-1.amazonaws.com/Prod';
export const mainCurrency = 'RSD';
export const supportedCountries = ['RS'];
export const shippingPrice = 0;

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const locale = router.locale || defaultLocale;
    const messages = pageProps.messages || getMessages(locale);

    return (
        <div className={arimo.className}>
            <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
                <CartProvider>
                    <Toaster richColors />
                    <Analytics />
                    <Component {...pageProps} />
                </CartProvider>
            </NextIntlClientProvider>
        </div>
    );
}
