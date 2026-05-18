"use client";

import { useState } from "react";
import MatchPredictionByUser from "./MatchPredictionByUser";
import { ChevronUp } from "lucide-react";

type MatchStartType = {};

export default function MatchStartSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
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
  );
}
