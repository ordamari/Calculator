FROM node:20.15.1-alpine3.20

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --only=production --forzen-lockfile

COPY src/api ./src/api
COPY src/app.js ./src
COPY src/index.js ./src
COPY src/middlewares ./src/middlewares
COPY src/utils ./src/utils
COPY src/controllers ./src/controllers
COPY src/services ./src/services

ENV JWT_SECRET=your_secret_key
ENV JWT_EXPIRES_IN=1d

RUN adduser -D nodeRunner
USER nodeRunner

EXPOSE 8080
CMD ["npm", "start"]
