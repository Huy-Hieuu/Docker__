# Base image
FROM node:18-alpine as builder

# Set working directory
WORKDIR /movie_server

# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install

RUN npm install -g @babel/core @babel/cli

# Copy application code
COPY . .

# Build the application
RUN npm run build-src 

CMD ["npm", "run", "build"]

# # Final image
# FROM nginx:1.21-alpine

# # Copy built application
# COPY --from=builder /movie_server/build /usr/share/nginx/html

# # Copy NGINX configuration
# COPY nginx.conf /etc/nginx/conf.d/default.conf

