"use client";

import MatchTeam from "./MatchTeam";
import { MatchType } from "@/utils/types/match";
import MatchDate from "./MatchDate";
import MatchLiveSection from "./MatchLiveSection";
import MatchBetForm from "./MatchBetForm";
import { getStage } from "@/app/lib/getStage";
import { useUserPreferences } from "@/utils/hooks/useUserPreferences";

type MatchPredictionsBoxType = {
  matchData: MatchType;
  onBetPlaced?: (matchId: number) => void;
};

export default function MatchCard({
  matchData,
  onBetPlaced,
}: MatchPredictionsBoxType) {
  const isMatchStart =
    matchData.status === "locked" || matchData.status === "finished";
  const isMatchEnd = matchData.status === "finished";
  const { matchCardView } = useUserPreferences();

  return (
    <div
      className={`bg-secondary w-full rounded-2xl flex flex-col items-center px-4 pb-4 ${matchCardView === "full" ? "pt-8" : "pt-4"} mt-6`}
    >
      {matchCardView === "full" && (
        <div
          className={`bg-primary text-background font-semibold uppercase px-4 py-2 rounded-full text-xs mb-4`}
        >
          {matchData.stage === "group" ? (
            <>
              Grupa <span className="ml-1"> {matchData.home_team.group}</span>
            </>
          ) : (
            getStage(matchData.stage)
          )}
        </div>
      )}

      <div className="flex justify-between w-full items-center">
        <MatchTeam
          name={matchData.home_team.name}
          flag={matchData.home_team.flag_src}
          view={matchCardView}
          code={matchData.home_team.code}
        />

        {isMatchEnd ? (
          <div>
            <div
              className={`text-primary ${matchCardView === "full" ? "text-3xl" : "text-xl"} font-bold`}
            >
              {matchData.home_score} : {matchData.away_score}
            </div>
          </div>
        ) : (
          <MatchDate
            isMatchStart={isMatchStart}
            matchDate={matchData.match_date}
            view={matchCardView}
          />
        )}

        <MatchTeam
          name={matchData.away_team.name}
          flag={matchData.away_team.flag_src}
          view={matchCardView}
          code={matchData.away_team.code}
        />
      </div>

      {isMatchStart ? (
        <MatchLiveSection matchData={matchData} view={matchCardView} />
      ) : (
        <MatchBetForm matchData={matchData} onBetPlaced={onBetPlaced} />
      )}
    </div>
  );
}
