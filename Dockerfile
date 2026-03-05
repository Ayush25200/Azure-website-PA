# Use official Node.js image
FROM node:18

# Create working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port used by Node app
EXPOSE 3000

# Start the application
CMD ["npm", "start"]