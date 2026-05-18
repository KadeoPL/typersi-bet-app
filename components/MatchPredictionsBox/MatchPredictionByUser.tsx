type MatchPredictionByUserType = {
  name: string;
  team: string;
  firstTeamGoals: number;
  secondTeamGoals: number;
};

export default function MatchPredictionByUser({
  name,
  team,
  firstTeamGoals,
  secondTeamGoals,
}: MatchPredictionByUserType) {
  return (
    <div className="w-full flex justify-between">
      <div className="text-white">{name}</div>
      <div className="text-primary font-bold">{team}</div>
      <div className="text-primary font-bold">
        {firstTeamGoals}:{secondTeamGoals}
      </div>
    </div>
  );
}
