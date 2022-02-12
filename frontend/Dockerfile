FROM node:8.4.0
WORKDIR /app
COPY * ./
COPY ./public ./public
COPY ./src ./src
RUN npm install -g
EXPOSE 3000
CMD ["npm", "start"]