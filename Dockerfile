FROM node:alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.20.1-alpine as prod

COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx","-g"]