# Etapa 1: Construir a aplicação React
FROM node:20.18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Configurar Nginx para servir a aplicação
FROM nginx:alpine

# Copiar os arquivos de build gerados para o diretório de conteúdo do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
