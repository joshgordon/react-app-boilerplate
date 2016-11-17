FROM mhart/alpine-node:latest
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install && npm run build && npm prune --production
EXPOSE 3000
CMD ["npm", "start"]
