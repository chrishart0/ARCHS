aws dynamodb --region us-east-1 --endpoint-url http://dynamodb-local:8000 create-table --table-name emailSubscribers \
    --attribute-definitions AttributeName=Email,AttributeType=S --key-schema AttributeName=Email,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST

make _run-backend