# Build step #1: build the React front end
FROM node:lts-alpine as build-step
WORKDIR /app

COPY postcss.config.js ./
COPY tailwind.config.js ./

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json  ./

COPY ./src ./src
COPY ./public ./public
RUN npm install npm -g

RUN npm install
RUN npm i -f npm install @mui/material @mui/styles
RUN npm install -f react-scroll
RUN npm run build

# Build step #2: build an Caddy container
FROM caddy:alpine
EXPOSE 80
EXPOSE 443
COPY --from=build-step /app/build /usr/share/caddy

