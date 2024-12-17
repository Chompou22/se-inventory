# Stage 1: Build
FROM node:21 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Run
FROM node:21 AS runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app /usr/src/app

EXPOSE 3001

CMD [ "npm", "run", "start:dev" ]
