import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const API_URL = process.env.API_URL;

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const username = formData.get("username");
    const password = formData.get("password");

    const body = new URLSearchParams();

    body.append("username", String(username));
    body.append("password", String(password));

    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const data = await response.json();
    const cookieStore = await cookies();

    if (data) {
      cookieStore.set("token", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
    }
    const me = await fetch(
      `${API_URL}/auth/me`,

      {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      },
    );

    if (me.status === 403) {
      cookieStore.set(
        "mustChangePassword",

        "true",
      );
    } else {
      const user = await me.json();

      cookieStore.set(
        "mustChangePassword",

        user.must_change_password ? "true" : "false",
      );
    }

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Server error",
      },
      {
        status: 500,
      },
    );
  }
}
