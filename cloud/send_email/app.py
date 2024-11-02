import boto3
import json
from utils import admin_email

ses_client = boto3.client("ses")

def lambda_handler(event, context):
    body = json.loads(event["Records"][0]["Sns"]["Message"])

    sender_email = admin_email
    recipients = ["uros.pocek@gmail.com", "tamarailic11@gmail.com"]
    subject = body["subject"]
    content_body = body["content"]
    response = ses_client.send_email(
        Source=sender_email,
        Destination={"ToAddresses": recipients},
        Message={
            "Subject": {"Data": subject},
            "Body": {"Text": {"Data": content_body}},
        },
    )
