import boto3
import random
import os
import json
from datetime import datetime
import pytz
from utils import create_response, admin_email, map_country_code_to_name, get_link_from_name

sns_client = boto3.client("sns")
dynamodb_client = boto3.resource("dynamodb")
orders_table = dynamodb_client.Table(os.environ["ORDERS_TABLE"])
BASIC_EMAIL_TOPIC = os.environ["BASIC_EMAIL_TOPIC"]
TEMPLATE_EMAIL_TOPIC = os.environ["TEMPLATE_EMAIL_TOPIC"]


def lambda_handler(event, context):
    body = json.loads(event["body"])
    
    required_fields = ['fullName', 'email', 'phone', 'address', 'city', 'postalCode', 'country', 'note', 'products']
    missing_fields = [field for field in required_fields if field not in body]
    if missing_fields:
        return create_response(400, {'error': 'Missing required fields'})

    order_id = generate_order_number(prefix="SHOP")

    send_email(order_id, body['fullName'], body['email'], body['phone'], body['address'], body['city'], body['postalCode'], body['country'], body['note'], body['products'])
    send_template_email(order_id, body['fullName'], body['email'], body['phone'], body['address'], body['city'], body['postalCode'], body['country'], body['note'], body['products'])
    
    orders_table.put_item(Item={
        'id': order_id,
        'fullName': body['fullName'],
        'email': body['email'],
        'phone': body['phone'],
        'address': body['address'],
        'city': body['city'],
        'postalCode': body['postalCode'],
        'country': body['country'],
        'note': body['note'],
        'products': body['products'],
        'createdAt': datetime.now(pytz.timezone('Europe/Belgrade')).isoformat(),
        'status': 'U obradi'
    })

    return create_response(200, {'id': order_id})

def generate_order_number(prefix="ORD"):
    """
    Generates a user-friendly, unique order number.
    Format: PREFIX-YYYYMMDD-XXXXX
    Example: ORD-20241102-8F3K2
    
    Args:
        prefix (str): Optional prefix for the order number. Defaults to "ORD"
    
    Returns:
        str: A formatted order number
    """
    # Get current date in YYYYMMDD format
    date_str = datetime.now().strftime("%Y%m%d")
    
    # Generate a random 5-character string using numbers and uppercase letters
    # Exclude similar-looking characters (0, O, 1, I, L)
    chars = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'
    random_str = ''.join(random.choices(chars, k=5))
    
    # Combine all parts with hyphens
    order_number = f"{prefix}-{date_str}-{random_str}"
    
    return order_number   


def send_email(order_id, user_name, user_email, user_phone, user_address, user_city, user_postal_code, user_country, user_note, user_products):
    order = ''
    total_price = 0
    currency = 'RSD'
    for product in user_products:
        order += f'{product["name"]} - {product["quantity"]}kom\n'
        total_price += product['price'] * product['quantity']
    sns_client.publish(
        TopicArn=BASIC_EMAIL_TOPIC,
        Message=json.dumps(
            {
                "event": "new_order",
                "recipient": admin_email,
                "subject": f'Nova Porudžbina - {order_id}',
                "content": f'Porudžbina preko bucha.rs\n\nIme: {user_name}\nAdresa: {user_address}\nGrad: {user_city}\nPoštanski broj: {user_postal_code}\nDržava: {user_country}\nTelefon: {user_phone}\nE-mail: {user_email}\nNapomena: {user_note}\n\n Porudžbina:\n\n {order} \n Ukupna cena porudžbine: {total_price}{currency}\n'
            }
        ),
    )
    

def send_template_email(order_id, user_name, user_email, user_phone, user_address, user_city, user_postal_code, user_country, user_note, user_products):
    belgrade_tz = pytz.timezone('Europe/Belgrade')
    current_date = datetime.now(belgrade_tz)
    formatted_date = current_date.strftime("%d.%m.%Y")
    currency = 'RSD'
    total_price = 0
    order_link = f'https://www.bucha.rs/hvala/{order_id}'
    products = ''
    for product in user_products:
        products += '<tr><td width=\"70\"><img src=\"https://static-resources-buchars.s3.eu-central-1.amazonaws.com/{0}.webp\" width=\"70\" height=\"70\" alt=\"{1}\" style=\"border-radius: 6px; display: block;\" /></td><td width=\"16\" style=\"font-size: 1px;\">&nbsp;</td><td style=\"font-family: Arial, sans-serif; vertical-align: top; padding-top: 8px;\"><p style=\"margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: #213343;\">{1}</p><p style=\"margin: 0; font-size: 14px; color: #213343;\">{2}</p></td><td style=\"font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; color: #213343; text-align: right; vertical-align: top; padding-top: 8px;\">{3}{4}</td></tr>'.format(get_link_from_name(product['name']), product['name'], product['quantity'], product['price'], currency)
        total_price += product['price'] * product['quantity']
    data = json.dumps({'orderDate': formatted_date, 'orderId': order_id, 'userName': user_name, 'userEmail': user_email, 'userPhone': user_phone, 'userAddress': user_address, 'userCity': user_city, 'userPostalCode': user_postal_code, 'userCountry': map_country_code_to_name(user_country), 'userNote': user_note, 'totalPrice': total_price, 'currency': currency, 'products': products, 'orderLink': order_link })
    sns_client.publish(
        TopicArn=TEMPLATE_EMAIL_TOPIC,
        Message=json.dumps({
            "event": "new_order",
            "recipient": user_email,
            "template_name": "BuchaOrderConfirmation",
            "data_to_replace": data
        }),
    )