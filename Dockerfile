FROM mhart/alpine-node:latest
WORKDIR /usr/src/app
ADD . /usr/src/app
EXPOSE 3000
CMD ["npm", "start"]
