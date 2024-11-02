import boto3
import os
from utils import create_response

dynamodb_client = boto3.resource("dynamodb")
orders_table = dynamodb_client.Table(os.environ["ORDERS_TABLE"])

def lambda_handler(event, context):
    order_id = event['pathParameters'].get('id')
    if not order_id:
        return create_response(400, {'message': 'Missing order id'})

    order = orders_table.get_item(Key={'id': order_id})['Item']

    return create_response(200, order)

