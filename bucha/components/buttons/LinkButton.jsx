import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function LinkButton({ buttonText, link, main = true, locale, onClick }) {
    return (
        <Link
            href={link}
            locale={locale}
            onClick={onClick}
            className={cn(
                'flex w-fit cursor-pointer items-center justify-center rounded-(--BorderRadius) border-0 px-7 py-3.5 text-[16px] font-semibold no-underline transition-colors duration-250 max-[769px]:px-5 max-[769px]:py-2.5',
                main
                    ? 'bg-(--Primary) text-(--BG) hover:bg-(--PrimaryHover)'
                    : 'bg-(--BG) text-(--Primary) hover:bg-(--BGHover)',
            )}>
            {buttonText}
        </Link>
    );
}
