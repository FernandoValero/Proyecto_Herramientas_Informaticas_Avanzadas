# Usa una imagen base de Node.js para construir la app
#FROM node:18 as build

# Establece el directorio de trabajo
#WORKDIR /app

# Copia los archivos del proyecto
#COPY package*.json ./
#RUN npm install

# Copia el resto de los archivos y construye la app
#COPY . .
#RUN npm run build -- --output-path=dist

# Usa una imagen de Nginx para servir la app
#FROM nginx:alpine

# Copia los archivos de construcción a la carpeta de Nginx
#COPY --from=build /app/dist /usr/share/nginx/html

# Exposición del puerto 80
#EXPOSE 80

# Nginx inicia automáticamente
# Usa una imagen base de Node.js para construir la app
# Usa una imagen base de Node.js
FROM node:18 as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto y instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 4200
EXPOSE 4200

# Ejecuta el servidor de desarrollo de Angular
#CMD ["npm", "start"]

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]

