import { useRouter } from 'next/router';

import Footer from '@/components/footer/Footer';
import Navbar from '@/components/nav/Navbar';
import SeoHead from '@/components/seo/SeoHead';
import { defaultLocale } from '@/lib/i18n';

function renderLegalBlock(block, key) {
    switch (block.type) {
        case 'heading2':
            return <h2 key={key}>{block.text}</h2>;
        case 'paragraph':
            return <p key={key}>{block.text}</p>;
        case 'strong':
            return (
                <p key={key}>
                    <strong>{block.text}</strong>
                </p>
            );
        case 'list':
            return (
                <ul key={key}>
                    {block.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
}

export default function LocalizedLegalPage({ page }) {
    const router = useRouter();
    const locale = router.locale || defaultLocale;
    const content = page.locales[locale] || page.locales[defaultLocale];

    return (
        <>
            <SeoHead
                title={content.seoTitle || content.title}
                description={content.description}
                pathname={page.pathname}
            />
            <Navbar />
            <article className="mx-auto max-w-157.5 px-4 py-20 text-[16px] leading-6 font-normal tracking-[-0.024em] max-[1069px]:mt-10 max-[1069px]:px-8 [&_h1]:m-0 [&_h1]:mb-8 [&_h1]:text-[36px] [&_h1]:leading-10 [&_h1]:font-semibold [&_h1]:tracking-[-0.016em] [&_h2]:mt-8 [&_h2]:mb-0 [&_h2]:text-[24px] [&_h2]:leading-8 [&_h2]:font-semibold [&_h2]:tracking-[-0.008em] [&_hr]:m-0 [&_hr]:h-0 [&_hr]:border-b [&_hr]:border-(--light-gray) [&_p]:my-6 [&_p]:text-[18px] [&_ul]:list-[circle]">
                <h1>{content.title}</h1>
                <hr />
                <p className="m-0 mb-8">{content.lastUpdated}</p>
                {content.blocks.map((block, index) => renderLegalBlock(block, `${page.pathname}-${index}`))}
            </article>
            <Footer />
        </>
    );
}
