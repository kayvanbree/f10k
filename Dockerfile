FROM nginx:alpine

ADD https://github.com/kyubisation/angular-server-side-configuration/releases/download/v8.0.0/ngssc_64bit /usr/sbin/ngssc
RUN chmod +x /usr/sbin/ngssc

COPY start.sh start.sh
RUN chmod +x ./start.sh

RUN rm -rf /usr/share/nginx/html/*
COPY dist/f10k /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["./start.sh"]
