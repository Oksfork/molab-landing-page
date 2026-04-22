# ----------- Base -----------
    FROM node:20-alpine AS base
    WORKDIR /app
    
    # Instalar dependencias necesarias
    RUN apk add --no-cache libc6-compat
    
    # ----------- Dependencies -----------
    FROM base AS deps
    COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
    
    RUN \
      if [ -f package-lock.json ]; then npm ci; \
      elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
      elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile; \
      else echo "No lockfile found." && exit 1; \
      fi
    
    # ----------- Builder -----------
    FROM base AS builder
    WORKDIR /app
    
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    
    ENV NEXT_TELEMETRY_DISABLED=1
    
    RUN npm run build
    
    # ----------- Runner -----------
    FROM node:20-alpine AS runner
    WORKDIR /app
    
    ENV NODE_ENV=production
    ENV NEXT_TELEMETRY_DISABLED=1
    
    # Crear usuario no-root (buena práctica)
    RUN addgroup -g 1001 -S nodejs
    RUN adduser -S nextjs -u 1001
    
    # Copiar standalone build
    COPY --from=builder /app/.next/standalone ./
    COPY --from=builder /app/.next/static ./.next/static
    RUN mkdir -p /app/.next/cache && chown -R nextjs:nodejs /app/.next
    COPY --from=builder /app/public ./public
    
    USER nextjs
    
    EXPOSE 3000
    
    ENV PORT=3000
    ENV HOSTNAME="0.0.0.0"
    
    CMD ["node", "server.js"]