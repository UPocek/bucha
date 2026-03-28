import LocalizedBlogPage from '@/components/content/LocalizedBlogPage';
import { blogPages } from '@/lib/blog-pages';
import { getMessages } from '@/lib/messages';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: getMessages(locale),
        },
    };
}

export default function CuvanjeKombuhaBlog() {
    return <LocalizedBlogPage page={blogPages.kombuchaStorage} />;
}
