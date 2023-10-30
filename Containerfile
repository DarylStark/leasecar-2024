FROM node:21

WORKDIR /src

COPY ./* /src

RUN npm ci --omit=dev
RUN npm run build

ENTRYPOINT [ 'npm', 'run', 'start' ]