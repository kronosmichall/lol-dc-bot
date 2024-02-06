FROM node:lts
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node", "deploy.js"]
CMD ["node", "index.js"]
