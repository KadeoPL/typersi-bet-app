import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(req: NextRequest) {
  // const isLoggedIn = !!req.cookies.get("better-auth.session-token");
  // const isAuthPage = req.nextUrl.pathname.startsWith("/login");
  // if (!isLoggedIn && !isAuthPage) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  // return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
