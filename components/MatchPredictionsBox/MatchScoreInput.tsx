type PredictionsGoalInputTypes = {
  goals: number | null;
  onChange: (value: number) => void;
  isEdit: boolean;
};

export default function MatchScoreInput({
  goals,
  onChange,
  isEdit,
}: PredictionsGoalInputTypes) {
  return (
    <input
      disabled={!isEdit}
      type="text"
      value={goals === null ? "-" : goals}
      maxLength={2}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "");

        if (value.length <= 2) {
          onChange(Number(value));
        }
      }}
      className={`w-20 h-14 text-center  border-[1px] border-borderLight rounded-md font-semibold text-2xl focus-visible:outline-none ${goals === null || !isEdit ? "text-primary border-primary bg-surface" : "text-surface bg-primary"} flex items-center justify-center`}
    />
  );
}
