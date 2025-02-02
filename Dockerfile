# Multi-stage build for Next.js application
# Stage 1: Base image with dependencies
FROM node:22.11.0-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk update && apk upgrade && apk add --no-cache libc6-compat && npm i -g npm@latest
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY --link package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps --link /app/node_modules ./node_modules
COPY . .

# Define build arguments for the environment variables
ARG NEXT_LOCAL_URL
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_TINY_EDITOR_API_KEY
ARG AUTH_SECRET
ARG AZURE_STORAGE_CONNECTION_STRING
ARG DATABASE_URL

# Propagate build arguments to environment variables
ENV NEXT_LOCAL_URL=$NEXT_LOCAL_URL \
    NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL \
    NEXT_PUBLIC_TINY_EDITOR_API_KEY=$NEXT_PUBLIC_TINY_EDITOR_API_KEY \
    AUTH_SECRET=$AUTH_SECRET \
    AZURE_STORAGE_CONNECTION_STRING=$AZURE_STORAGE_CONNECTION_STRING \
    DATABASE_URL=$DATABASE_URL

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Declare build arguments
ARG NEXT_LOCAL_URL
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_TINY_EDITOR_API_KEY
ARG AUTH_SECRET
ARG AZURE_STORAGE_CONNECTION_STRING
ARG DATABASE_URL

ENV NEXT_LOCAL_URL=$NEXT_LOCAL_URL \
    NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL \
    NEXT_PUBLIC_TINY_EDITOR_API_KEY=$NEXT_PUBLIC_TINY_EDITOR_API_KEY \
    AUTH_SECRET=$AUTH_SECRET \
    AZURE_STORAGE_CONNECTION_STRING=$AZURE_STORAGE_CONNECTION_STRING \
    DATABASE_URL=$DATABASE_URL 

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]