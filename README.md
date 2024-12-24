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
```
