FROM node:20.15.1-alpine3.20

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --only=production --forzen-lockfile

COPY api ./api
COPY app.js .
COPY index.js .
COPY middlewares ./middlewares
COPY utils ./utils
COPY controllers ./controllers
COPY services ./services

ENV JWT_SECRET=your_secret_key
ENV JWT_EXPIRES_IN=1d

RUN adduser -D nodeRunner
USER nodeRunner

EXPOSE 8080
CMD ["npm", "start"]
