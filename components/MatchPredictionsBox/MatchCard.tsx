import TeamBox from "./MatchTeam";
import { MatchType } from "@/utils/types/match";
import MatchDate from "./MatchDate";
import MatchStartSection from "./MatchLiveSection";
import MatchScheduledSection from "./MatchBetForm";
import { getStage } from "@/app/lib/getStage";

type MatchPredictionsBoxType = {
  matchData: MatchType;
  onBetPlaced?: (matchId: number) => void;
};

export default function MatchPredictionsBox({
  matchData,
  onBetPlaced,
}: MatchPredictionsBoxType) {
  const isMatchStart =
    matchData.status === "locked" || matchData.status === "finished";
  const isMatchEnd = matchData.status === "finished";

  return (
    <div className="bg-secondary w-full rounded-2xl flex flex-col items-center px-4 pb-4 pt-8 mt-6">
      <div className="bg-primary text-background font-semibold uppercase px-4 py-2 rounded-full text-xs mb-4">
        {matchData.stage === "group" ? (
          <>
            Grupa <span className="ml-1"> {matchData.home_team.group}</span>
          </>
        ) : (
          getStage(matchData.stage)
        )}
      </div>

      <div className="flex justify-between w-full items-center">
        <TeamBox
          name={matchData.home_team.name}
          flag={matchData.home_team.flag_src}
        />

        {isMatchEnd ? (
          <div>
            <div className="text-primary text-3xl font-bold">
              {matchData.home_score} : {matchData.away_score}
            </div>
          </div>
        ) : (
          <MatchDate
            isMatchStart={isMatchStart}
            matchDate={matchData.match_date}
          />
        )}

        <TeamBox
          name={matchData.away_team.name}
          flag={matchData.away_team.flag_src}
        />
      </div>

      {isMatchStart ? (
        <MatchStartSection matchData={matchData} />
      ) : (
        <MatchScheduledSection
          matchData={matchData}
          onBetPlaced={onBetPlaced}
        />
      )}
    </div>
  );
}
