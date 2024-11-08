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

# Instala Certbot e o plugin para Nginx (se necessário)
RUN apk add --no-cache certbot certbot-nginx

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração customizado do Nginx
COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copia a build da aplicação para o diretório correto do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Cria diretório para a validação do Certbot
RUN mkdir -p /var/www/certbot

# Expor as portas 80 e 443
EXPOSE 80
EXPOSE 443

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
