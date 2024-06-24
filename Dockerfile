# Usando uma imagem base do Node.js
FROM node:18-alpine

RUN npm i -g @nestjs/cli

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3010

CMD ["npm", "run", "start:prod"]
