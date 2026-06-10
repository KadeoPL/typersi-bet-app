import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

export async function POST(req: Request) {
  const token = (await cookies()).get("token")?.value;

  const formData = await req.formData();

  const res = await fetch(`${API_URL}/users/me/avatar`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await res.json();

  return Response.json(data, {
    status: res.status,
  });
}
