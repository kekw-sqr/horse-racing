FROM node:16-alpine AS build-stage

ARG NODE_ENV=development
ENV NODE_ENV ${NODE_ENV}

RUN echo "building for ${NODE_ENV}"

WORKDIR /app
COPY yarn.lock .
COPY package.json .
RUN yarn install --network-timeout 1000000000
COPY . .
RUN yarn build

FROM nginx:1.17-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
