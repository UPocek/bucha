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

def get_link_from_name(product_name):
    return re.sub(r'[^a-z0-9-]', '', 
            str.replace(' ', '-', 
                str.replace('-', '', 
                    str.replace('ć', 'c',
                        str.replace('č', 'c',
                            str.replace('đ', 'd', 
                                str.replace('š', 's', 
                                    str.replace('ž', 'z', product_name.lower()))))))))

