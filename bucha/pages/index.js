import Footer from '@/components/footer/Footer';
import Card from '@/components/landing-cards/simple-card/SimpleCard';
import TeamSection from '@/components/footer/TeamSection';
import Navbar from '@/components/nav/Navbar';
import GridCard from '@/components/landing-cards/grid-card/GridCard';
import VideoCard from '@/components/landing-cards/video-card/VideoCard';
import SeoHead from '@/components/seo/SeoHead';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { getMessages } from '@/lib/messages';
import { defaultLocale } from '@/lib/i18n';
import { getHomepageStructuredData } from '@/lib/structured-data';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: getMessages(locale),
        },
    };
}

export default function Home() {
    const router = useRouter();
    const locale = router.locale || defaultLocale;
    const t = useTranslations('storefront.home');
    const productT = useTranslations('products');
    const title = t('title');
    const description = t('description');
    const structuredData = getHomepageStructuredData({
        locale,
        featuredItems: [
            { name: t('videoCard.title'), pathname: '/uputstva/priprema-kombuhe' },
            { name: t('videoCard.secondButton'), pathname: '/uputstva/druga-fermentacija' },
            { name: t('starterCard.title'), pathname: '/prodaja' },
            { name: t('drinksCard.title'), pathname: '/kombuha' },
        ],
    });

    return (
        <>
            <SeoHead
                title={title}
                description={description}
                pathname="/"
                image="/images/scoby.jpg"
                imageAlt={productT('names.scoby')}
                structuredData={structuredData}
            />
            <Navbar />
            <main className="py-[1%]">
                <div className="flex flex-col">
                    <h1 className="mt-8 mb-0 block w-full max-w-360 px-[5%] text-left text-[32px] leading-[1.2] tracking-[-0.1px] max-[1069px]:text-[28px] max-[900px]:mt-28 max-[768px]:text-[24px]">
                        {t('heading')}
                    </h1>
                    <div>
                        <VideoCard
                            title={t('videoCard.title')}
                            text={t('videoCard.text')}
                            buttons={[
                                { btnText: t('videoCard.firstButton'), btnUrl: '/uputstva/priprema-kombuhe' },
                                { btnText: t('videoCard.secondButton'), btnUrl: '/uputstva/druga-fermentacija' },
                            ]}
                            bgColor={'#3D5A80'}
                            lightBgColor={'#6d9ddb'}
                            order={1}
                            videoUrl={'/videos/broll.mp4'}
                        />
                        <Card
                            title={t('starterCard.title')}
                            text={t('starterCard.text')}
                            buttons={[{ btnText: t('starterCard.button'), btnUrl: '/prodaja' }]}
                            bgColor={'#036141'}
                            lightBgColor={'#bbf2d1'}
                            order={2}
                            imgUrl={'/images/kombuha_set.png'}
                            imgAlt={t('images.starterSetAlt')}
                        />
                        <Card
                            title={t('drinksCard.title')}
                            text={t('drinksCard.text')}
                            buttons={[{ btnText: t('drinksCard.button'), btnUrl: '/kombuha' }]}
                            bgColor={'#B04A59'}
                            lightBgColor={'#B04A59'}
                            order={1}
                            imgUrl={'/images/kombuha2_2.jpg'}
                            imgAlt={t('images.drinksAlt')}
                        />
                        <GridCard
                            title={t('socialCard.title')}
                            text={t('socialCard.text')}
                            buttons={[
                                { btnText: t('socialCard.button'), btnUrl: 'https://www.instagram.com/bucha.rs/' },
                            ]}
                            bgColor={'#F9A03F'}
                            lightBgColor={'#F3BC80'}
                            order={2}
                            imgs={[
                                { url: '/images/kombuha3_5.jpeg', alt: t('images.socialAlts.img1') },
                                { url: '/images/kombuha3_2.jpeg', alt: t('images.socialAlts.img2') },
                                { url: '/images/kombuha3_1.jpeg', alt: t('images.socialAlts.img3') },
                                { url: '/images/kombuha3_3.jpeg', alt: t('images.socialAlts.img4') },
                            ]}
                        />
                    </div>
                    <TeamSection />
                </div>
            </main>
            <Footer />
        </>
    );
}
