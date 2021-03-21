cd /home/ubuntu/sdgpapi
aws s3 cp s3://sdgp-bucket/backend-api/dev/env/.env ./api
mkdir -p ./analytics/
aws s3 sync s3://sdgp-bucket/phone_reviews data/phone_reviews
cp -r /home/ubuntu/data ./analytics
cat ./api/.env

cp ./deploy/systemd/sdgpapp.service /etc/systemd/system/ 
sudo service systemctl daemon-reload
cp ./deploy/nginx/sdgpapp /etc/nginx/sites-enabled
