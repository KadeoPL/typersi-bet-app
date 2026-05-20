export async function patchBet(data: {
  betId: number;
  scoreHome: number;
  scoreAway: number;
  outcomeBet: string;
}) {
  const res = await fetch(`/api/bet/${data.betId}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
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
