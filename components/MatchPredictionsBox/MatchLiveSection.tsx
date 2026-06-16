"use client";

import { useEffect, useState } from "react";
import MatchPredictionItem from "./MatchPredictionItem";
import { ChevronUp } from "lucide-react";
import { MatchType } from "@/utils/types/match";
import { getBets } from "@/app/lib/api/getBets";
import { BetType } from "@/utils/types/bet";
import { getOutcomeBet } from "@/app/lib/getOutcomeBet";
import { MatchCardView } from "@/utils/providers/UserPreferencesProvider";

type MatchLiveSectionType = {
  matchData: MatchType;
  view: MatchCardView;
};

export default function MatchLiveSection({
  matchData,
  view,
}: MatchLiveSectionType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [betsData, setBetsData] = useState<BetType[]>([]);
  const myOutcomeBet = getOutcomeBet({
    outcome: matchData.my_bet?.outcome_bet || "",
    homeTeamName: matchData.home_team.name,
    awayTeamName: matchData.away_team.name,
  });

  async function loadBets() {
    try {
      const data = await getBets(matchData.id);
      setBetsData(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadBets();
  }, [matchData.id]);

  return (
    <>
      <div className="w-full ">
        {view === "full" && (
          <div className="text-center text-sm text-textPrimary">Twój typ</div>
        )}

        <div
          className={`flex justify-around mt-2 items-center  ${view === "full" ? "block" : "hidden"}`}
        >
          <div
            className={`flex max-w-1/2 ${view === "full" ? "flex-col gap-1" : "flex-row items-center gap-2"}`}
          >
            <div className="text-center text-sm text-textSecondary">Wynik:</div>
            <div
              className={`text-primary ${view === "full" ? "bg-surfaceLight py-2 px-4" : "bg-transparent py-0 px-0"} font-semibold rounded-lg`}
            >
              {matchData.my_bet
                ? `${matchData.my_bet.score_home}
             :
             ${matchData.my_bet.score_away}`
                : "- : -"}
            </div>
          </div>

          <div
            className={`flex max-w-1/2 ${view === "full" ? "flex-col gap-1" : "flex-row items-center gap-2 "}`}
          >
            <div className="text-center text-sm text-textSecondary">
              Zwycięzca:
            </div>
            <div
              className={`text-primary ${view === "full" ? "bg-surfaceLight py-2 px-4" : "bg-transparent py-0 px-0"} font-semibold rounded-lg`}
            >
              {myOutcomeBet}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <h1
          className={`text-xs font-semibold text-textSecondary mt-4 text-center ${!isOpen ? "block opacity-100" : "hidden opacity-0"} transition-all duration-300`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Zobacz jak typowali inni
        </h1>
        <div
          className={`
            w-full 
              transition-all duration-300
              ${isOpen ? "max-h-[2000px] block mt-6" : "max-h-0 hidden"}
            `}
        >
          <div className="flex flex-col gap-2 w-full">
            {betsData.map((item) => (
              <MatchPredictionItem
                username={item.username}
                score_home={item.score_home}
                score_away={item.score_away}
                outcome_bet={getOutcomeBet({
                  outcome: item.outcome_bet,
                  homeTeamName: matchData.home_team.name,
                  awayTeamName: matchData.away_team.name,
                })}
                key={item.id}
              />
            ))}
          </div>
        </div>
        <ChevronUp
          className={`
              text-textPrimary mt-4 cursor-pointer
              transition-transform duration-300
              ${isOpen ? "rotate-0" : "rotate-180"}
            `}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </>
  );
}
