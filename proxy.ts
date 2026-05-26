import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const mustChange = request.cookies.get("mustChangePassword")?.value;

  const pathname = request.nextUrl.pathname;

  const isLogin = pathname === "/login";

  const isChangePassword = pathname === "/ustawienia/zmien-haslo";

  if (!token && !isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && mustChange === "true" && !isChangePassword) {
    return NextResponse.redirect(
      new URL(
        "/ustawienia/zmien-haslo",

        request.url,
      ),
    );
  }

  if (token && isLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
