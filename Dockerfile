FROM node:15.2.1-alpine3.12
WORKDIR /usr/src/orderia
COPY ./api ./api
COPY ./config ./config
COPY package*.json ./
RUN npm install
CMD ["npm", "run", "production"]
