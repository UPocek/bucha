import Analytics from '@/components/Analytics';
import '@/styles/globals.css'

export const baseUrl = "https://5xle614p03.execute-api.eu-central-1.amazonaws.com/Prod";

export default function App({ Component, pageProps }) {
  return (<>
    <Analytics />
    <Component {...pageProps} />
  </>)

}
