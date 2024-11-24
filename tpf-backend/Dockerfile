# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Instalar dockerize
RUN apt-get update && apt-get install -y curl
RUN curl -sSL https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar -xz -C /usr/local/bin

# Copia los archivos del proyecto
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos
COPY . .

# Ejecutar pruebas
RUN npx jest

# Expone el puerto del backend
EXPOSE 3000

# Inicia el servidor
CMD ["dockerize", "-wait", "tcp://mysql:3306", "-timeout", "3000s", "npm", "start"]
#CMD ["npm", "start"]