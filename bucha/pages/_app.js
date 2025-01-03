import Analytics from '@/components/analytics/Analytics';
import { CartProvider } from '@/context/CartContext';
import '@/styles/globals.css'
import { Toaster } from 'sonner'

export const baseUrl = "https://5xle614p03.execute-api.eu-central-1.amazonaws.com/Prod";
export const mainCurrency = "RSD";
export const supportedCountries = ["RS"];
export const shippingPrice = 0;

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Toaster richColors />
      <Analytics />
      <Component {...pageProps} />
    </CartProvider>
  )
}
