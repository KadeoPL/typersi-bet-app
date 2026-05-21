import { MatchType } from "@/utils/types/match";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";
import MatchPredictionByUser from "./MatchPredictionItem";

export default function MatchResultSection({
  matchData,
}: {
  matchData: MatchType;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(matchData);

  const outcomeBet =
    matchData.my_bet?.outcome_bet === "1"
      ? matchData.home_team.name
      : matchData.my_bet?.outcome_bet === "2"
        ? matchData.away_team.name
        : matchData.my_bet?.outcome_bet === "X"
          ? "Remis"
          : "Brak typu";

  return (
    <>
      <div className="w-full">
        <div className="text-center text-sm text-textPrimary">Twój typ</div>

        <div className="flex justify-around mt-2 items-center">
          <div className="flex flex-col gap-1 max-w-1/2">
            <div className="text-center text-sm text-textSecondary">Wynik</div>
            <div className="text-primary bg-surfaceLight py-2 px-4 rounded-lg">
              {matchData.my_bet
                ? `${matchData.my_bet.score_home}
             :
             ${matchData.my_bet.score_away}`
                : "- : -"}
            </div>
          </div>

          <div className="flex flex-col gap-1 max-w-1/2">
            <div className="text-center text-sm text-textSecondary">
              Zwycięzca
            </div>
            <div className="text-primary bg-surfaceLight py-2 px-4 rounded-lg">
              {outcomeBet}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <h1
          className={`text-sm font-semibold text-textSecondary mt-6 text-center ${!isOpen ? "block opacity-100" : "hidden opacity-0"} transition-all duration-300`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Zobacz jak typowali inni
        </h1>
        <div
          className={`
            w-full
              overflow-hidden
              transition-all duration-300
              ${isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}
            `}
        >
          <div className="flex flex-col gap-2 w-full">
            <MatchPredictionByUser
              name="Kadeo"
              firstTeamGoals={2}
              secondTeamGoals={0}
              team="Chorwacja"
            />
            <MatchPredictionByUser
              name="Kadeo"
              firstTeamGoals={2}
              secondTeamGoals={0}
              team="Chorwacja"
            />
            <MatchPredictionByUser
              name="Kadeo"
              firstTeamGoals={2}
              secondTeamGoals={0}
              team="Chorwacja"
            />
          </div>
        </div>
        <ChevronUp
          className={`
              text-white mt-4 cursor-pointer
              transition-transform duration-300
              ${isOpen ? "rotate-0" : "rotate-180"}
            `}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </>
  );
}
