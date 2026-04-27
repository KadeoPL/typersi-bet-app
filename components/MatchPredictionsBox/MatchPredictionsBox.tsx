"use client";

import React, { useState } from "react";
import TeamBox from "./TeamBox";
import PredictionsGoalInput from "./PredictionsGoalInput";

export default function MatchPredictionsBox() {
  const [homeGoals, setHomeGoals] = useState<number | null>(null);
  const [awawyGoals, setAwayGoals] = useState<number | null>(1);
  return (
    <div className="bg-black w-full rounded-2xl flex flex-col items-center">
      <div className="bg-primary text-black font-semibold uppercase px-4 py-2 rounded-full text-xs my-4">
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
      <div className="flex gap-6 my-10 justify-center items-center">
        <PredictionsGoalInput goals={homeGoals} onChange={setHomeGoals} />
        <div className="text-2xl text-lightGray text-center">:</div>
        <PredictionsGoalInput goals={awawyGoals} onChange={setAwayGoals} />
      </div>
    </div>
  );
}
