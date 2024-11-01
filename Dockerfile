# Etapa de build
FROM node:20.18-alpine as build

WORKDIR /app

# Copiar arquivos de configuração do npm e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do código da aplicação e fazer o build
COPY . .
RUN npm run build

# Etapa final: usar uma imagem leve de Node.js
FROM node:20.18-alpine

WORKDIR /app

# Instalar o pacote 'serve' globalmente
RUN npm install -g serve

# Copiar os arquivos do build para o diretório de trabalho
COPY --from=build /app/dist /app/dist

# Expõe a porta 3000 (ou qualquer outra que preferir)
EXPOSE 3000

# Comando para iniciar o servidor com 'serve'
CMD ["serve", "-s", "dist"]
