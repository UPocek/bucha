import json
import re

admin_email = 'tamara@startstudentventures.com'

def create_response(status, body):
    return { 
        'statusCode': status, 
        'headers': {
            'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Origin': '*',
        },
        'body': json.dumps(body, default=str)
        }

def map_country_code_to_name(country_code):
    country_map = {
        'RS': 'Serbia',
        'BA': 'Bosnia and Herzegovina',
        'HR': 'Croatia',
        'ME': 'Montenegro',
        'MK': 'North Macedonia',
        'SI': 'Slovenia'
    }
    return country_map.get(country_code, 'Unknown')

import re

def get_link_from_name(product_name: str) -> str:
    """
    Convert a product name into a URL-friendly slug.
    
    Args:
        product_name (str): The product name to convert
        
    Returns:
        str: URL-friendly slug with special characters removed and spaces replaced with hyphens
        
    Examples:
        >>> get_link_from_name("Hello World!")
        'hello-world'
        >>> get_link_from_name("Čokolada & Keksi")
        'cokolada-keksi'
    """
    # Convert to lowercase
    text = product_name.lower()
    
    # Replace special characters with their ASCII equivalents
    char_map = {
        'ć': 'c',
        'č': 'c',
        'đ': 'd',
        'š': 's',
        'ž': 'z'
    }
    
    for special_char, replacement in char_map.items():
        text = text.replace(special_char, replacement)
    
    # Replace spaces with hyphens and remove non-alphanumeric characters
    text = ' '.join(text.split())  # Normalize spaces
    text = text.replace(' ', '-')  # Replace spaces with hyphens
    text = re.sub(r'[^a-z0-9-]', '', text)  # Remove non-alphanumeric chars except hyphens
    text = re.sub(r'-+', '-', text)  # Replace multiple hyphens with single hyphen
    text = text.strip('-')  # Remove leading/trailing hyphens
    
    return text

