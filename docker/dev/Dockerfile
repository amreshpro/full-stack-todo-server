# Use the official node.js image as our base
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json  to leverage Docker cache
COPY package*.json  ./

# Install app dependencies
RUN npm install 

# Copy res of our app in container
COPY . .


# Expose the port of the app will run on 
EXPOSE 5501

CMD [ "npm","run","dev" ]