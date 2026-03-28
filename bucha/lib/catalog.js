const productCatalog = {
    scoby: {
        id: 'scoby',
        slug: 'kombuha-scoby-cajna-gljiva',
        imageSlug: 'kombuha-scoby-cajna-gljiva',
        routePath: '/proizvodi/kombuha-scoby-cajna-gljiva',
        fallbackName: 'Kombuha SCOBY čajna gljiva',
        price: 950,
    },
    hibiscus: {
        id: 'hibiscus',
        slug: 'kombuha-05l-hibiskus',
        imageSlug: 'kombuha-05l-hibiskus',
        routePath: '/proizvodi/kombuha-05l-hibiskus',
        fallbackName: 'Kombuha 0.5l - Hibiskus',
        price: 650,
    },
    cottonCover: {
        id: 'cottonCover',
        slug: 'pamucna-prekrivka-za-teglu-tokom-fermentacije',
        imageSlug: 'pamucna-prekrivka-za-teglu-tokom-fermentacije',
        routePath: '/proizvodi/pamucna-prekrivka-za-teglu-tokom-fermentacije',
        fallbackName: 'Pamučna prekrivka za teglu tokom fermentacije',
        price: 250,
    },
    cottonCover3Pack: {
        id: 'cottonCover3Pack',
        slug: '3kom-pamucne-prekrivke-za-teglu',
        imageSlug: '3kom-pamucne-prekrivke-za-teglu',
        routePath: '/proizvodi/pamucna-prekrivka-za-teglu-tokom-fermentacije',
        fallbackName: '3kom pamučne prekrivke za teglu',
        price: 600,
    },
    cottonCover5Pack: {
        id: 'cottonCover5Pack',
        slug: '5kom-pamucnih-prekrivki-za-teglu',
        imageSlug: '5kom-pamucnih-prekrivki-za-teglu',
        routePath: '/proizvodi/pamucna-prekrivka-za-teglu-tokom-fermentacije',
        fallbackName: '5kom pamučnih prekrivki za teglu',
        price: 950,
    },
    thermometer: {
        id: 'thermometer',
        slug: 'termometar-za-fermentaciju',
        imageSlug: 'termometar-za-fermentaciju',
        routePath: '/proizvodi/termometar-za-fermentaciju',
        fallbackName: 'Termometar za fermentaciju',
        price: 200,
    },
    thermometer3Pack: {
        id: 'thermometer3Pack',
        slug: '3kom-termometar-za-fermentaciju',
        imageSlug: '3kom-termometar-za-fermentaciju',
        routePath: '/proizvodi/termometar-za-fermentaciju',
        fallbackName: '3kom termometar za fermentaciju',
        price: 500,
    },
    thermometer5Pack: {
        id: 'thermometer5Pack',
        slug: '5kom-termometar-za-fermentaciju',
        imageSlug: '5kom-termometar-za-fermentaciju',
        routePath: '/proizvodi/termometar-za-fermentaciju',
        fallbackName: '5kom termometar za fermentaciju',
        price: 800,
    },
    phStrips: {
        id: 'phStrips',
        slug: 'lakmus-papir-za-merenje-ph-fermentacije',
        imageSlug: 'lakmus-papir-za-merenje-ph-fermentacije',
        routePath: '/proizvodi/lakmus-papir-za-merenje-ph-fermentacije',
        fallbackName: 'Lakmus papir za merenje PH fermentacije',
        price: 950,
    },
};

const productIds = Object.keys(productCatalog);

const legacyNameToProductId = Object.values(productCatalog).reduce((accumulator, product) => {
    accumulator[product.fallbackName] = product.id;
    return accumulator;
}, {});

const slugToProductId = Object.values(productCatalog).reduce((accumulator, product) => {
    accumulator[product.slug] = product.id;
    return accumulator;
}, {});

export function getProduct(productId) {
    return productCatalog[productId] || null;
}

export function getAllProducts() {
    return productIds.map((productId) => productCatalog[productId]);
}

export function resolveProductId(value) {
    if (!value) {
        return null;
    }

    if (productCatalog[value]) {
        return value;
    }

    if (slugToProductId[value]) {
        return slugToProductId[value];
    }

    return legacyNameToProductId[value] || null;
}

export function normalizeCartItem(item) {
    const productId = resolveProductId(item.productId || item.slug || item.name);
    const product = getProduct(productId);

    if (!product) {
        return {
            ...item,
            productId: item.productId || null,
            quantity: Number(item.quantity) || 1,
            price: Number(item.price) || 0,
            fallbackName: item.name || '',
        };
    }

    return {
        productId,
        quantity: Number(item.quantity) || 1,
        price: Number(item.price) || product.price,
        fallbackName: item.name || product.fallbackName,
    };
}

export function getProductRoutePath(productId) {
    return getProduct(productId)?.routePath || '/prodaja';
}

export function getProductImagePath(productId) {
    const product = getProduct(productId);

    return product ? `/images/products/${product.imageSlug}.webp` : '/favicon.ico';
}

export function getProductFallbackName(productId) {
    return getProduct(productId)?.fallbackName || '';
}
