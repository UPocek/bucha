/* eslint-disable react/no-multi-comp */
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Check, ChevronDown, ChevronsUpDown, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { localeDefinitions, localeLabels, locales, normalizeLocale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const FlagIcon = ({ code, className }) => {
    switch (code.toLowerCase()) {
        case 'en':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 30"
                    className={className}
                    preserveAspectRatio="none">
                    <clipPath id="en-clip">
                        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                    </clipPath>
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path d="M0,0 L60,30 m0,-30 L0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M0,0 L60,30 m0,-30 L0,30" clipPath="url(#en-clip)" stroke="#C8102E" strokeWidth="4" />
                    <path d="M30,0 v30 m-30,-15 h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30,0 v30 m-30,-15 h60" stroke="#C8102E" strokeWidth="6" />
                </svg>
            );
        case 'ru':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3 2"
                    className={className}
                    preserveAspectRatio="none">
                    <rect width="3" height="2" fill="#d52b1e" />
                    <rect width="3" height="1.333" fill="#0039a6" />
                    <rect width="3" height="0.667" fill="#fff" />
                </svg>
            );
        case 'sr':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3 2"
                    className={className}
                    preserveAspectRatio="none">
                    <rect width="3" height="2" fill="#fff" />
                    <rect width="3" height="1.333" fill="#0c4076" />
                    <rect width="3" height="0.667" fill="#c6363c" />
                    <path
                        fill="#f3c76a"
                        d="M0.85,0.73 v0.26 c0,0.31 0.3,0.39 0.3,0.39 c0,0 -0.3,-0.08 -0.3,-0.39 v-0.26 z M1.25,0.73 v0.26 c0,0.31 -0.3,0.39 -0.3,0.39 c0,0 0.3,-0.08 0.3,-0.39 v-0.26 zM0.93,0.78 h0.21 v0.21 h-0.21 z"
                    />
                </svg>
            );
        default:
            return <div className={cn('bg-gray-200', className)} />;
    }
};

export default function LocaleSwitcher({ variant = 'default', compact = false }) {
    const router = useRouter();
    const t = useTranslations('common.localeSwitcher');
    const [open, setOpen] = useState(false);
    const currentLocale = normalizeLocale(router.locale);
    const isNavVariant = variant === 'nav';

    function changeLocale(nextLocale) {
        if (nextLocale === currentLocale) {
            setOpen(false);
            return;
        }

        void router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: nextLocale });

        setOpen(false);
    }

    if (isNavVariant) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <button
                        type="button"
                        aria-label={`${t('label')}: ${localeLabels[currentLocale]}`}
                        className={cn(
                            'group flex items-center justify-center bg-white text-(--Primary) transition-all outline-none hover:bg-(--BGHover) focus-visible:ring-2 focus-visible:ring-(--MainAccentColor) focus-visible:ring-offset-2',
                            compact
                                ? 'relative h-9 w-9 rounded-full'
                                : 'mt-2 h-10 gap-2 rounded-(--BorderRadius) border border-gray-200 px-3 py-2 shadow-sm',
                        )}>
                        {compact ? (
                            <div className="flex items-center justify-center">
                                <Globe className="h-5 w-5 text-gray-500 transition-colors group-hover:text-(--Primary)" />
                                <span className="absolute -right-0.5 -bottom-0.5 flex h-4 min-w-4 items-center justify-center rounded-[4px] bg-(--MainAccentColor) px-1 text-[8px] font-bold text-white shadow-sm ring-1 ring-white">
                                    {currentLocale.toUpperCase()}
                                </span>
                            </div>
                        ) : (
                            <>
                                <Globe className="h-4 w-4 text-gray-500 transition-colors group-hover:text-(--Primary)" />
                                <span className="text-sm font-medium">{localeLabels[currentLocale]}</span>
                                <ChevronDown
                                    className={cn(
                                        'h-4 w-4 opacity-50 transition-transform duration-200',
                                        open && 'rotate-180 opacity-100',
                                    )}
                                />
                            </>
                        )}
                    </button>
                </PopoverTrigger>
                <PopoverContent
                    align="end"
                    sideOffset={8}
                    className="w-[200px] rounded-xl border border-gray-100 bg-white/95 p-1.5 text-(--Primary) shadow-lg backdrop-blur-md sm:w-[220px]">
                    <div className="flex flex-col gap-0.5">
                        {localeDefinitions.map(({ code, label }) => {
                            const isActive = currentLocale === code;

                            return (
                                <button
                                    key={code}
                                    type="button"
                                    onClick={() => changeLocale(code)}
                                    className={cn(
                                        'flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors outline-none select-none hover:bg-(--BGHover) hover:text-(--Primary)',
                                        isActive
                                            ? 'bg-(--BGHover) font-medium text-(--MainAccentColor)'
                                            : 'text-gray-600',
                                    )}>
                                    <span className="flex items-center gap-2.5">
                                        <span
                                            className={cn(
                                                'flex h-[18px] w-[26px] shrink-0 overflow-hidden rounded-[3px] shadow-sm transition-opacity',
                                                isActive
                                                    ? 'opacity-100 ring-1 ring-(--MainAccentColor)/20 ring-offset-1'
                                                    : 'opacity-80',
                                            )}>
                                            <FlagIcon code={code} className="h-full w-full object-cover" />
                                        </span>
                                        {label}
                                    </span>
                                    {isActive && <Check className="h-4 w-4 text-(--MainAccentColor)" />}
                                </button>
                            );
                        })}
                    </div>
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="h-9 min-w-36 justify-between rounded-(--BorderRadius) border-gray-200 bg-white px-3 text-sm font-normal text-(--Primary) shadow-sm hover:bg-(--BGHover) hover:text-(--Primary)">
                    <span className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-gray-400" />
                        {localeLabels[currentLocale]}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 rounded-xl border border-gray-100 bg-white p-0 text-(--Primary) shadow-lg backdrop-blur-md">
                <Command>
                    <CommandInput placeholder={t('searchPlaceholder')} className="border-none focus:ring-0" />
                    <CommandList>
                        <CommandEmpty className="py-6 text-center text-sm text-gray-500">{t('empty')}</CommandEmpty>
                        <CommandGroup className="p-1.5">
                            {locales.map((locale) => {
                                const isActive = currentLocale === locale;
                                return (
                                    <CommandItem
                                        key={locale}
                                        value={localeLabels[locale]}
                                        onSelect={() => changeLocale(locale)}
                                        className={cn(
                                            'flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-sm',
                                            isActive && 'bg-(--BGHover) text-(--MainAccentColor)',
                                        )}>
                                        <span className="flex items-center gap-2.5">
                                            <span
                                                className={cn(
                                                    'flex h-[18px] w-[26px] shrink-0 overflow-hidden rounded-[3px] shadow-sm transition-opacity',
                                                    isActive
                                                        ? 'opacity-100 ring-1 ring-(--MainAccentColor)/20 ring-offset-1'
                                                        : 'opacity-80 group-hover:opacity-100',
                                                )}>
                                                <FlagIcon code={locale} className="h-full w-full object-cover" />
                                            </span>
                                            {localeLabels[locale]}
                                        </span>
                                        {isActive && <Check className="h-4 w-4 shrink-0" />}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
