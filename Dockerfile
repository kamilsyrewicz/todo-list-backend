# Use a Node.js LTS version as base image
FROM node:14-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY . .

# Expose the port your app runs on
EXPOSE 5001

# Command to run the application
CMD ["node", "index.js"]