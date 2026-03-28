import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import BasicParagraph from '@/blog-components/basic-paragraph/BasicParagraph';
import BlogImage from '@/blog-components/blog-image/BlogImage';
import BlogSubtitle from '@/blog-components/blog-subtitle/BlogSubtitle';
import BlogTitle from '@/blog-components/blog-title/BlogTitle';
import BulletPoints from '@/blog-components/bullet-points/BulletPoints';
import FloatingNav from '@/blog-components/floating-nav/FloatingNav';
import Focus from '@/blog-components/focus/Focus';
import HighlightedSection from '@/blog-components/highlighted-section/HighlightedSection';
import Meta from '@/blog-components/meta/Meta';
import OrderedList from '@/blog-components/ordered-list/OrderedList';
import StrongParagraph from '@/blog-components/strong-paragraph/StrongParagraph';
import TableOfContents from '@/blog-components/table-of-contents/TableOfContents';
import BulletPointsBold from '@/blog-components/bullet-points-bold/BuletPointsBold';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/nav/Navbar';
import SeoHead from '@/components/seo/SeoHead';
import { getOgImageMetadata } from '@/lib/og-images';
import { defaultLocale } from '@/lib/i18n';
import { getAbsoluteUrl } from '@/lib/seo';

function renderInlinePart(part, key) {
    if (typeof part === 'string') {
        return <span key={key}>{part}</span>;
    }

    if (part.type === 'link') {
        if (part.external) {
            return (
                <a key={key} href={part.href} target="_blank" rel="noreferrer">
                    {part.text}
                </a>
            );
        }

        return (
            <Link key={key} href={part.href}>
                {part.text}
            </Link>
        );
    }

    return null;
}

function renderInline(content) {
    if (Array.isArray(content)) {
        return <>{content.map((part, index) => renderInlinePart(part, index))}</>;
    }

    return content;
}

function renderListItems(items) {
    return items.map((item) => renderInline(item));
}

function renderBlock(block, key, subtitleIndexRef) {
    switch (block.type) {
        case 'subtitle': {
            subtitleIndexRef.current += 1;
            return <BlogSubtitle key={key} text={block.text} id={subtitleIndexRef.current} />;
        }
        case 'paragraph':
            return <BasicParagraph key={key} text={renderInline(block.content)} />;
        case 'strong':
            return <StrongParagraph key={key} text={renderInline(block.content)} />;
        case 'image':
            return <BlogImage key={key} src={block.src} alt={block.alt} priority={block.priority} />;
        case 'bullets':
            return <BulletPoints key={key} items={renderListItems(block.items)} />;
        case 'ordered':
            return <OrderedList key={key} items={block.items} />;
        case 'highlight':
            return (
                <HighlightedSection
                    key={key}
                    text={renderInline(block.content)}
                    link={block.link ? renderInline(block.link) : undefined}
                />
            );
        case 'focus':
            return <Focus key={key} title={block.title} text={renderInline(block.content)} />;
        case 'h3':
            return (
                <h3
                    key={key}
                    className="mt-[1em] mb-[0.8em] text-[2em] leading-[1.2] font-bold tracking-[-0.02em] max-[900px]:text-[1.2em] max-[768px]:text-[1.1em]">
                    {block.text}
                </h3>
            );
        case 'bulletsBold':
            return <BulletPointsBold key={key} items={block.items} />;
        case 'link':
            return (
                <p key={key} className="mb-[1.3rem] max-[900px]:mb-[1.2rem]">
                    {renderInline([{ type: 'link', href: block.href, text: block.text, external: block.external }])}
                </p>
            );
        default:
            return null;
    }
}

export default function LocalizedBlogPage({ page }) {
    const router = useRouter();
    const locale = router.locale || defaultLocale;
    const t = useTranslations('blog');
    const content = page.locales[locale] || page.locales[defaultLocale];
    const meta = content.meta || {};
    const subtitleIndexRef = { current: 0 };
    const seoTitle = content.seoTitle || content.title;
    const seoDescription = content.description;
    const imageAlt = content.imageAlt || content.title;
    const ogImageMetadata = getOgImageMetadata(page.image);
    const defaultStructuredData = {
        '@context': 'https://schema.org',
        '@type': page.schemaType || 'Article',
        headline: content.title,
        description: seoDescription,
        image: page.image ? [getAbsoluteUrl(page.image, defaultLocale)] : undefined,
        datePublished: page.datePublished,
        dateModified: page.dateModified || page.datePublished,
        author: {
            '@type': 'Organization',
            name: 'bucha.rs',
            url: getAbsoluteUrl('/', defaultLocale),
        },
        publisher: {
            '@type': 'Organization',
            name: 'bucha.rs',
            logo: {
                '@type': 'ImageObject',
                url: getAbsoluteUrl('/images/bucha_logo.webp', defaultLocale),
            },
        },
        mainEntityOfPage: getAbsoluteUrl(page.pathname, locale),
        inLanguage: locale === 'sr' ? 'sr-RS' : locale,
    };
    const structuredData = content.structuredData || defaultStructuredData;

    return (
        <>
            <SeoHead
                title={seoTitle}
                description={seoDescription}
                pathname={page.pathname}
                image={page.image}
                imageAlt={imageAlt}
                imageWidth={ogImageMetadata?.width}
                imageHeight={ogImageMetadata?.height}
                imageType={ogImageMetadata?.type}
                articlePublishedTime={page.datePublished}
                articleModifiedTime={page.dateModified || page.datePublished}
                type="article"
                keywords={content.keywords}
                structuredData={structuredData}
            />
            <Navbar />
            <main>
                <div className="h-[10vh]" />
                <article
                    className="relative mx-auto max-w-187.5 border-t-2 border-(--MainAccentColor) p-5 font-['Roboto',sans-serif] text-[20px] leading-[1.9] font-normal normal-case max-[900px]:w-[90%] max-[900px]:text-[18px] max-[450px]:w-[95%] max-[450px]:leading-[1.8] [&_a]:text-(--SecundaryAccentColor) [&_a]:transition-colors [&_a]:duration-100 [&_a]:ease-in-out [&_a:hover]:text-(--SecundaryAccentColor) [&_a:visited]:text-(--SecundaryAccentColor) [&_p]:mb-[1.3rem] max-[900px]:[&_p]:mb-[1.2rem] [&_strong]:mb-[1.3rem] max-[900px]:[&_strong]:mb-[1.2rem]"
                    id={page.id}>
                    <BlogTitle title={content.title} />
                    {meta.date || meta.readTime || meta.category ? (
                        <Meta metaTag1={meta.date} metaTag2={meta.readTime} metaTag3={meta.category} />
                    ) : null}
                    {page.image ? <BlogImage src={page.image} alt={content.imageAlt || content.title} /> : null}
                    {content.lead ? <StrongParagraph text={renderInline(content.lead)} /> : null}
                    {content.sections?.length ? <TableOfContents sections={content.sections} /> : null}
                    {content.blocks.map((block, index) => renderBlock(block, `${page.id}-${index}`, subtitleIndexRef))}
                    {content.sections?.length ? (
                        <FloatingNav
                            title={content.floatingNavTitle || t('floatingNavTitle')}
                            sections={content.sections}
                        />
                    ) : null}
                </article>
            </main>
            <Footer />
        </>
    );
}
