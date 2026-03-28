import { useRouter } from 'next/router';

import Footer from '@/components/footer/Footer';
import TeamSection from '@/components/footer/TeamSection';
import Navbar from '@/components/nav/Navbar';
import SeoHead from '@/components/seo/SeoHead';
import Related from '@/components/tutorials/related/Related';
import InstructionsIntro from '@/components/tutorials/instructions-intro/InstructionsIntro';
import Step from '@/components/tutorials/step/Step';
import { defaultLocale } from '@/lib/i18n';
import { getOgImageMetadata } from '@/lib/og-images';

export default function LocalizedTutorialPage({ page }) {
    const router = useRouter();
    const locale = router.locale || defaultLocale;
    const content = page.locales[locale] || page.locales[defaultLocale];
    const seoTitle = content.seoTitle || content.title;
    const seoDescription = content.description;
    const imageAlt = content.imageAlt || content.title;
    const ogImageMetadata = getOgImageMetadata(page.image);
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: content.title,
        description: seoDescription,
        totalTime: page.totalTime,
        estimatedCost: page.estimatedCost,
        supply: page.supplies?.map((name) => ({
            '@type': 'HowToSupply',
            name,
        })),
        tool: page.tools?.map((name) => ({
            '@type': 'HowToTool',
            name,
        })),
        step: content.steps.map((step) => ({
            '@type': 'HowToStep',
            name: step.title,
            text: step.text,
            image: step.image ? `https://www.bucha.rs${step.image}` : undefined,
            url: `https://www.bucha.rs${page.pathname}#step${step.number}`,
        })),
    };

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
                type="article"
                keywords={content.keywords}
                structuredData={structuredData}
            />
            <Navbar />
            <main role="main" className="py-[1%]">
                <InstructionsIntro
                    title={content.intro.title}
                    text1={content.intro.text1}
                    link={content.intro.link}
                    linkText={content.intro.linkText}
                    text2={content.intro.text2}
                />
                {content.steps.map((step) => (
                    <Step
                        key={step.number}
                        title={step.title}
                        number={step.number}
                        image={step.image}
                        text={step.text}
                        order={step.order}
                        links={step.links}
                        linkTxts={step.linkTexts}
                        textAfter={step.textAfter}
                    />
                ))}
                {page.showRelated ? <Related /> : null}
                {page.showTeamSection ? <TeamSection /> : null}
            </main>
            <Footer />
        </>
    );
}
