type Props = {
  outcome: string;
  homeTeamName: string;
  awayTeamName: string;
};

export function getOutcomeBet({ outcome, homeTeamName, awayTeamName }: Props) {
  if (outcome === "1") {
    return homeTeamName;
  }

  if (outcome === "2") {
    return awayTeamName;
  }

  if (outcome === "X") {
    return "Remis";
  }

  return "Brak typu";
}
