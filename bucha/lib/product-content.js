import { defaultLocale, normalizeLocale } from '@/lib/i18n';

const kombuchaBenefitsGuidePath = '/uputstva/zdravstveni-benefiti-kombuhe';

const productContent = {
    scoby: {
        sr: {
            seoTitle: 'Kombuha SCOBY čajna gljiva - Prodaja',
            description:
                'Prodaja kombuha čajne gljive (SCOBY) za pripremu fermentisanog kombuha pića kod kuće. Organska kultura bakterije i kvasca, po najboljoj ceni u Srbiji',
            keywords:
                'kombuha, kombucha, scoby, čajna gljiva, kako se sprema kombuha, gljiva za kombuhu, fermentisano piće, organski napitak, gljiva kombuha gde kupiti, kombucha srbija',
            shortDescription: [
                'Uz kupovinu dobijate kombuha gljivu spremnu za pripremu pića, detaljno uputstvo sa našim savetima za početnike i starter tečnost koja je potrebna za prvu fermentaciju',
                {
                    textBefore: 'Kultura kombuhe je bez glutena, pogodna za vegane i ima ',
                    linkText: 'mnoge benefite',
                    href: kombuchaBenefitsGuidePath,
                    textAfter: '.',
                },
                'Vašu porudžbinu šaljemo istog ili narednog dana.',
                'Nadamo se da ćete uživati u svom kombuha napitku! Ako imate bilo kakva pitanja, slobodno nam pišite putem SMS-a, Viber-a ili WhatsApp-a na 063/427-280.',
            ],
            longDescription: [
                'Kada je u pitanju pravljenje kombuhe, ništa nije važnije od kvaliteta vašeg startera za kombuhu.',
                'Naše SCOBY kulture kombuhe pravljene su koristeći filtriranu vodu, organski trsni šećer, rinfuzni čaj i organski starter za kombuhu u Srbiji. Naše kulture rastu koristeći starter koji fermentišemo najmanje 6 nedelja kako bismo osigurali najširi spektar korisnih bakterija u vašoj finalnoj kulturi. Kombuha starter, odnosno čajna gljiva, neophodan je deo za pravljenje vaše prve ture kombuha napitka.',
            ],
        },
        en: {
            seoTitle: 'Kombucha SCOBY Culture - Shop',
            description:
                'Order a kombucha SCOBY culture for brewing kombucha at home. Organic starter culture with bacteria and yeast, ready for your first batch.',
            keywords:
                'kombucha scoby, kombucha starter culture, kombucha mushroom, brew kombucha at home, kombucha shop serbia',
            shortDescription: [
                'Your order includes a SCOBY culture ready for brewing, starter liquid for the first fermentation and clear beginner instructions.',
                {
                    textBefore: 'The culture is gluten-free, vegan-friendly and has many ',
                    linkText: 'health benefits',
                    href: kombuchaBenefitsGuidePath,
                    textAfter: '.',
                },
                'Orders are shipped the same day or the next business day across Serbia.',
                'If you have any questions, contact us by SMS, Viber or WhatsApp at +381 63 427 280.',
            ],
            longDescription: [
                'When you brew kombucha at home, the quality of the starter culture matters more than anything else.',
                'Our SCOBY cultures grow in filtered water, organic sugar and quality tea, with a starter that ferments for at least six weeks to build a broad spectrum of beneficial microorganisms.',
                'That gives you a stable culture that helps your first batch succeed without guesswork.',
            ],
        },
        ru: {
            seoTitle: 'SCOBY для комбучи - Магазин',
            description:
                'Закажите культуру SCOBY для приготовления комбучи дома. Органическая стартовая культура бактерий и дрожжей, готовая к первой ферментации.',
            keywords:
                'scoby kombucha, стартовая культура комбучи, чайный гриб, купить комбучу, приготовить комбучу дома',
            shortDescription: [
                'В заказ входит культура SCOBY, стартовая жидкость для первой ферментации и понятная инструкция для новичков.',
                {
                    textBefore: 'Культура не содержит глютен, подходит веганам и обладает многими ',
                    linkText: 'полезными для здоровья свойствами',
                    href: kombuchaBenefitsGuidePath,
                    textAfter: '.',
                },
                'Заказы отправляем в тот же или на следующий рабочий день по всей Сербии.',
                'Если у вас есть вопросы, напишите нам по SMS, Viber или WhatsApp: +381 63 427 280.',
            ],
            longDescription: [
                'При приготовлении комбучи дома качество стартовой культуры определяет весь результат.',
                'Наши культуры SCOBY выращиваются в фильтрованной воде, органическом сахаре и качественном чае, а стартовая жидкость ферментируется не менее шести недель для широкого спектра полезных микроорганизмов.',
                'В результате вы получаете стабильную культуру, с которой легче успешно запустить первую партию.',
            ],
        },
        gallery: [
            '/images/products/kombuha-scoby-cajna-gljiva.webp',
            '/images/gallery/scoby2.jpg',
            '/images/gallery/scoby3.jpg',
            '/images/gallery/scoby4.jpg',
            '/images/gallery/scoby5.jpg',
        ],
        relatedItems: ['cottonCover', 'thermometer', 'hibiscus'],
        variants: [{ productId: 'scoby', price: 950 }],
    },
    hibiscus: {
        sr: {
            seoTitle: 'Kombuha 0.5l - Hibiskus - Prodaja',
            description:
                'Poručite kombuhu sa ukusom hibiskusa online, a mi je dostavljamo na adresu. Kombuha je napitak, lagano gazirano piće sa prirodnim probiotikom.',
            keywords:
                'kombuha, kombucha, kombuha cena, koliko kosta kombuha, kombuha caj prodaja, sok bez secera, lepa kombuha, domaca kombuha',
            shortDescription: [
                'Kombuha sa ukusom hibiskusa.',
                'Vašu porudžbinu šaljemo istog ili narednog dana.',
                'Nadamo se da ćete uživati u svom kombuha napitku! Ako imate bilo kakva pitanja, slobodno nam pišite putem SMS-a, Viber-a ili WhatsApp-a na 063/427-280.',
            ],
            longDescription: [
                'Kombuha Hibiskus je bezalkoholni, lagani fermentisani napitak, proizveden prirodnim procesom fermentacije zelenog čaja uz dodatak rinfuznog cveta hibiskusa. Naša kombuha sa hibiskusom sadrži korisne probiotske bakterije koje povoljno utiču na probavu i imunitet, čineći je savršenim izborom za svakodnevno osveženje.',
                'Svaka flaša naše kombuhe Hibiskus prirodno je blago gazirana i pripremljena s pažnjom, koristeći samo organske sastojke, visokokvalitetni zeleni čaj, filtriranu vodu i rinfuzni čaj od hibiskusa. Ovo je piće koje ne sadrži gluten i idealno je za vegane, pružajući bogatstvo prirodnih probiotika. Dodajte kombuhu Hibiskus u svoju svakodnevnu rutinu i otkrijte sve njene benefite.',
            ],
        },
        en: {
            seoTitle: 'Kombucha 0.5l - Hibiscus - Shop',
            description:
                'Order hibiscus kombucha online. A lightly sparkling fermented drink with a refreshing taste and natural probiotics.',
            keywords: 'hibiscus kombucha, kombucha drink, fermented tea drink, sparkling kombucha, healthy drink',
            shortDescription: [
                'A lightly sparkling kombucha with hibiscus and a refreshing fruity profile.',
                'A good daily refreshment and a healthier alternative to conventional soft drinks.',
                'Orders are shipped the same day or the next business day.',
            ],
            longDescription: [
                'Hibiscus kombucha is a non-alcoholic fermented drink made from tea and hibiscus flowers.',
                'We balance gentle acidity, fresh aroma and natural probiotic cultures so the drink stays easy to enjoy every day.',
                'Every bottle is prepared with carefully selected ingredients and controlled fermentation for a consistent result.',
            ],
        },
        ru: {
            seoTitle: 'Комбуча 0.5л - Гибискус - Магазин',
            description:
                'Закажите комбучу со вкусом гибискуса онлайн. Легкий слегка газированный ферментированный напиток с натуральными пробиотиками.',
            keywords: 'комбуча гибискус, напиток комбуча, ферментированный чай, газированная комбуча, полезный напиток',
            shortDescription: [
                'Слегка газированная комбуча с гибискусом и освежающим фруктовым профилем.',
                'Подходит для ежедневного освежения и как более здоровая альтернатива сладким напиткам.',
                'Заказы отправляем в тот же или на следующий рабочий день.',
            ],
            longDescription: [
                'Комбуча с гибискусом - это безалкогольный ферментированный напиток на основе чая и цветов гибискуса.',
                'Мы сохраняем мягкую кислотность, свежий аромат и натуральные пробиотические культуры, чтобы напиток приятно вписывался в повседневный режим.',
                'Каждая бутылка готовится из отобранных ингредиентов и проходит контролируемую ферментацию для стабильного вкуса.',
            ],
        },
        gallery: [
            '/images/products/kombuha-05l-hibiskus.webp',
            '/images/gallery/kombuha_hibiskus_2.jpg',
            '/images/gallery/kombuha_hibiskus_3.jpg',
            '/images/gallery/kombuha_hibiskus_4.jpg',
            '/images/gallery/kombuha_hibiskus_5.jpg',
        ],
        relatedItems: ['scoby'],
        variants: [{ productId: 'hibiscus', price: 650 }],
    },
    cottonCover: {
        sr: {
            seoTitle: 'Pamučna prekrivka za teglu tokom fermentacije - Prodaja',
            description:
                'Pamučna prekrivka za teglu za fermentaciju kombuhe kod kuće. Pamučni poklopac omogućava da vaša kombuha diše, a ne dozvoljava da prašina uđe u teglu.',
            keywords: 'kombuha, scoby, čajna gljiva, fermentisano piće, probiotik, organski napitak',
            shortDescription: [
                'Pamučna prekrivka za teglu je neophodan deo opreme za fermentaciju kombuhe kod kuće.',
                'Pamučna prekrivka omogućava da vaša kombuha diše, a da pritom ne dozvoljava prašini i insektima da uđu u teglu.',
                'Vašu porudžbinu šaljemo istog ili narednog dana. Ako imate bilo kakva pitanja, slobodno nam pišite putem SMS-a, Viber-a ili WhatsApp-a na 063/427-280.',
            ],
            longDescription: [
                'Višekratni 100% pamučni poklopac za teglu tokom fermentacije.',
                'Za tegle od 7.6 cm do 10.1 cm prečnika.',
                'Pamučna tkanina omogućava slobodan protok vazduha tokom fermentacije, dok elastična traka čvrsto prijanja uz rub tegle, sprečavajući ulazak voćnih mušica i prašine. Lako se stavlja i skida. Iz našeg iskustva, bez problema može da se pere u mašini za veš.',
            ],
        },
        en: {
            seoTitle: 'Cotton Jar Cover for Fermentation - Shop',
            description:
                'Cotton jar cover for kombucha fermentation. Lets the brew breathe while protecting it from dust and insects.',
            keywords: 'kombucha cover, cotton jar cover, fermentation cloth cover, kombucha equipment',
            shortDescription: [
                'A practical piece of equipment for safer kombucha fermentation at home.',
                'It allows airflow while keeping dust and insects away from the jar.',
                'Orders are shipped the same day or the next business day.',
            ],
            longDescription: [
                'This reusable 100% cotton cover fits jars with a diameter between 7.6 cm and 10.1 cm.',
                'The elastic band keeps it secure on the rim while the cotton fabric allows free airflow during fermentation.',
                'It is easy to put on, remove and wash, making it practical for regular home use.',
            ],
        },
        ru: {
            seoTitle: 'Хлопковая крышка для банки во время ферментации - Магазин',
            description:
                'Хлопковая крышка для банки при ферментации комбучи. Пропускает воздух и защищает напиток от пыли и насекомых.',
            keywords:
                'крышка для комбучи, хлопковая крышка для банки, аксессуары для ферментации, оборудование для комбучи',
            shortDescription: [
                'Практичный аксессуар для более безопасной ферментации комбучи дома.',
                'Позволяет напитку дышать и одновременно защищает банку от пыли и насекомых.',
                'Заказы отправляем в тот же или на следующий рабочий день.',
            ],
            longDescription: [
                'Многоразовая 100% хлопковая крышка подходит для банок диаметром от 7.6 см до 10.1 см.',
                'Эластичная лента надежно фиксирует крышку на краю банки, а ткань обеспечивает свободный доступ воздуха во время ферментации.',
                'Ее легко надевать, снимать и стирать, поэтому она удобна для регулярного домашнего использования.',
            ],
        },
        gallery: [
            '/images/products/pamucna-prekrivka-za-teglu-tokom-fermentacije.webp',
            '/images/gallery/prekrivka_za_fermentaciju_2.webp',
            '/images/products/3kom-pamucne-prekrivke-za-teglu.webp',
            '/images/products/5kom-pamucnih-prekrivki-za-teglu.webp',
        ],
        relatedItems: ['scoby', 'thermometer', 'hibiscus'],
        variants: [
            { productId: 'cottonCover', price: 250 },
            { productId: 'cottonCover3Pack', price: 600, procentageDiscount: 20 },
            { productId: 'cottonCover5Pack', price: 950, procentageDiscount: 24 },
        ],
    },
    thermometer: {
        sr: {
            seoTitle: 'Termometar za fermentaciju - Prodaja',
            description:
                'Samolepljivi termometar za fermentaciju kombuhe kod kuće. Jednostavno se postavlja na teglu i omogućava Vam da pratite temperaturu fermentacije.',
            keywords:
                'samolepljivi termometar, termometar za fermentaciju, termometar za teglu, termometar za kombuhu, termometar traka',
            shortDescription: [
                'Ovaj samolepljivi termometar sadrži tečne kristale i pomaže da osigurate da vaša fermentacija ostane između 22 i 28 stepeni.',
                'Vašu porudžbinu šaljemo istog ili narednog dana. Ako imate bilo kakva pitanja, slobodno nam pišite putem SMS-a, Viber-a ili WhatsApp-a na 063/427-280.',
            ],
            longDescription: [
                'Termometar se lepi za stranu tegle i prikazuje temperaturu fermentacije.',
                'Podeok za temperaturu postaje zelen kako bi ukazao na tačnu temperaturu (plava znači nešto nižu, a braon nešto višu od prikazane vrednosti).',
                'Možete ga ukloniti po potrebi ili ostaviti na posudi godinama za kontinuirano merenje temperature. Iz našeg iskustva ostaje pričvršćen i tokom pranja tegle.',
            ],
        },
        en: {
            seoTitle: 'Fermentation Thermometer - Shop',
            description:
                'Self-adhesive thermometer for kombucha fermentation at home. Easy to place on a jar and useful for tracking fermentation temperature.',
            keywords: 'fermentation thermometer, jar thermometer, kombucha thermometer, adhesive strip thermometer',
            shortDescription: [
                'A self-adhesive thermometer that attaches to the side of your vessel and shows fermentation temperature with one-degree accuracy.',
                'It helps you keep the brew inside the recommended temperature range.',
                'Orders are shipped the same day or the next business day.',
            ],
            longDescription: [
                'The thermometer uses liquid crystals for a fast and clear reading on the outside of the vessel.',
                'The scale turns green for the exact temperature, while blue and brown indicate slightly lower or higher values.',
                'You can leave it on the jar long term or move it to another vessel when needed.',
            ],
        },
        ru: {
            seoTitle: 'Термометр для ферментации - Магазин',
            description:
                'Самоклеящийся термометр для ферментации комбучи дома. Легко крепится на банку и помогает контролировать температуру.',
            keywords: 'термометр для ферментации, термометр для банки, термометр для комбучи, самоклеящийся термометр',
            shortDescription: [
                'Самоклеящийся термометр крепится на емкость и показывает температуру ферментации с точностью до одного градуса.',
                'Помогает держать напиток в рекомендуемом температурном диапазоне.',
                'Заказы отправляем в тот же или на следующий рабочий день.',
            ],
            longDescription: [
                'Термометр использует жидкие кристаллы для быстрого и понятного считывания температуры снаружи емкости.',
                'Шкала становится зеленой при точном значении, а синий и коричневый оттенки указывают на немного более низкую или высокую температуру.',
                'Его можно оставить на банке надолго или перенести на другую емкость при необходимости.',
            ],
        },
        gallery: [
            '/images/products/termometar-za-fermentaciju.webp',
            '/images/gallery/termometar_za_fermentaciju_2.webp',
            '/images/products/3kom-termometar-za-fermentaciju.webp',
            '/images/products/5kom-termometar-za-fermentaciju.webp',
        ],
        relatedItems: ['scoby', 'cottonCover', 'hibiscus'],
        variants: [
            { productId: 'thermometer', price: 200 },
            { productId: 'thermometer3Pack', price: 500, procentageDiscount: 17 },
            { productId: 'thermometer5Pack', price: 800, procentageDiscount: 20 },
        ],
    },
    phStrips: {
        sr: {
            seoTitle: 'Lakmus papir za merenje pH vrednosti fermentacije - Prodaja',
            description:
                'Prodaja lakmus papira za merenje pH vrednosti fermentacije kod kuće. Lakmus papir za merenje kiselosti i baznosti kombuhe po najboljoj ceni u Srbiji.',
            keywords:
                'lakmus papir, lakmus hartija, merenje ph vrednosti, ph vrednost kombuhe, ph fermentacije kod kuce, kako meriti ph vrednost, lakmus papir srbija',
            shortDescription: [
                'Uz kupovinu dobijate lakmus papir za merenje pH vrednosti tokom fermentacije kombuhe.',
                'Lakmus papir je jednostavan za upotrebu i pomaže vam da brzo proverite kiselost fermentacije.',
                'Vašu porudžbinu šaljemo istog ili narednog dana.',
                'Nadamo se da će vam ovaj alat biti koristan u pripremi kombuhe! Ako imate bilo kakva pitanja, slobodno nam pišite putem SMS-a, Viber-a ili WhatsApp-a na 063/427-280.',
            ],
            longDescription: [
                'Lakmus papir za merenje pH vrednosti pomaže vam da pratite kiselost fermentacije kombuhe kod kuće.',
                'Jednostavan je za upotrebu i koristan i početnicima i iskusnijim ljubiteljima fermentacije koji žele dodatnu kontrolu tokom procesa.',
            ],
        },
        en: {
            seoTitle: 'pH Test Strips for Fermentation - Shop',
            description:
                'pH test strips for checking kombucha fermentation at home. A simple way to monitor acidity during the process.',
            keywords: 'ph test strips, kombucha ph, fermentation acidity, home fermentation tools',
            shortDescription: [
                'pH strips help you quickly check the acidity of your fermentation at home.',
                'Useful when you want extra control over the safety and stability of a batch.',
                'Orders are shipped the same day or the next business day.',
            ],
            longDescription: [
                'These pH strips are a simple tool for checking acidity during kombucha fermentation.',
                'A small liquid sample is enough to get a quick reading and verify that the batch is moving in the expected direction.',
                'They are useful for beginners who want more confidence and for experienced brewers who monitor process consistency.',
            ],
        },
        ru: {
            seoTitle: 'Лакмусовая бумага для измерения pH ферментации - Магазин',
            description:
                'Лакмусовая бумага для проверки pH ферментации комбучи дома. Простой способ контролировать кислотность напитка.',
            keywords: 'лакмусовая бумага, pH комбучи, кислотность ферментации, инструменты для домашней ферментации',
            shortDescription: [
                'Лакмусовые полоски помогают быстро проверить кислотность ферментации дома.',
                'Полезны, когда нужен дополнительный контроль безопасности и стабильности партии.',
                'Заказы отправляем в тот же или на следующий рабочий день.',
            ],
            longDescription: [
                'Эти pH-полоски - простой инструмент для контроля кислотности во время ферментации комбучи.',
                'Небольшого образца жидкости достаточно, чтобы быстро понять, идет ли процесс в ожидаемом направлении.',
                'Они особенно полезны новичкам, которым нужна дополнительная уверенность, и тем, кто следит за стабильностью процесса.',
            ],
        },
        gallery: ['/images/products/lakmus-papir-za-merenje-ph-fermentacije.webp'],
        relatedItems: ['cottonCover', 'thermometer', 'hibiscus'],
        variants: [{ productId: 'phStrips', price: 950 }],
    },
};

function getLocaleContent(localizedContent, locale) {
    const normalizedLocale = normalizeLocale(locale);

    return localizedContent[normalizedLocale] || localizedContent[defaultLocale];
}

export function getProductPageContent(productId, locale) {
    const content = productContent[productId];

    if (!content) {
        return null;
    }

    return {
        ...getLocaleContent(content, locale),
        gallery: content.gallery,
        relatedItems: content.relatedItems,
        variants: content.variants,
    };
}
