import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/i18n/LocaleSwitcher';

const BUCHA_LOGO_WIDTH = 300;
const BUCHA_LOGO_HEIGHT = 83.57;

export default function Footer() {
    const [screenWidth, setScreenWidth] = useState(1920);
    const t = useTranslations('footer');

    useEffect(() => {
        function handleWindowResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div role="contentinfo" className="w-full bg-(--Primary) px-4 py-10 text-white">
            <div className="mx-auto max-w-292.5">
                <div className="flex flex-wrap items-start justify-between max-[769px]:flex-col max-[769px]:items-center max-[769px]:justify-center max-[769px]:gap-8 [&_a]:m-0 [&_a]:cursor-pointer [&_a]:text-[14px] [&_a]:leading-5 [&_a]:text-white [&_a]:no-underline [&_a:hover]:underline [&_li]:my-2.5 [&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0 max-[769px]:[&>div]:text-center">
                    <div>
                        <Image
                            src={'/images/bucha_logo.png'}
                            width={screenWidth > 875 ? BUCHA_LOGO_WIDTH : BUCHA_LOGO_WIDTH / 2}
                            height={screenWidth > 875 ? BUCHA_LOGO_HEIGHT : BUCHA_LOGO_HEIGHT / 2}
                            alt="bucha.rs logo"></Image>
                    </div>
                    <div>
                        <strong className="mb-4 text-[20px] leading-6 font-semibold text-(--BG)">{t('shop')}</strong>
                        <ul>
                            <li>
                                <Link href="/setovi">{t('allSets')}</Link>
                            </li>
                            <li>
                                <Link href="/kombuha">{t('allFlavors')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="mb-4 text-[20px] leading-6 font-semibold text-(--BG)">
                            {t('extraPages')}
                        </strong>
                        <ul>
                            <li>
                                <Link href="/uslovi/o-nama">{t('about')}</Link>
                            </li>
                            <li>
                                <Link href="/uslovi/politika-privatnosti">{t('privacy')}</Link>
                            </li>
                            <li>
                                <Link href="/uslovi/prava-potrosaca">{t('consumerRights')}</Link>
                            </li>
                            <li>
                                <Link href="/uslovi/nacin-isporuke">{t('shipping')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="mb-4 text-[20px] leading-6 font-semibold text-(--BG)">{t('guides')}</strong>
                        <ul>
                            <li>
                                <Link href="/uputstva/priprema-kombuhe">{t('guideLinks.preparation')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/druga-fermentacija">{t('guideLinks.secondFermentation')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/kako-se-pravi-kombuha">{t('guideLinks.recipe')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/sta-je-kombuha">{t('guideLinks.whatIsKombucha')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/zdravstveni-benefiti-kombuhe">{t('guideLinks.benefits')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/da-li-kombuha-sadrzi-alkohol">{t('guideLinks.alcohol')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/kako-prepoznati-dobru-kombuhu">
                                    {t('guideLinks.goodKombucha')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/uputstva/kako-se-cuva-kombuha">{t('guideLinks.storage')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/da-li-je-braon-boja-kombuhe-uredu">
                                    {t('guideLinks.brownColor')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/uputstva/koliko-kombuhe-treba-piti">{t('guideLinks.dailyAmount')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/kombucha-dijeta">{t('guideLinks.diets')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/mehurici-u-kombuhi">{t('guideLinks.bubbles')}</Link>
                            </li>
                            <li>
                                <Link href="/uputstva/moze-li-svako-praviti-kombuhu">
                                    {t('guideLinks.everyoneCanMake')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/uputstva/nuspojave-kombuhe">{t('guideLinks.sideEffects')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="mb-4 text-[20px] leading-6 font-semibold text-(--BG)">{t('contact')}</strong>
                        <ul>
                            <li>
                                <a href="tel:063/427-280">063/427-280</a>
                            </li>
                            <li>
                                <a href="tel:060/6337-280">060/6337-280</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col pt-16 [&_p]:mb-2 [&_p]:text-[14px]">
                    <div className="mb-8 flex items-baseline justify-between border-b border-white pb-6">
                        <div className="flex items-center justify-start gap-2 text-[16px] leading-5 font-normal">
                            <div>
                                <Image src={'/images/language.png'} width={24} height={24} alt="language icon" />
                            </div>
                            <label htmlFor="language">{t('language')}</label>
                            <div id="language">
                                <LocaleSwitcher />
                            </div>
                        </div>
                        <div>
                            <ul className="m-0 flex list-none items-center gap-6 p-0 [&_a]:cursor-pointer">
                                <li>
                                    <a href="https://twitter.com/rs_bucha" target="_blank">
                                        <Image src={'/images/x.png'} width={24} height={24} alt="bucha.rs x icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/kombuha.bucha.rs/" target="_blank">
                                        <Image
                                            src={'/images/facebook.png'}
                                            width={24}
                                            height={24}
                                            alt="bucha.rs facebook icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@bucha_rs" target="_blank">
                                        <Image
                                            src={'/images/youtube.png'}
                                            width={24}
                                            height={24}
                                            alt="bucha.rs youtube icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/bucha.rs/" target="_blank">
                                        <Image
                                            src={'/images/instagram.png'}
                                            width={24}
                                            height={24}
                                            alt="bucha.rs instagram icon"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>© 2026 bucha.rs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
