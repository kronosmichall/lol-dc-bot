#docker build
sudo docker build -t lol-dc-bot .
#docker run
sudo docker run  --env-file .env lol-dc-bot

#docker down
sudo docker ps | tail | cut -d " " -f1
sudo docker stop CONTAINERID

#aws upload
aws ecr get-login-password | sudo docker login --username AWS --password-stdin 058264303178.dkr.ecr.eu-central-1.amazonaws.com
sudo docker tag lol-dc-bot:latest 058264303178.dkr.ecr.eu-central-1.amazonaws.com/lol-dc-bot:latest
sudo docker push 058264303178.dkr.ecr.eu-central-1.amazonaws.com/lol-dc-bot:latest
