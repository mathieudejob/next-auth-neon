import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(req: NextRequest) {
  // Retrieve the token (this will include user information if they are logged in)
  const session = auth();

  const { pathname } = req.nextUrl;

  // Define protected paths (add more paths as needed)
  const protectedPaths = ["/admin"];

  // If the user is not authenticated and tries to access a protected path, redirect them
  if (protectedPaths.includes(pathname) && !session) {
    const loginUrl = new URL("/api/auth/signin", req.url); // Redirect to the login page
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request to continue if authenticated or not accessing a protected path
  return NextResponse.next();
}

// Apply the middleware only to the protected paths
export const config = {
  matcher: ["/admin"], // Protects the /admin page
};
