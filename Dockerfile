FROM nginx:alpine-slim

COPY src/public /usr/share/nginx/html
