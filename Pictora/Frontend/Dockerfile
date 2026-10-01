# Use Node image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the Vite app
RUN npm run build

# Expose port for preview server
EXPOSE 4173

# Run preview server
CMD ["npm", "run", "preview"]
