FROM node:18-alpine
WORKDIR /fitness-tracking-app-fe/
COPY public/ /fitness-tracking-app-fe/public
COPY src/ /fitness-tracking-app-fe/src
COPY package.json /fitness-tracking-app-fe/
RUN npm install
CMD ["npm", "start"]