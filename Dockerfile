FROM node:20
WORKDIR /usr/src/clean-node-api
COPY ["./package.json", "package-lock.json", "./"]
RUN npm install --omit=dev --ignore-scripts && \
  npm rebuild bcrypt --build-from-source