ARG NGINX_RELEASE
ARG NODE_RELEASE

FROM node:${NODE_RELEASE:-22} as build
ARG DEBIAN_FRONTEND=noninteractive
USER root

# copy project to workdir
COPY .. /home/node/front
WORKDIR /home/node/front

#install anything you want
#RUN apt-get update -y && apt-get install --no-install-recommends -y \
#   anything-you-want

# build project - create static dist files
RUN yarn
RUN yarn build

# Finally - get only needed files from previous build stage. Static files + config
FROM nginx:${NGINX_RELEASE:-1.27-alpine-slim}

#install nginx modules
#RUN apt-get update -y && apt-get install  --no-install-recommends -y \
#   nginx-plus-module-brotli

COPY --from=build /home/node/front/dist /frontend-dist
COPY --from=build /home/node/front/docker-deploy/nginx/templates /etc/nginx/templates
