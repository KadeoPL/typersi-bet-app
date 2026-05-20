import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

export async function GET(request: NextRequest) {
  const token = (await cookies()).get("token")?.value;

  const status = request.nextUrl.searchParams.get("status");

  const skip = request.nextUrl.searchParams.get("skip");

  const limit = request.nextUrl.searchParams.get("limit");

  const res = await fetch(
    `${API_URL}/matches?status=${status}&skip=${skip}&limit=${limit}&include_bets=true`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },

      cache: "no-store",
    },
  );

  const data = await res.json();

  return NextResponse.json(data, {
    status: res.status,
  });
}
