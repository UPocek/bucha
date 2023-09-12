import boto3
import os
import json
import uuid

sns_client = boto3.client("sns")
dynamodb_client = boto3.resource("dynamodb")
orders_table = dynamodb_client.Table(os.environ["ORDER_TABLE"])
new_order_topic = os.environ["ORDERS_TOPIC"]


def lambda_handler(event, context):
    body = json.loads(event["body"])

    if (
        body.get("fullName") is None
        or body.get("email") is None
        or body.get("phone") is None
        or body.get("city") is None
        or body.get("address") is None
        or body.get("count") is None
        or body.get("product") is None
    ):
        return bad_request("Missing required parameters")

    save_order(body)
    send_email(body)

    return successfull(f"Order with id={body['id']} processed sucessfully")


def save_order(order):
    order["id"] = str(uuid.uuid4())
    order["status"] = "U obradi"
    orders_table.put_item(Item=order)


def send_email(order):
    sns_client.publish(
        TopicArn=new_order_topic,
        Message=json.dumps(
            {
                "event": "order",
                "subject": "Nova porudžbina za bucha.rs",
                "content": f"Korisnik {order['fullName']}\nEmail: {order['email']}\nBroj telefona: {order['phone']}\nAdresa: {order['address']}, {order['city']}\n\nJe poručio {order['count']}x {order['product']}",
            }
        ),
    )


def bad_request(message):
    return {
        "statusCode": 400,
        "headers": {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
        },
        "body": json.dumps({"message": message}),
    }


def successfull(response):
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
        },
        "body": response,
    }
