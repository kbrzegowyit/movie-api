FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]