# Multi-build stages

# Builder stage => build app into static files
FROM node:20-alpine AS builder

WORKDIR /app

# Copy file packe.json vao /app
COPY package.json .
# Install libs 
RUN npm install --verbose
# Copy tat ca cac file vao image ngoai tru nhung file co trong .dockerignore
COPY . .
# Build app into static files =? /app/dist
RUN npm run build

# Runner stage => serve static files
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist .
# Serve static file (serve, nginx, apache, caddy, ...) (webserver)
RUN npm i -g serve
ENTRYPOINT ["serve", "-s", ".", "-l", "3000"]

EXPOSE 3000