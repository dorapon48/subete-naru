FROM node:18-slim

EXPOSE 3000

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY ./package.json /usr/src/app

RUN npm install

CMD ["npm", "start"]