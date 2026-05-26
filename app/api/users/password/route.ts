import { router } from "next/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = process.env.API_URL;

export async function PATCH(req: Request) {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    const body = await req.json();

    const res = await fetch(
      `${API_URL}/users/me/password`,

      {
        method: "PATCH",

        headers: {
          Authorization: `Bearer ${token}`,

          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          current_password: body.currentPassword,
          new_password: body.newPassword,
        }),
      },
    );

    const data = await res.json();

    if (res.ok) {
      cookieStore.set("mustChangePassword", "false");
    }

    return Response.json(data, { status: res.status });
  } catch (err) {
    console.log(err);

    return Response.json(
      {
        detail: String(err),
      },

      {
        status: 500,
      },
    );
  }
}
