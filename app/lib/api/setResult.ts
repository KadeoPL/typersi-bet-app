export async function setResult(
  matchId: number,
  home_score: number,
  away_score: number,
) {
  const res = await fetch(
    `/api/matches/${matchId}/result`,

    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        home_score,
        away_score,
      }),
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail);
  }

  return data;
}
