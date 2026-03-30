import json

admin_email = 'tamara@startstudentventures.com'

SUPPORTED_LOCALES = {'sr', 'en', 'ru'}
DEFAULT_LOCALE = 'sr'
STATUS_PROCESSING = 'processing'

PRODUCTS = {
    'scoby': {
        'image_slug': 'kombuha-scoby-cajna-gljiva',
        'fallback_name': 'Kombuha SCOBY čajna gljiva',
        'names': {
            'sr': 'Kombuha SCOBY čajna gljiva',
            'en': 'Kombucha SCOBY tea mushroom',
            'ru': 'Чайный гриб SCOBY для комбучи',
        },
    },
    'hibiscus': {
        'image_slug': 'kombuha-05l-hibiskus',
        'fallback_name': 'Kombuha 0.5l - Hibiskus',
        'names': {
            'sr': 'Kombuha 0.5l - Hibiskus',
            'en': 'Kombucha 0.5l - Hibiscus',
            'ru': 'Комбуча 0.5л - Гибискус',
        },
    },
    'cottonCover': {
        'image_slug': 'pamucna-prekrivka-za-teglu-tokom-fermentacije',
        'fallback_name': 'Pamučna prekrivka za teglu tokom fermentacije',
        'names': {
            'sr': 'Pamučna prekrivka za teglu tokom fermentacije',
            'en': 'Cotton jar cover for fermentation',
            'ru': 'Хлопковая крышка для банки во время ферментации',
        },
    },
    'cottonCover3Pack': {
        'image_slug': '3kom-pamucne-prekrivke-za-teglu',
        'fallback_name': '3kom pamučne prekrivke za teglu',
        'names': {
            'sr': '3kom pamučne prekrivke za teglu',
            'en': '3 cotton jar covers',
            'ru': '3 хлопковые крышки для банки',
        },
    },
    'cottonCover5Pack': {
        'image_slug': '5kom-pamucnih-prekrivki-za-teglu',
        'fallback_name': '5kom pamučnih prekrivki za teglu',
        'names': {
            'sr': '5kom pamučnih prekrivki za teglu',
            'en': '5 cotton jar covers',
            'ru': '5 хлопковых крышек для банки',
        },
    },
    'thermometer': {
        'image_slug': 'termometar-za-fermentaciju',
        'fallback_name': 'Termometar za fermentaciju',
        'names': {
            'sr': 'Termometar za fermentaciju',
            'en': 'Fermentation thermometer',
            'ru': 'Термометр для ферментации',
        },
    },
    'thermometer3Pack': {
        'image_slug': '3kom-termometar-za-fermentaciju',
        'fallback_name': '3kom termometar za fermentaciju',
        'names': {
            'sr': '3kom termometar za fermentaciju',
            'en': '3 fermentation thermometers',
            'ru': '3 термометра для ферментации',
        },
    },
    'thermometer5Pack': {
        'image_slug': '5kom-termometar-za-fermentaciju',
        'fallback_name': '5kom termometar za fermentaciju',
        'names': {
            'sr': '5kom termometar za fermentaciju',
            'en': '5 fermentation thermometers',
            'ru': '5 термометров для ферментации',
        },
    },
    'phStrips': {
        'image_slug': 'lakmus-papir-za-merenje-ph-fermentacije',
        'fallback_name': 'Lakmus papir za merenje PH fermentacije',
        'names': {
            'sr': 'Lakmus papir za merenje PH fermentacije',
            'en': 'pH test strips for fermentation',
            'ru': 'Лакмусовая бумага для измерения pH ферментации',
        },
    },
}

COUNTRY_NAMES = {
    'sr': {
        'RS': 'Srbija',
        'BA': 'Bosna i Hercegovina',
        'HR': 'Hrvatska',
        'ME': 'Crna Gora',
        'MK': 'Makedonija',
        'SI': 'Slovenija',
    },
    'en': {
        'RS': 'Serbia',
        'BA': 'Bosnia and Herzegovina',
        'HR': 'Croatia',
        'ME': 'Montenegro',
        'MK': 'North Macedonia',
        'SI': 'Slovenia',
    },
    'ru': {
        'RS': 'Сербия',
        'BA': 'Босния и Герцеговина',
        'HR': 'Хорватия',
        'ME': 'Черногория',
        'MK': 'Северная Македония',
        'SI': 'Словения',
    },
}

