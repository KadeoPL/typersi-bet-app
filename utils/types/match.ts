import { BetType } from "./bet";
import { TeamType } from "./team";

export type MatchStatus = "locked" | "scheduled" | "finished";

export type MatchType = {
  id: number;
  home_team: TeamType;
  away_team: TeamType;
  match_date: Date;
  stage: string;
  status: MatchStatus;
  home_score: number;
  away_score: number;
  my_bet: BetType;
};
