# Etapa de build
FROM node:20.18-alpine as build

WORKDIR /app

# Copiar arquivos de configuração do npm e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar todo o código da aplicação
COPY . .

# Compilar a aplicação React para produção
RUN npm run build

# Etapa final: usar Nginx para servir a build estática
FROM nginx:alpine

# Remover a configuração default do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar o arquivo de configuração customizado
COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar a build da aplicação para o diretório correto do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
