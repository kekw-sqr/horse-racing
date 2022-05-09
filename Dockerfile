FROM node:16 AS build-stage

ARG NODE_ENV=development
ENV NODE_ENV ${NODE_ENV}

RUN echo "building for ${NODE_ENV}"

WORKDIR /app
COPY yarn.lock .
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.17-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
