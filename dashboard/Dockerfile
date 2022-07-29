FROM yobasystems/alpine-docker:x86_64
RUN apk add --update npm
COPY app /opt/app
WORKDIR /opt/app
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]