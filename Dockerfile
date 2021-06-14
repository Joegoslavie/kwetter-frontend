### STAGE 1: Build ###
#FROM node:12.7-alpine AS builder
#WORKDIR /usr/src/app
#COPY package.json package-lock.json ./
#RUN npm install
#COPY . .
#RUN npm run build

### STAGE 2: Run ###
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=0 /dist/CATicketSystem /usr/share/nginx/html



### STAGE 1: Build ###
# Name the node stage "builder"
#FROM node:10 AS builder
# Set working directory
#WORKDIR /app
# Copy all files from current directory to working dir in image
#COPY . .
# install node modules and build assets
#RUN npm i && npm run build

### STAGE 2: Run ###
# nginx state for serving content
#FROM nginx:alpine
# Set working directory to nginx asset directory
#WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
#RUN rm -rf ./*
# Copy static assets from builder stage
#COPY --from=builder /app/dist/angular-nginx-docker .    
#COPY --from=builder /usr/share/nginx/html/ .
# Containers run nginx with global directives and daemon off
#ENTRYPOINT ["nginx", "-g", "daemon off;"]

# old not working stuff above

# used resources to make this frankenstein code chunck work
# https://wkrzywiec.medium.com/build-and-run-angular-application-in-a-docker-container-b65dbbc50be8
# https://typeofnan.dev/how-to-serve-an-angular-app-with-nginx-in-docker/
# https://hub.docker.com/_/nginx
# https://tiangolo.medium.com/angular-in-docker-with-nginx-supporting-environments-built-with-multi-stage-docker-builds-bb9f1724e984

# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf