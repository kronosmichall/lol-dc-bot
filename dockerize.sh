#!/bin/bash
sudo docker build -t lol-dc-bot .
sudo docker run  --env-file .env lol-dc-bot

# #stopowanie
# sudo docker ps
# sudo docker stop CONTAINERID