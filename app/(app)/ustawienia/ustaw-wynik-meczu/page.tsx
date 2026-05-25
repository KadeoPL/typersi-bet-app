"use client";

import { getMatches } from "@/app/lib/api/getMatches";
import TeamBox from "@/components/MatchPredictionsBox/MatchTeam";
import SetResultModal from "@/components/set-result-modal/SetResultModal";
import { useAuth } from "@/utils/providers/AuthProvider";
import { MatchType } from "@/utils/types/match";
import { LoaderCircle, Pencil } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [matches, setMatches] = useState<MatchType[]>([]);
  const [matchToEdit, setMatchToEdit] = useState<MatchType | null>(null);
  const { user } = useAuth();

  if (user?.role === "player") {
    redirect("/");
  }

  async function loadMatches(status: string, limit: number, skip: number) {
    try {
      setIsLoading(true);

      const res = await fetch(
        `/api/matches?status=${status}&limit=${limit}&skip=${skip}&include_bets=true`,
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail);
      }
      setMatches(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadMatches("finished", 100, 0);
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-textSecondary">Ustaw wynik meczu</h1>

      {isLoading && (
        <div className="mt-4 flex gap-2">
          <LoaderCircle className="animate-spin" />
          Ładowanie
        </div>
      )}

      {!isLoading && (
        <div className="flex flex-col gap-4">
          {matches.map((match: any) => (
            <div
              key={match.id}
              className="bg-surface text-textPrimary rounded-lg p-4 flex justify-between items-center"
            >
              <div className="flex gap-2 items-center text-sm">
                <div>{match.home_team.name}</div>
                <div className="text-textSecondary">:</div>
                <div>{match.away_team.name}</div>
              </div>

              <div
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setMatchToEdit(match);
                }}
                className="text-primary border-[1px] border-primary rounded-md px-4 py-2 text-sm flex gap-2 items-center hover:bg-primary hover:text-background cursor-pointer"
              >
                <Pencil size={16} />
                Ustaw
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && matchToEdit && (
        <SetResultModal
          match={matchToEdit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