EMAIL_COPY = {
    'sr': {
        'subject': 'Vaša bucha.rs porudžbina {order_id} je uspešno primljena',
        'html_lang': 'sr',
        'title': 'Potvrda porudžbine',
        'heading': 'Potvrda porudžbine',
        'success_message': 'Vaša porudžbina je uspešno kreirana!',
        'name_label': 'Ime',
        'email_label': 'Email',
        'phone_label': 'Broj telefona',
        'address_label': 'Adresa',
        'note_label': 'Napomena',
        'order_link_label': 'Pratite porudžbinu putem linka',
        'total_label': 'Ukupno',
        'quantity_suffix': 'kom',
        'footer': 'Kombuha avantura počinje',
        'text_part': 'Vaša porudžbina je uspešno primljena. Hvala na interesovanju za bucha.rs!',
    },
    'en': {
        'subject': 'Your bucha.rs order {order_id} has been received',
        'html_lang': 'en',
        'title': 'Order confirmation',
        'heading': 'Order confirmation',
        'success_message': 'Your order has been created successfully!',
        'name_label': 'Name',
        'email_label': 'Email',
        'phone_label': 'Phone number',
        'address_label': 'Address',
        'note_label': 'Note',
        'order_link_label': 'Track your order using this link',
        'total_label': 'Total',
        'quantity_suffix': 'pcs',
        'footer': 'Your kombucha journey starts now',
        'text_part': 'Your order has been received successfully. Thank you for choosing bucha.rs!',
    },
    'ru': {
        'subject': 'Ваш заказ на bucha.rs {order_id} успешно получен',
        'html_lang': 'ru',
        'title': 'Подтверждение заказа',
        'heading': 'Подтверждение заказа',
        'success_message': 'Ваш заказ успешно создан!',
        'name_label': 'Имя',
        'email_label': 'Email',
        'phone_label': 'Телефон',
        'address_label': 'Адрес',
        'note_label': 'Комментарий',
        'order_link_label': 'Отслеживайте заказ по ссылке',
        'total_label': 'Итого',
        'quantity_suffix': 'шт',
        'footer': 'Приключение с комбучей начинается',
        'text_part': 'Ваш заказ успешно получен. Спасибо, что выбрали bucha.rs!',
    },
}


def create_response(status, body):
    return {
        'statusCode': status,
        'headers': {
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Origin': '*',
        },
        'body': json.dumps(body, default=str),
    }


def normalize_locale(locale):
    if locale in SUPPORTED_LOCALES:
        return locale
    return DEFAULT_LOCALE


def map_country_code_to_name(country_code, locale=DEFAULT_LOCALE):
    normalized_locale = normalize_locale(locale)
    localized_countries = COUNTRY_NAMES.get(normalized_locale, COUNTRY_NAMES[DEFAULT_LOCALE])
    return localized_countries.get(country_code, '')


def coerce_int(value, default):
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


def resolve_product_id(product):
    product_id = product.get('productId')

    if product_id in PRODUCTS:
        return product_id

    fallback_name = product.get('fallbackName') or product.get('name')

    for candidate_id, product_details in PRODUCTS.items():
        if fallback_name == product_details['fallback_name']:
            return candidate_id

    return product_id or None


def normalize_order_product(product):
    if not isinstance(product, dict):
        return None

    product_id = resolve_product_id(product)
    product_details = PRODUCTS.get(product_id)
    fallback_name = product.get('fallbackName') or product.get('name')

    if not fallback_name and product_details:
        fallback_name = product_details['fallback_name']

    return {
        'productId': product_id,
        'fallbackName': fallback_name or '',
        'name': product.get('name') or fallback_name or '',
        'quantity': max(1, coerce_int(product.get('quantity'), 1)),
        'price': max(0, coerce_int(product.get('price'), 0)),
    }


def get_product_details(product):
    product_id = resolve_product_id(product)
    product_details = PRODUCTS.get(product_id)

    if product_details:
        return product_details

    fallback_name = product.get('fallbackName') or product.get('name') or ''

    return {
        'image_slug': 'favicon',
        'fallback_name': fallback_name,
        'names': {
            'sr': fallback_name,
            'en': fallback_name,
            'ru': fallback_name,
        },
    }


def get_product_name(product, locale=DEFAULT_LOCALE):
    product_details = get_product_details(product)
    normalized_locale = normalize_locale(locale)
    return product_details['names'].get(normalized_locale) or product_details['fallback_name']


def get_product_image_slug(product):
    product_details = get_product_details(product)
    return product_details.get('image_slug') or 'favicon'


def get_order_link(order_id, locale=DEFAULT_LOCALE):
    normalized_locale = normalize_locale(locale)
    if normalized_locale == DEFAULT_LOCALE:
        return f'https://www.bucha.rs/hvala/{order_id}'
    return f'https://www.bucha.rs/{normalized_locale}/hvala/{order_id}'


def get_customer_email_copy(locale=DEFAULT_LOCALE):
    return EMAIL_COPY[normalize_locale(locale)]

