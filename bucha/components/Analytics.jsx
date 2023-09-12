import Script from 'next/script'

export default function Analytics() {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-2DQWBKE9T0" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
     
              gtag('config', 'G-2DQWBKE9T0');
            `}
            </Script>
        </>
    )
}