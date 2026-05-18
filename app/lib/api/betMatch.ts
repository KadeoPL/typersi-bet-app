export async function betMatch(data: {
  matchId: number;
  scoreHome: number;
  scoreAway: number;
  outcomeBet: string;
}) {
  const res = await fetch("/api/bet", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      match_id: data.matchId,
      score_home: data.scoreHome,
      score_away: data.scoreAway,
      outcome_bet: data.outcomeBet,
    }),
  });

  const responseData = await res.json();

  if (!res.ok) {
    console.log(responseData);

    throw new Error(JSON.stringify(responseData.detail));
  }

  return responseData;
}
