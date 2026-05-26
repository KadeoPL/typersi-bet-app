import { MatchStatus } from "@/utils/types/match";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

type GetMatchesProps = {
  status: MatchStatus;
  limit?: number;
  skip?: number;
};

export async function getMatches({ status, limit, skip }: GetMatchesProps) {
  const token = (await cookies()).get("token")?.value;

  const params = new URLSearchParams({
    status,
    limit: String(limit),
    skip: String(skip),
  });

  const res = await fetch(`${API_URL}/matches?${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },

    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail || `HTTP ${res.status}`);
  }

  return data;
}
