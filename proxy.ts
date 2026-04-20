import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("better-auth.session_token");
  const vercelToken = req.cookies.get("_vercel_jwt");
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");

  if ((token || vercelToken) && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if ((!token || !vercelToken) && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api/auth|favicon.ico).*)"],
};
