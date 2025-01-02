# Sequential command lines

```
pnpm create-next-app@latest next-auth-oauth
pnpm add prisma --save-dev
npx prisma init
pnpm install @prisma/client
// Create primsa.ts for adding singleton
pnpm add next-auth@beta
npx auth secret  // Add the generated AUTH_SECRET into the right .env* file
// Create auth.ts
// Create /app/api/auth/[...nextauth]/route.ts
pnpm add @prisma/client @auth/prisma-adapter
// Fill the schema.prisma file with NextAuth models
// Create Neon PostgreSQL and update environement variable
pnpm exec prisma generate
npx prisma db push // Synchronize with Neon db
// Add Posts to schema.prisma
npx prisma db push // Synchronize with Neon db
// Create page.tsx, /components, /admin, /font
// Update the path to prisma.ts everywhere -> import { prisma } from "@/lib/prisma"
// Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, RESEND_API_KEY on Vercel

// Generate NEXTAUTH_SECRET and NEXTAUTH_URL environment variable ?

// TODO :
//    - create the CRUD api
//    - create the post creation form
//    - update relation between users and posts
//    - display post link to the connected user only
```

# Ressources

- Prisma client : https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-postgresql
