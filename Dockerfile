FROM node:14.16.1-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY  package*.json .
RUN npm install
COPY . .
ENV API_URL=http://localhost
EXPOSE 3001
CMD ["npm" ,"start"]