# Etapa 1: Construcción
FROM node:18-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY . .

# Instala las dependencias
RUN npm install

# Construye el proyecto
RUN npm run build

# Etapa 2: Servidor nginx para servir la app
FROM nginx:alpine

# Copia los archivos construidos a la carpeta pública de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia una configuración de nginx personalizada si es necesario
# COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
