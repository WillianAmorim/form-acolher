FROM node:20.18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build

FROM nginx:alpine

# Copiar os arquivos de build gerados do diretório 'dist'
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]