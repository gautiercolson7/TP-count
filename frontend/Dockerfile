FROM node:8.4.0
WORKDIR /frontend
ENV PATH /app/node_modules/.bin:$PATH
COPY frontend/package.json ./
COPY frontend/package-lock.json ./
RUN npm i
COPY frontend/. .
EXPOSE 3000
CMD ["npm", "start"]