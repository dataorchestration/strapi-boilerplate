FROM node:25-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S strapi -u 1001

# Change ownership of app directory
RUN chown -R strapi:nodejs /app

# Switch to non-root user
USER strapi

# Expose port
EXPOSE 1337

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]