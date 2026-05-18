"use client";

import TeamBox from "./TeamBox";
import { MatchType } from "@/utils/types/match";
import MatchDate from "./MatchDate";
import MatchStartSection from "./MatchStartSection";
import MatchScheduledSection from "./MatchScheduledSection";

type MatchPredictionsBoxType = {
  matchData: MatchType;
};

export default function MatchPredictionsBox({
  matchData,
}: MatchPredictionsBoxType) {
  const isMatchStart =
    matchData.status === "locked" || matchData.status === "finished";
  return (
    <div className="bg-secondary w-full rounded-2xl flex flex-col items-center px-4 pb-4 pt-8 mt-6">
      <div className="bg-primary text-background font-semibold uppercase px-4 py-2 rounded-full text-xs mb-4">
        {matchData.stage}
      </div>

      <div className="flex justify-between w-full">
        <TeamBox
          name={matchData.home_team.name}
          flag={matchData.home_team.flag_src}
        />

        <MatchDate
          isMatchStart={isMatchStart}
          matchDate={matchData.match_date}
        />

        <TeamBox
          name={matchData.away_team.name}
          flag={matchData.away_team.flag_src}
        />
      </div>

      {isMatchStart ? (
        <MatchStartSection />
      ) : (
        <MatchScheduledSection matchData={matchData} />
      )}
    </div>
  );
}
