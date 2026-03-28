import LinkButton from '../../buttons/LinkButton';
import { useTranslations } from 'next-intl';

export default function Related() {
    const t = useTranslations('tutorialRelated');

    return (
        <div className="my-16 bg-(--MainAccentColor) py-6 text-(--BG)">
            <div className="mx-auto flex w-[83%] items-center gap-4">
                <p className="text-[32px] leading-[1.3] font-semibold max-[1069px]:text-[24px]">{t('title')}</p>
                <LinkButton buttonText={t('button')} link={'/uputstva/druga-fermentacija'} main={false} />
            </div>
        </div>
    );
}
