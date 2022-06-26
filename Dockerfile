# runs a built version of the application
FROM node:16-alpine AS dev
ENV NODE_ENV dev

WORKDIR /app

COPY . .
EXPOSE 3000

RUN npm install --location=global serve
RUN yarn install && yarn build

CMD [ "serve", "-s", "build"]