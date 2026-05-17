"use client";

import { useState } from "react";
import TeamBox from "./TeamBox";
import PredictionsGoalInput from "./PredictionsGoalInput";
import PredictionsTeamRadioInput from "./PredictionsTeamRadioInput";
import { ChevronUp } from "lucide-react";
import MatchPredictionByUser from "./MatchPredictionByUser";
import { MatchType } from "@/utils/types/match";

type MatchPredictionsBoxType = {
  isMatchStart: boolean;
  matchData: MatchType;
};

export default function MatchPredictionsBox({
  isMatchStart,
  matchData,
}: MatchPredictionsBoxType) {
  const [homeGoals, setHomeGoals] = useState<number | null>(null);
  const [awayGoals, setAwayGoals] = useState<number | null>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const date = new Date(matchData.match_date);
  const hour = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return (
    <div className="bg-black w-full rounded-2xl flex flex-col items-center px-8 pb-4 pt-8 mt-6">
      <div className="bg-primary text-black font-semibold uppercase px-4 py-2 rounded-full text-xs mb-4">
        {matchData.stage}
      </div>

      <div className="flex gap-8">
        <TeamBox
          name={matchData.home_team.name}
          flag={matchData.home_team.flag_src}
        />

        <div className="flex flex-col items-center pt-5">
          <div className="text-primary text-sm font-bold text-center">
            {isMatchStart ? ":" : `${hour}:${minutes}`}
          </div>
          <div className="text-lightGray text-sm text-center">
            {isMatchStart ? "" : `${day}.${month}`}
          </div>
        </div>

        <TeamBox
          name={matchData.away_team.name}
          flag={matchData.away_team.flag_src}
        />
      </div>

      {isMatchStart ? (
        <div className="flex flex-col w-full">
          <h1
            className={`text-sm font-semibold text-lightGray mt-6 text-center ${!isOpen ? "block opacity-100" : "hidden opacity-0"} transition-all duration-300`}
          >
            Zobacz jak typowali inni
          </h1>
          <div
            className={`
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
        </div>
      ) : (
        <>
          <div
            className={`
              overflow-hidden
              transition-all duration-300
              ${isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}
            `}
          >
            <div className="flex gap-6 justify-center items-center">
              <PredictionsGoalInput goals={homeGoals} onChange={setHomeGoals} />

              <div className="text-2xl text-lightGray text-center">:</div>

              <PredictionsGoalInput goals={awayGoals} onChange={setAwayGoals} />
            </div>

            <div className="mt-6">
              <PredictionsTeamRadioInput
                onChange={setSelectedOption}
                selectedOption={selectedOption}
              />
            </div>

            <button className="w-full py-3 rounded-full bg-primary text-black font-semibold flex justify-center items-center gap-2 mt-4">
              Wyślij
            </button>
          </div>
        </>
      )}
      <ChevronUp
        className={`
              text-white mt-4 cursor-pointer
              transition-transform duration-300
              ${isOpen ? "rotate-0" : "rotate-180"}
            `}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}
