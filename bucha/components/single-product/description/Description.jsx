import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function Description({ longDescription }) {
    const [section, setSection] = useState(0);
    const t = useTranslations('productDescription');

    return (
        <div className="mb-25 max-[1069px]:px-[5%]">
            <div className="mb-8 border-b-2 border-(--OutOfFocus)">
                <button
                    className={cn(
                        'cursor-pointer border-0 border-b-2 border-b-[rgba(255,255,255,0)] bg-transparent pb-2 text-[24px] font-bold tracking-widest transition-[border-bottom] duration-250',
                        section == 0 && '-mb-0.5 border-b-2 border-(--MainAccentColor)',
                    )}
                    onClick={() => setSection(0)}>
                    {t('title')}
                </button>
            </div>
            {section == 0 && (
                <div className="[&_p]:mb-5 [&_p]:text-[18px] [&_p]:leading-[1.7] [&_p]:text-(--PrimaryHover) max-[769px]:[&_p]:text-[16px]">
                    {longDescription.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
