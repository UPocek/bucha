import Footer from '@/components/footer/Footer';
import NavWrapper from '@/components/nav/Navbar';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SeoHead from '@/components/seo/SeoHead';
import { getProductImagePath, normalizeCartItem } from '@/lib/catalog';
import { baseUrl, mainCurrency, shippingPrice, supportedCountries } from '../_app';
import ActionButton from '@/components/buttons/ActionButton';
import { Input } from '@/components/ui/input';
import { SelectSearch } from '@/components/ui/SelectSearch';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';
import { getMessages } from '@/lib/messages';

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: getMessages(locale),
        },
    };
}

export default function Checkout() {
    const router = useRouter();
    const { cartItemCount, cartItems, emptyCart } = useCart();
    const locale = router.locale || 'sr';
    const t = useTranslations('checkout');
    const productTranslations = useTranslations('products.names');
    const commonTranslations = useTranslations('common.localeSwitcher');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('RS');
    const [note, setNote] = useState('');

    const localizedCartItems = cartItems.map((item) => {
        const normalizedItem = normalizeCartItem(item);

        return {
            ...normalizedItem,
            image: normalizedItem.productId ? getProductImagePath(normalizedItem.productId) : '/favicon.ico',
            displayName: normalizedItem.productId
                ? productTranslations(normalizedItem.productId)
                : normalizedItem.fallbackName || item.name || '',
        };
    });
    const orderProducts = localizedCartItems.map((item) => ({
        productId: item.productId || null,
        fallbackName: item.fallbackName || item.displayName,
        name: item.fallbackName || item.displayName,
        quantity: item.quantity,
        price: item.price,
    }));

    const subtotal = localizedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingLabel =
        shippingPrice !== 0 ? `${shippingPrice}${mainCurrency.toLowerCase()}` : t('summary.shippingFallback');

    useEffect(() => {
        if (cartItemCount === 0) {
            router.push('/prodaja');
        }
    }, [cartItemCount, router]);

    function createOrder() {
        if (!checkOrderFilledCorrectly()) {
            return;
        }
        fetch(`${baseUrl}/api/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: `${surname} ${name}`,
                email: email,
                phone: phone,
                address: address,
                city: city,
                postalCode: postalCode,
                country: country,
                locale: locale,
                note: note,
                products: orderProducts,
            }),
        })
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error('Request failed');
                }
                const data = await response.json();
                toast.success(t('messages.success'));
                emptyCart();
                router.replace(`/hvala/${data.id}`);
            })
            .catch((error) => {
                toast.error(t('messages.failure'));
                console.error(error);
            });
    }

    function checkOrderFilledCorrectly() {
        if (email.trim().length === 0 || !email.includes('@') || !email.includes('.')) {
            toast.error(t('validation.invalidEmail'));
            return false;
        }
        if (phone.trim().length === 0 || phone.trim().length < 9) {
            toast.error(t('validation.invalidPhone'));
            return false;
        }
        if (name.trim().length === 0) {
            toast.error(t('validation.invalidName'));
            return false;
        }
        if (surname.trim().length === 0) {
            toast.error(t('validation.invalidSurname'));
            return false;
        }
        if (address.trim().length === 0) {
            toast.error(t('validation.invalidAddress'));
            return false;
        }
        if (city.trim().length === 0) {
            toast.error(t('validation.invalidCity'));
            return false;
        }
        if (postalCode.trim().length === 0) {
            toast.error(t('validation.invalidPostalCode'));
            return false;
        }
        if (country.trim().length === 0) {
            toast.error(t('validation.invalidCountry'));
            return false;
        }
        if (cartItems.length === 0) {
            toast.error(t('validation.emptyCart'));
            return false;
        }
        return true;
    }

    return (
        <>
            <SeoHead title={t('title')} description={t('description')} pathname="/porucivanje" noindex />
            <NavWrapper />
            <main
                role="main"
                className="mx-auto mt-12 mb-24 grid max-w-267.25 grid-cols-2 gap-16 px-[5%] max-[1069px]:gap-8 max-[900px]:mt-28 max-[769px]:grid-cols-1">
                <form>
                    <p style={{ marginTop: 0 }} className="mt-6 mb-1 text-[2rem] leading-[1.2] font-bold">
                        {t('contact')}
                    </p>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder={t('fields.email')}
                    />
                    <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        placeholder={t('fields.phone')}
                    />
                    <p className="mt-6 mb-1 text-[2rem] leading-[1.2] font-bold">{t('details')}</p>
                    <div className="grid grid-cols-2 gap-4 [&_input]:mb-0">
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder={t('fields.name')}
                        />
                        <Input
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            type="text"
                            placeholder={t('fields.surname')}
                        />
                    </div>
                    <Input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder={t('fields.address')}
                    />
                    <Input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        placeholder={t('fields.city')}
                    />
                    <Input
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        type="text"
                        placeholder={t('fields.postalCode')}
                    />
                    <SelectSearch
                        items={supportedCountries}
                        selectedItem={country}
                        onChange={(c) => setCountry(c)}
                        text={t('fields.country')}
                        locale={locale}
                        searchPlaceholder={commonTranslations('searchPlaceholder')}
                        emptyText={commonTranslations('empty')}
                    />
                    <p className="mt-6 mb-1 text-[2rem] leading-[1.2] font-bold">{t('note')}</p>
                    <Textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder={t('notePlaceholder')}
                    />
                </form>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4 border-b border-(--OutOfFocus) py-8">
                        {localizedCartItems.map((item, index) => (
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
                    <div className="py-8 [&>button]:w-full [&>button]:bg-(--MainAccentColor) [&>button]:text-[20px] [&>button]:font-extrabold [&>button:hover]:bg-(--MainAccentColorHover)">
                        <ActionButton buttonText={t('orderButton')} action={createOrder} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
