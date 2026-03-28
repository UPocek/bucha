import enMessages from '@/messages/en';
import ruMessages from '@/messages/ru';
import srMessages from '@/messages/sr';
import { defaultLocale, normalizeLocale } from '@/lib/i18n';

const messagesByLocale = {
    sr: srMessages,
    en: enMessages,
    ru: ruMessages,
};

export function getMessages(locale = defaultLocale) {
    return messagesByLocale[normalizeLocale(locale)] || srMessages;
}
