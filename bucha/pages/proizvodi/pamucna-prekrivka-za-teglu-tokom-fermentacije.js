import ProductPage from '@/components/single-product/ProductPage';
import { getMessages } from '@/lib/messages';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: getMessages(locale),
        },
    };
}

export default function CottonCoverPage() {
    return <ProductPage productId="cottonCover" />;
}
