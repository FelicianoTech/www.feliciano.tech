FROM nginx:1.25.4-bookworm

COPY src/public /usr/share/nginx/html
