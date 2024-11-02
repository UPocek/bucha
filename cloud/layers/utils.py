import json

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

import re

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

def get_link_from_name(product_name):
    return re.sub(r'[^a-z0-9-]', '', 
            str.replace(' ', '-', 
                str.replace('-', '', 
                    str.replace('ć', 'c',
                        str.replace('č', 'c',
                            str.replace('đ', 'd', 
                                str.replace('š', 's', 
                                    str.replace('ž', 'z', product_name.lower()))))))))

