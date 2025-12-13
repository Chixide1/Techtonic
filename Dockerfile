FROM node:iron-trixie-slim AS builder
LABEL authors="Chikezie"

WORKDIR /app

# Copy dependency files
COPY package.json yarn.lock ./

# Install all dependencies (including devDependencies)
RUN yarn install --frozen-lockfile

# Copy all source files
COPY . .

# Build Next.js app
RUN yarn build


# Production stage
FROM node:iron-trixie-slim

WORKDIR /app

# Set to production
ENV NODE_ENV=production

# Copy dependency files
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Copy built Next.js files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Copy next.config.js if you have one
COPY --from=builder /app/next.config.* ./

# Expose Next.js default port
EXPOSE 3000

# Start Next.js
CMD ["yarn", "start"]