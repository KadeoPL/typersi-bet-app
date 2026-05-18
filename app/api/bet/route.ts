import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const token = (await cookies()).get("token")?.value;

    const response = await fetch(`${API_URL}/bets`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        match_id: body.match_id,
        score_home: body.score_home,
        score_away: body.score_away,
        outcome_bet: body.outcome_bet,
      }),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        detail: "Server error",
      },
      {
        status: 500,
      },
    );
  }
}
