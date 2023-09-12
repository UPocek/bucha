import Analytics from '@/components/Analytics';
import '@/styles/globals.css'

export const baseUrl = "";

export default function App({ Component, pageProps }) {
  return (<>
    <Analytics />
    <Component {...pageProps} />
  </>)

}
