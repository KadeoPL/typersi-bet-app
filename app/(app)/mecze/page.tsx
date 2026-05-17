"use client";

import { useState } from "react";
import MatchPredictionsBox from "@/components/MatchPredictionsBox/MatchPredictionsBox";
import MatchFilterBox from "@/components/MatchFilterBox";

export default function page() {
  const [selectedMatchStatus, setSelectedMatchStatus] = useState<
    "Zaplanowane" | "W trakcie" | "Zakończone"
  >("Zaplanowane");

  return (
    <div>
      <h1>Mecze</h1>
      <div className="flex justify-start gap-3">
        <MatchFilterBox
          text="Zaplanowane"
          isActive={selectedMatchStatus === "Zaplanowane"}
          onClick={() => setSelectedMatchStatus("Zaplanowane")}
        />
        <MatchFilterBox
          text="W trakcie"
          isActive={selectedMatchStatus === "W trakcie"}
          onClick={() => setSelectedMatchStatus("W trakcie")}
        />
        <MatchFilterBox
          text="Zakończone"
          isActive={selectedMatchStatus === "Zakończone"}
          onClick={() => setSelectedMatchStatus("Zakończone")}
        />
      </div>
    </div>
  );
}
