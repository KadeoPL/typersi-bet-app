import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const token = (await cookies()).get("token")?.value;

  const { id } = await params;

  try {
    const res = await fetch(`${API_URL}/bets/match/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    return Response.json(data, {
      status: res.status,
    });
  } catch (err) {
    console.error(err);

    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
