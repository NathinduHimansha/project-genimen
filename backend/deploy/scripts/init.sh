cd /home/ubuntu/sdgpapi
aws s3 cp s3://sdgp-bucket/backend-api/dev/env/.env ./api
mkdir -p ./analytics/
aws s3 sync s3://sdgp-bucket/phone_reviews data/phone_reviews
sudo cp -r /home/ubuntu/data ./analytics

sudo cp ./deploy/systemd/sdgpapp.service /etc/systemd/system/ 
sudo service systemctl daemon-reload
sudo cp ./deploy/nginx/sdgpapp /etc/nginx/sites-available
sudo ln -s /etc/nginx/sites-available/sdgpapp /etc/nginx/sites-enabled/
sudo chown ubuntu:ubuntu /home/ubuntu/sdgpapi
