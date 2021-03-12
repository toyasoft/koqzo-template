FROM node:12
ENV DOCKERIZE_VERSION v0.6.1
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install

COPY . .