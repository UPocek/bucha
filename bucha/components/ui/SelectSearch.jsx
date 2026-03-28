import dynamic from 'next/dynamic';

export const SelectSearch = dynamic(() => import('./SelectSearchBase'), {
    ssr: false,
    loading: () => null,
});
