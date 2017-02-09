FROM node:7.5.0-onbuild
EXPOSE 6667
RUN mkdir -p /home/nodejs/rollbot
WORKDIR /home/nodejs/rollbot
COPY . /home/nodejs/rollbot
COPY package.json .
RUN npm install --production
RUN groupadd -r nodejs && useradd -m -r -g nodejs nodejs
USER nodejs
CMD ["node"]
