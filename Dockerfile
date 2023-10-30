FROM node:21

WORKDIR /app

COPY . /app

RUN npm ci --omit=dev
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]