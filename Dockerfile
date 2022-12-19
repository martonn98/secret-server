FROM node:18.12.1-alpine

WORKDIR /app

COPY . .

RUN : \
  && yarn install --frozen-lockfile \
  && yarn build --standalone \
  && rm -rf node_modules \
  && yarn cache clean \
  && :

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
