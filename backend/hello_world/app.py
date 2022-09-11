import json
import os
import logging
import boto3
from botocore.exceptions import ClientError

# Handle logger
logger = logging.getLogger()
logger.setLevel(logging.os.environ['LOG_LEVEL'])

dynamodb = boto3.resource('dynamodb')
aws_environment = os.environ['AWSENV']

logger.info("Finished handling variables, imports, and clients")

# Check if executing locally or on AWS, and configure DynamoDB connection accordingly.
# https://github.com/ganshan/sam-dynamodb-local/blob/master/src/Person.py
if aws_environment == "AWS_SAM_LOCAL":
    table = boto3.resource('dynamodb', endpoint_url="http://dynamodb-local:8000").Table('emailSubscribers') #Local table name hard coded in entrypoint.sh for local dev
    logger.info("Using local Dynamo container for testing")
else: # Running in AWS
    table = dynamodb.Table(os.environ['TABLE_NAME'])

logger.info("Finished conditional dynamodb logic")

def returnError():
    logger.error('Returning 500 status code')
    return {
            "statusCode": 500,
            'headers': {
                'Access-Control-Allow-Origin': os.environ['CORS_URL'],
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Authorization',
                'Content-Type': 'application/json'
            }
        }

def get_child_from_apg_event(event, item, mandatory): 
    try:
        passed_value = json.loads(event['body'])[item]
        return passed_value
    except (KeyError, TypeError, json.decoder.JSONDecodeError) as e:
        if(mandatory):
            logger.error(f"No value for: {item}")
            raise 'Required filed missing!'

def addContactInfo(email, location, vendor):
    try:
        logger.info("Updating DDB with new subscriber")
        table.put_item(
            Item={
                'Email': email,
                'Location': location,
                'Vendor': vendor,
            }
        )
        return True

    #Catch known errors
    #ToDo: Add more handling here
    except ClientError as e:
        if e.response['Error']['Code'] == 'RequestLimitExceeded':
            logger.error('ERROR: ', e)
        else:
            logger.error("UNEXPECTED ERROR from DDB: %s" % e)

def lambda_handler(event, context):

    logger.info("Lambda handler invocation initiated")

    email = get_child_from_apg_event(event, 'email', True)
    logger.info(email)
    location = get_child_from_apg_event(event, 'location', False)
    vendor = get_child_from_apg_event(event, 'vendor', True)

    addSuccess = addContactInfo(email, location, vendor)
    if  ( not addSuccess):
        logger.error("Something went wrong adding the contact info to the DB")
        return {
            "statusCode": 500,
            'headers': {
                'Access-Control-Allow-Origin': os.environ['CORS_URL'],
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Authorization',
                'Content-Type': 'application/json'
            }
        }

    logger.info('Function completed successfully, returning 200')
    return {
        "statusCode": 200,
        'headers': {
            'Access-Control-Allow-Origin': os.environ['CORS_URL'],
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Authorization',
            'Content-Type': 'application/json'
        },
        "body": {
            "added": addSuccess
        }
    }
