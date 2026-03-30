from pathlib import Path
import sys


sys.path.insert(0, str(Path(__file__).resolve().parents[2] / 'layers'))

import utils


def test_normalize_order_product_resolves_known_product_from_legacy_name():
    normalized = utils.normalize_order_product(
        {
            'name': 'Kombuha 0.5l - Hibiskus',
            'quantity': '2',
            'price': '650',
        }
    )

    assert normalized == {
        'productId': 'hibiscus',
        'fallbackName': 'Kombuha 0.5l - Hibiskus',
        'name': 'Kombuha 0.5l - Hibiskus',
        'quantity': 2,
        'price': 650,
    }
    assert utils.get_product_name(normalized, 'en') == 'Kombucha 0.5l - Hibiscus'
    assert utils.get_product_image_slug(normalized) == 'kombuha-05l-hibiskus'


def test_normalize_order_product_preserves_unknown_fallback_data():
    normalized = utils.normalize_order_product(
        {
            'name': 'Starter kit',
            'quantity': 0,
            'price': -20,
        }
    )

    assert normalized == {
        'productId': None,
        'fallbackName': 'Starter kit',
        'name': 'Starter kit',
        'quantity': 1,
        'price': 0,
    }
    assert utils.get_product_name(normalized, 'ru') == 'Starter kit'
    assert utils.get_product_image_slug(normalized) == 'favicon'