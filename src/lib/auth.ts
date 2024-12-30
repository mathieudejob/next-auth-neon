import NextAuth from "next-auth";
import "next-auth/jwt";
import type { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";
import Resend from "next-auth/providers/resend";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

const config = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "no-reply@tik-downloader.com",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // Optional: If you want to use JWT instead of database sessions
    // Force to JWT because set to 'database' while providing adapter
  },
} satisfies NextAuthOptions;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

// Necessary ??
declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
