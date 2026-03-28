import LocalizedLegalPage from '@/components/content/LocalizedLegalPage';
import { legalPages } from '@/lib/legal-pages';
import { getMessages } from '@/lib/messages';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: getMessages(locale),
        },
    };
}

export default function AboutPage() {
    return <LocalizedLegalPage page={legalPages.about} />;
}
