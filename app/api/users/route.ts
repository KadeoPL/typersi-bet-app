import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

export async function GET() {
  const token = (await cookies()).get("token")?.value;

  const res = await fetch(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return Response.json(data, {
    status: res.status,
  });
}
