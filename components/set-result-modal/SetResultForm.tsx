import { useForm } from "react-hook-form";
import Button, { ButtonState } from "../Button";
import { useState } from "react";
import { MatchType } from "@/utils/types/match";
import { setResult } from "@/app/lib/api/setResult";

type SetResultFormProps = {
  match: MatchType;
};

export default function SetResultForm({ match }: SetResultFormProps) {
  const { register, handleSubmit } = useForm<MatchType>({
    defaultValues: {
      home_score: match.home_score,
      away_score: match.away_score,
    },
  });

  const [buttonState, setButtonState] = useState<ButtonState>("normal");
  const [error, setError] = useState<string>("");

  const onSubmit = async (data: MatchType) => {
    try {
      setError("");
      setButtonState("loading");

      await setResult(match.id, data.home_score, data.away_score);

      setButtonState("success");

      setTimeout(() => {
        setButtonState("normal");
      }, 1500);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Wystąpił błąd";

      setError(message);

      setButtonState("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex gap-2 items-center justify-between w-full">
        <label htmlFor="home_score" className="text-textPrimary">
          {match.home_team.name}
        </label>
        <input
          {...register("home_score")}
          onClick={() => {
            setError("");
            setButtonState("normal");
          }}
          id="home_score"
          type="number"
          maxLength={2}
          className={`w-20 h-14 text-center bg-surface border-[1px] border-borderLight rounded-md font-semibold text-2xl focus-visible:outline-none ${match.home_score === null ? "text-textMuted" : "text-primary"} flex items-center justify-center`}
        />
      </div>
      <div className="flex gap-2 items-center justify-between w-full mt-4">
        <label htmlFor="away_score" className="text-textPrimary">
          {match.away_team.name}
        </label>
        <input
          {...register("away_score")}
          onClick={() => {
            setError("");
            setButtonState("normal");
          }}
          id="away_score"
          type="number"
          maxLength={2}
          className={`w-20 h-14 text-center bg-surface border-[1px] border-borderLight rounded-md font-semibold text-2xl focus-visible:outline-none ${match.away_score === null ? "text-textMuted" : "text-primary"} flex items-center justify-center`}
        />
      </div>

      <Button
        text={error ? "Błąd wysyłania" : "Zapisz"}
        state={buttonState}
        className="w-full bg-primary py-2 rounded-xl font-bold my-8"
        type="submit"
      />

      {error && (
        <p className="text-white bg-danger px-4 py-2 text-sm rounded-lg">
          {error}
        </p>
      )}
    </form>
  );
}
