import { GoogleAnalytics } from '@next/third-parties/google';

export default function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    if (process.env.NODE_ENV !== 'production' || !gaId) {
        return null;
    }

    return <GoogleAnalytics gaId={gaId} />;
}
