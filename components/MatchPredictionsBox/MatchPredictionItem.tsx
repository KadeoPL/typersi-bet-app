type MatchPredictionByUserType = {
  username: string;
  score_home: number;
  score_away: number;
  outcome_bet: string;
};

export default function MatchPredictionByUser({
  username,
  score_away,
  score_home,
  outcome_bet,
}: MatchPredictionByUserType) {
  return (
    <div className="w-full flex bg-surfaceLight px-6 py-4 rounded-lg text-sm">
      <div className="text-white w-1/3 ">{username}</div>
      <div className="text-primary font-bold w-1/3">{outcome_bet}</div>
      <div className="text-primary font-bold w-1/3 text-right">
        {score_home}:{score_away}
      </div>
    </div>
  );
}
