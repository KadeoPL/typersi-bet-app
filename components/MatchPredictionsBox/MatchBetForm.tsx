"use client";

import { ChevronUp, LoaderCircle, Send } from "lucide-react";
import { useEffect, useState } from "react";
import PredictionsGoalInput from "./MatchScoreInput";
import PredictionsTeamRadioInput from "./MatchOutcomeSelect";
import { betMatch } from "@/app/lib/api/betMatch";
import { MatchType } from "@/utils/types/match";
import { patchBet } from "@/app/lib/api/patchBet";

export default function MatchScheduledSection({
  matchData,
}: {
  matchData: MatchType;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [homeGoals, setHomeGoals] = useState<number | null>(null);
  const [awayGoals, setAwayGoals] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const hasBet = !!matchData.my_bet;

  const handleSubmit = async () => {
    setError("");
    setIsSuccess(false);

    if (homeGoals === null || awayGoals === null || selectedOption === null) {
      setError("Pola nie mogą być puste");
      return;
    }

    if (hasBet) {
      try {
        setIsLoading(true);

        await patchBet({
          betId: matchData.my_bet.id,
          scoreHome: homeGoals,
          scoreAway: awayGoals,
          outcomeBet: selectedOption,
        });

        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);

        setError(message);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);

        await betMatch({
          matchId: matchData.id,
          scoreHome: homeGoals,
          scoreAway: awayGoals,
          outcomeBet: selectedOption,
        });

        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);

        setError(message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (!hasBet) return;

    setHomeGoals(matchData.my_bet.score_home);

    setAwayGoals(matchData.my_bet.score_away);

    setSelectedOption(matchData.my_bet.outcome_bet);
  }, []);

  return (
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

          <div className="text-2xl text-textPrimary text-center">:</div>

          <PredictionsGoalInput goals={awayGoals} onChange={setAwayGoals} />
        </div>

        <div className="mt-6">
          <div className="flex gap-4 items-center justify-center mb-4">
            <div className="w-12 h-[1px] bg-textSecondary"></div>
            <div className="text-sm text-textSecondary ">Rezultat meczu</div>
            <div className="w-12 h-[1px] bg-textSecondary"></div>
          </div>

          <PredictionsTeamRadioInput
            onChange={setSelectedOption}
            selectedOption={selectedOption}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-full bg-primary text-black font-semibold flex justify-center items-center gap-2 mt-6 cursor-pointer"
        >
          {isLoading ? (
            <>
              <LoaderCircle className="animate-spin" size={20} />
              Wysłanie...
            </>
          ) : isSuccess ? (
            <>✓ Wysłano</>
          ) : (
            <>
              <Send size={20} /> Wyślij
            </>
          )}
        </button>
      </div>
      <ChevronUp
        className={`
              text-white mt-4 cursor-pointer
              transition-transform duration-300
              ${isOpen ? "rotate-0" : "rotate-180"}
            `}
        onClick={() => setIsOpen(!isOpen)}
      />
      {error && <p className="text-danger ">{error}</p>}
    </>
  );
}
