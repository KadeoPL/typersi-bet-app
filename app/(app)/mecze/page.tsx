"use client";

import { useEffect, useState } from "react";
import MatchPredictionsBox from "@/components/MatchPredictionsBox/MatchPredictionsBox";
import MatchFilterBox from "@/components/MatchFilterBox";
import { MatchType } from "@/utils/types/match";
import { LoaderCircle } from "lucide-react";

export default function page() {
  const [selectedMatchStatus, setSelectedMatchStatus] = useState<
    "scheduled" | "locked" | "finished"
  >("scheduled");

  const [matchesData, setMatchesData] = useState<MatchType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const limit = 10;

  async function loadMatches(status: string, limit: number, skip: number) {
    try {
      setIsLoading(true);

      const res = await fetch(
        `/api/matches?status=${status}&limit=${limit}&skip=${skip}`,
      );

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        throw new Error(data.detail);
      }

      setMatchesData((prev) => (skip === 0 ? data : [...prev, ...data]));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadMatches(selectedMatchStatus, limit, skip);
  }, [selectedMatchStatus, skip]);

  return (
    <div>
      <div className="flex justify-start gap-3">
        <MatchFilterBox
          text="Zaplanowane"
          isActive={selectedMatchStatus === "scheduled"}
          onClick={() => {
            setSelectedMatchStatus("scheduled");
            setSkip(0);
          }}
        />
        <MatchFilterBox
          text="W trakcie"
          isActive={selectedMatchStatus === "locked"}
          onClick={() => {
            setSelectedMatchStatus("locked");
            setSkip(0);
          }}
        />
        <MatchFilterBox
          text="Zakończone"
          isActive={selectedMatchStatus === "finished"}
          onClick={() => {
            setSelectedMatchStatus("finished");
            setSkip(0);
          }}
        />
      </div>

      {isLoading && (
        <div className="mt-4 flex gap-2 text-textSecondary">
          <LoaderCircle className="animate-spin text-textSecondary" /> Ładowanie
        </div>
      )}

      {!isLoading && matchesData.length === 0 && (
        <div className="mt-4">Brak meczy do wyświetlenia</div>
      )}

      <div className="mb-16">
        {!isLoading &&
          matchesData.map((match) => (
            <MatchPredictionsBox key={match.id} matchData={match} />
          ))}
        {!isLoading && matchesData.length > 0 && (
          <div
            onClick={() => {
              setSkip(skip + 10);
            }}
            className="mt-4 text-center text-textSecondary cursor-pointer text-sm"
          >
            Pokaż więcej
          </div>
        )}
      </div>
    </div>
  );
}
