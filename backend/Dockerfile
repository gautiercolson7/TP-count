FROM node:8.4.0
WORKDIR /backend
COPY backend/package.json ./
COPY backend/package-lock.json ./
RUN npm install 
COPY back/. .
EXPOSE 5000
CMD ["npm", "start", "backend"]