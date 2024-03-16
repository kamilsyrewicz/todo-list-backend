# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Specify the command to run your app
CMD ["node", "index.js"]
