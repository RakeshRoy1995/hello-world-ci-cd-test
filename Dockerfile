# Use Node.js official image
FROM node:20

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy app source code
COPY . .

# Expose port your app uses
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
