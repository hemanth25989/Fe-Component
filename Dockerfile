
# base image

FROM node:lts-alpine

# set the working directory

WORKDIR /src/app

# Copy package 

COPY ["package.json","package-lock.json", "./"]

# copy the current directory files to Image WorkingDirectory

COPY . /src/app/

# Run package 

RUN npm install -f

# expose  port for external access

EXPOSE 3000

# ownership permission to working  directory

RUN chown -R node /src/app

# node user

USER node


CMD ["npm", "start"]