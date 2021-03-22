cd /home/ubuntu/sdgpapi
aws s3 cp s3://sdgp-bucket/backend-api/dev/env/.env ./api/.env
mkdir -p ./analytics/data
aws s3 cp s3://sdgp-bucket/data ./analytics/data --recursive
# aws s3 sync s3://sdgp-bucket/data/ ./analytics/data
# cp -r /home/ubuntu/data ./analytics

sudo cp ./deploy/systemd/sdgpapp.service /etc/systemd/system/ 
# sudo cp ./deploy/nginx/sdgpapp /etc/nginx/sites-available
# sudo ln -sfn /etc/nginx/sites-available/sdgpapp /etc/nginx/sites-enabled/
sudo systemctl daemon-reload
sudo chown ubuntu:ubuntu /home/ubuntu/sdgpapi
sudo chown ubuntu:ubuntu /home/ubuntu/sdgpapi/analytics/data
