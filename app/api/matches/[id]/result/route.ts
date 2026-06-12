import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function POST(req: Request, { params }: Params) {
  const token = (await cookies()).get("token")?.value;

  const body = await req.json();

  const { id } = await params;

  const res = await fetch(
    `${API_URL}/matches/${id}/result`,

    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        home_score: body.home_score,
        away_score: body.away_score,
      }),
    },
  );

  const data = await res.json();

  return Response.json(data, {
    status: res.status,
  });
}
