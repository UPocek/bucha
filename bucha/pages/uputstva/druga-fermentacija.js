import LocalizedTutorialPage from '@/components/content/LocalizedTutorialPage';
import { tutorialPages } from '@/lib/tutorial-pages';
import { getMessages } from '@/lib/messages';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: getMessages(locale),
        },
    };
}

export default function SecondFermentationPage() {
    return <LocalizedTutorialPage page={tutorialPages.secondFermentation} />;
}
