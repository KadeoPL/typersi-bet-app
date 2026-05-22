import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

export async function PATCH(req: Request) {
  const token = (await cookies()).get("token")?.value;

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

  return Response.json(data, {
    status: res.status,
  });
}
