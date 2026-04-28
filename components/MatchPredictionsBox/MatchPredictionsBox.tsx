"use client";

import React, { useState } from "react";
import TeamBox from "./TeamBox";
import PredictionsGoalInput from "./PredictionsGoalInput";
import PredictionsTeamRadioInput from "./PredictionsTeamRadioInput";
import Button from "../Button";

export default function MatchPredictionsBox() {
  const [homeGoals, setHomeGoals] = useState<number | null>(null);
  const [awayGoals, setAwayGoals] = useState<number | null>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="bg-black w-full rounded-2xl flex flex-col items-center p-8 mt-6">
      <div className="bg-primary text-black font-semibold uppercase px-4 py-2 rounded-full text-xs mb-4">
        Grupa A
      </div>
      <div className="flex gap-8">
        <TeamBox name="Polska" flag="" />
        <div className="flex flex-col items-center pt-5">
          <div className="text-primary text-sm font-bold text-center">
            15:00
          </div>
          <div className="text-lightGray text-sm text-center">27.04</div>
        </div>
        <TeamBox name="Polska" flag="" />
      </div>
      <div className="flex gap-6 my-7 justify-center items-center">
        <PredictionsGoalInput goals={homeGoals} onChange={setHomeGoals} />
        <div className="text-2xl text-lightGray text-center">:</div>
        <PredictionsGoalInput goals={awayGoals} onChange={setAwayGoals} />
      </div>
      <div>
        <PredictionsTeamRadioInput
          onChange={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
      <button className="w-full py-3 rounded-full bg-primary text-black font-semibold flex justify-center items-center gap-2 mt-7">
        Wyślij
      </button>
    </div>
  );
}
