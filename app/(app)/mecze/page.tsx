"use client";

import { useEffect, useState } from "react";
import MatchCard from "@/components/MatchPredictionsBox/MatchCard";
import MatchStatusBox from "@/components/MatchStatusBox";
import { MatchType } from "@/utils/types/match";
import Loader from "@/components/Loader";
import MatchFilterItem from "@/components/MatchFilterItem";

export default function page() {
  const [selectedMatchStatus, setSelectedMatchStatus] = useState<
    "scheduled" | "locked" | "finished"
  >("scheduled");

  const [matchesData, setMatchesData] = useState<MatchType[]>([]);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "betted" | "not_betted"
  >("all");
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  async function loadMatches(
    status: string,
    limit: number,
    skip: number,
    activeFilter: string,
  ) {
    try {
      if (skip === 0) {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true);
      }

      const res = await fetch(
        `/api/matches?bet_filter=${activeFilter}&status=${status}&limit=${limit}&skip=${skip}&include_bets=true`,
      );

      const data = await res.json();

      setTotalItems(data.total);

      if (!res.ok) {
        throw new Error(data.detail);
      }

      setMatchesData((prev) =>
        skip === 0 ? data.items : [...prev, ...data.items],
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadMatches(selectedMatchStatus, limit, skip, activeFilter);
  }, [selectedMatchStatus, skip, activeFilter]);

  return (
    <div>
      <div className="flex justify-start gap-3">
        <MatchStatusBox
          text="Zaplanowane"
          isActive={selectedMatchStatus === "scheduled"}
          onClick={() => {
            setSelectedMatchStatus("scheduled");
            setSkip(0);
            setActiveFilter("all");
          }}
        />
        <MatchStatusBox
          text="W trakcie"
          isActive={selectedMatchStatus === "locked"}
          onClick={() => {
            setSelectedMatchStatus("locked");
            setSkip(0);
            setActiveFilter("all");
          }}
        />
        <MatchStatusBox
          text="Zakończone"
          isActive={selectedMatchStatus === "finished"}
          onClick={() => {
            setSelectedMatchStatus("finished");
            setSkip(0);
            setActiveFilter("all");
          }}
        />
      </div>

      <div className="flex items-center gap-4 mt-4">
        <MatchFilterItem
          text="Wszystkie"
          isActive={activeFilter === "all"}
          onClick={() => {
            setActiveFilter("all");
            setSkip(0);
          }}
        />
        <MatchFilterItem
          text="Obstawione"
          isActive={activeFilter === "betted"}
          onClick={() => {
            setActiveFilter("betted");
            setSkip(0);
          }}
        />
        <MatchFilterItem
          text="Nieobstawione"
          isActive={activeFilter === "not_betted"}
          onClick={() => {
            setActiveFilter("not_betted");
            setSkip(0);
          }}
        />
      </div>

      {isLoading && <Loader />}

      {!isLoading && matchesData.length === 0 && (
        <div className="mt-4 text-textPrimary">Brak meczów do wyświetlenia</div>
      )}

      <div className="mb-16">
        {!isLoading &&
          matchesData.map((match) => (
            <MatchCard
              key={match.id}
              matchData={match}
              onBetPlaced={(matchId) => {
                if (activeFilter === "not_betted") {
                  setMatchesData((prev) =>
                    prev.filter((m) => m.id !== matchId),
                  );
                }
              }}
            />
          ))}
        {!isLoading && matchesData.length < totalItems && (
          <div
            onClick={() => setSkip((prev) => prev + limit)}
            className="mt-4 text-center text-textSecondary cursor-pointer text-sm"
          >
            Pokaż więcej
          </div>
        )}
      </div>
    </div>
  );
}
