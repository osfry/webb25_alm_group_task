FROM node:26-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8082 

CMD ["npm", "start"]