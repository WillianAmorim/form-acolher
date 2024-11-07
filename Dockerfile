# Etapa de build
FROM node:20.18-alpine as build

WORKDIR /app

# Copiar arquivos de configuração do npm e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar todo o código da aplicação
COPY . .

# Configurar o Vite para usar as variáveis de ambiente de produção
RUN npm run build

# Etapa final: usar Nginx para servir a build estática
FROM nginx:alpine

# Instala Certbot e o plugin para Nginx
RUN apk add --no-cache certbot certbot-nginx

# Remover a configuração default do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar o arquivo de configuração customizado
COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar a build da aplicação para o diretório correto do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Criar diretório para a validação do Certbot
RUN mkdir -p /var/www/certbot

# Expor as portas 80 e 443
EXPOSE 80
EXPOSE 443

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
