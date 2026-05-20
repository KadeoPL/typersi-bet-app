import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(req: Request, { params }: Params) {
  const token = (await cookies()).get("token")?.value;

  const body = await req.json();

  const { id } = await params;

  const res = await fetch(
    `${API_URL}/bets/${id}`,

    {
      method: "PATCH",

      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        score_home: body.score_home,
        score_away: body.score_away,
        outcome_bet: body.outcome_bet,
      }),
    },
  );

  const data = await res.json();

  return Response.json(data, {
    status: res.status,
  });
}
