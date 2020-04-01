FROM alpine:3.9

WORKDIR /app

RUN apk add --update nodejs nodejs-npm && \
    npm install -g typescript nodemon

COPY service .

RUN npm install

EXPOSE 9000

CMD [ "nodemon" ]