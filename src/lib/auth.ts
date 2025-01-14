import NextAuth from "next-auth";
import "next-auth/jwt";
import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";
import Resend from "next-auth/providers/resend";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

const config = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: "no-reply@tik-downloader.com",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // Optional: If you want to use JWT instead of database sessions
    // Force to JWT because set to 'database' while providing adapter
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id ?? "session error - undefined user id";
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

// Extends types
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }
}
