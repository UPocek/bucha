import Footer from '@/components/footer/Footer';
import NavWrapper from '@/components/nav/Navbar';
import SeoHead from '@/components/seo/SeoHead';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { baseUrl, mainCurrency, shippingPrice } from '../_app';
import { toast } from 'sonner';
import { getCountryFromCode } from '@/helper/helper';
import Image from 'next/image';
import { getProductImagePath, normalizeCartItem } from '@/lib/catalog';
import { useTranslations } from 'next-intl';
import { getMessages } from '@/lib/messages';

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: getMessages(locale),
        },
    };
}

export default function ThankYou() {
    const router = useRouter();
    const [order, setOrder] = useState(null);
    const locale = router.locale || 'sr';
    const t = useTranslations('thankYou');
    const a11y = useTranslations('accessibility');
    const statusTranslations = useTranslations('thankYou.statuses');
    const productTranslations = useTranslations('products.names');
    const orderCreatedDate = useMemo(() => (order ? new Date(order.createdAt) : null), [order]);
    const normalizedProducts = useMemo(
        () =>
            order
                ? order.products.map((item) => {
                      const normalizedItem = normalizeCartItem(item);

                      return {
                          ...normalizedItem,
                          image: normalizedItem.productId
                              ? getProductImagePath(normalizedItem.productId)
                              : '/favicon.ico',
                          displayName: normalizedItem.productId
                              ? productTranslations(normalizedItem.productId)
                              : normalizedItem.fallbackName || item.name || '',
                      };
                  })
                : [],
        [order, productTranslations],
    );
    const subtotal = normalizedProducts.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingLabel =
        shippingPrice !== 0 ? `${shippingPrice}${mainCurrency.toLowerCase()}` : t('summary.shippingFallback');
    const dateFormatter = useMemo(() => new Intl.DateTimeFormat(locale), [locale]);
    const deliveryRange = useMemo(() => {
        if (!orderCreatedDate) {
            return null;
        }

        const fromDate = new Date(orderCreatedDate);
        fromDate.setDate(fromDate.getDate() + 2);

        const toDate = new Date(orderCreatedDate);
        toDate.setDate(toDate.getDate() + 7);

        return {
            from: dateFormatter.format(fromDate),
            to: dateFormatter.format(toDate),
        };
    }, [dateFormatter, orderCreatedDate]);
    const statusLabel = order?.status === 'processing' ? statusTranslations('processing') : order?.status;

    useEffect(() => {
        const { id } = router.query;
        if (id) {
            fetch(`${baseUrl}/api/order/${id}`)
                .then(async (response) => {
                    if (!response.ok) {
                        throw new Error('Request failed');
                    }
                    const data = await response.json();
                    setOrder(data);
                })
                .catch((_) => {
                    toast.error(t('missingOrder'));
                    router.replace('/');
                });
        }
    }, [router, router.query, t]);

    return (
        <>
            <SeoHead
                title={t('title')}
                description={t('description')}
                pathname={router.query.id ? `/hvala/${router.query.id}` : '/hvala'}
                noindex
            />
            <NavWrapper />
            <main
                role="main"
                className="mx-auto my-24 grid max-w-300 grid-cols-2 gap-16 px-[5%] max-[1069px]:gap-8 max-[900px]:mt-28 max-[769px]:grid-cols-1">
                {order ? (
                    <>
                        <div className="flex flex-col gap-1 [&_p]:text-[15px] [&_p]:leading-[1.6] [&_p]:font-light [&_p]:text-(--PrimaryHover)">
                            <div className="flex items-center gap-4">
                                <h1 className="mb-4 text-[24px] leading-[1.1] font-medium tracking-[0.08px]">
                                    {t('heading')}
                                </h1>
                                <Image
                                    style={{ marginBottom: 16 }}
                                    src={'/images/check.png'}
                                    width={24}
                                    height={24}
                                    alt={a11y('confirmed')}
                                />
                            </div>
                            <p>
                                <span className="text-[16px] font-bold">{t('emailNotice')}</span>
                            </p>
                            <p>{t('orderNumber', { id: order.id })}</p>
                            <p>{t('status', { status: statusLabel })}</p>
                            <p>
                                {t('createdAt', {
                                    date: dateFormatter.format(new Date(order.createdAt)),
                                })}
                            </p>
                            <p>{t('sentTo', { email: order.email })}</p>
                            <hr className="my-8" />
                            <p className="mb-4 text-[24px] leading-[1.1] font-medium tracking-[0.08px]">
                                {t('shippingFor')}
                            </p>
                            <p>{order.fullName}</p>
                            <p>{order.address}</p>
                            <p>
                                {order.postalCode}, {order.city}
                            </p>
                            <p>{getCountryFromCode(order.country, locale)}</p>
                            <p>{order.email}</p>
                            <p>{order.phone}</p>
                            <hr className="my-8" />
                            <p className="mb-4 text-[24px] leading-[1.1] font-medium tracking-[0.08px]">
                                {t('payment')}
                            </p>
                            <p>{t('paymentMethod')}</p>
                            <hr className="my-8" />
                            <p className="mb-4 text-[24px] leading-[1.1] font-medium tracking-[0.08px]">{t('note')}</p>
                            <p>{order.note || '-'}</p>
                        </div>
                        <div>
                            <p className="mb-4 text-[24px] leading-[1.1] font-medium tracking-[0.08px]">
                                {t('summaryHeading')}
                            </p>
                            {deliveryRange ? <p>{t('deliveryWindow', deliveryRange)}</p> : null}
                            <div className="flex flex-col gap-4 border-b border-(--OutOfFocus) py-8">
                                {normalizedProducts.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <Image
                                                className="aspect-square rounded-(--BorderRadius) object-cover"
                                                src={item.image}
                                                width={64}
                                                height={64}
                                                alt={item.displayName}
                                            />
                                            <div className="flex flex-col pl-4">
                                                <div className="m-0 pt-2 pr-4 text-[14px] font-extrabold">
                                                    {item.displayName}
                                                </div>
                                                <div className="m-0 text-[14px]">{`x${item.quantity}`}</div>
                                            </div>
                                        </div>
                                        <p className="m-0 pt-2 text-[14px] font-extrabold">{`${item.price * item.quantity}${mainCurrency.toLowerCase()}`}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4 border-b border-(--OutOfFocus) py-8">
                                <div className="flex items-center justify-between">
                                    <p className="text-[14px] font-semibold">{t('summary.subtotal')}</p>
                                    <p className="text-[14px]">{`${subtotal}${mainCurrency.toLowerCase()}`}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[14px] font-semibold">{t('summary.shipping')}</p>
                                    <p className="text-[14px]">{shippingLabel}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[20px] font-bold">{t('summary.total')}</p>
                                    <p className="text-[20px] font-bold">{`${subtotal + shippingPrice} ${mainCurrency}`}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="col-span-2 flex min-h-[40vh] w-full items-center justify-center">
                        <div className="inline-block h-50 w-50 overflow-hidden bg-white">
                            <div className="relative h-full w-full origin-top-left transform-[translateZ(0)_scale(1)] backface-hidden">
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="absolute top-12 left-23.5 h-6 w-3 origin-[6px_52px] animate-[ldio_yzaezf3dcmj_1s_linear_infinite] rounded-[6px/12px] bg-(--MainAccentColor)"
                                        style={{
                                            transform: `rotate(${index * 30}deg)`,
                                            animationDelay: `${-1 + index / 12}s`,
                                        }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
            <style jsx global>{`
                @keyframes ldio_yzaezf3dcmj {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );
}
