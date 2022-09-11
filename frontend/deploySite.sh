#!/bin/bash
#https://simpleit.rocks/ruby/jekyll/tutorials/having-pretty-urls-in-a-jekyll-website-hosted-in-amazon-s3/
profile=$1
bucket_name=$(jq -r '.[].Bucket' ./infrastructure/cdk-outputs.json) 
distribution_id=$(jq -r '.[].DistributionId' ./infrastructure/cdk-outputs.json) 

echo "Emptying bucket"
echo "aws s3 rm --recursive s3://$bucket_name $profile "
aws s3 rm --recursive s3://$bucket_name $profile 

echo "Copying files to server..."
aws s3 sync ./frontend/out/ s3://$bucket_name  --size-only --exclude "*" --include "*.*" --cache-control max-age=31536000,public $profile 

echo "Copying files with content type..."
aws s3 sync ./frontend/out/ s3://$bucket_name --size-only --content-type text/html --include "*" --exclude "*.*" --cache-control max-age=31536000,public $profile 

echo "Invalidating Cache"
aws cloudfront create-invalidation --distribution-id $distribution_id --paths '/*' $profile 