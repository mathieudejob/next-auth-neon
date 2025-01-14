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

# Prisma migrate

- Use `prisma db push` to apply schema changes without generating migration files.
- Migration files (`prisma/migrations`) track schema changes and help recreate the schema in other environments.
- To replicate the database _with content_, export/import the database using tools like `pg_dump` or write a Prisma seed script.
- For version-controlled schema evolution, migrations are highly recommended, even if they aren’t strictly mandatory.

* Troubleshooting : Drift detected between the local schema file and db -> `prisma migrate dev` requesting the db reset (**_how to avoid it after each schema changes ???_**)

# Extend Session

In order to extend the session object, for instance to add the user ID, we must use the callbacks to add and expose the user ID.
Here is an example : https://authjs.dev/guides/extending-the-session

# Ressources

- Prisma client : https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-postgresql
- Prisma migrate workflow : https://www.prisma.io/docs/orm/prisma-migrate/workflows/troubleshooting
