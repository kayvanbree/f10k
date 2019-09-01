FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY dist /usr/share/nginx/html

RUN chmod -R 755 /var/www/html/public

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
